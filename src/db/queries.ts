/**
 * Database Query Helpers
 * 
 * Helper functions for interacting with the newsletter_subscribers table.
 * All functions include error handling and logging.
 */

import { sql } from '@vercel/postgres';
import { randomBytes } from 'crypto';

/**
 * Subscriber data interface matching database schema
 */
export interface Subscriber {
  id?: number;
  email: string;
  firstName?: string;
  lastName?: string;
  marketingConsent: boolean;
  consentDate?: Date;
  marathonDate?: string;
  goalTime?: string;
  trainingWeeks?: number;
  daysPerWeek?: number;
  currentWeeklyMiles?: number;
  maxWeeklyMiles?: number;
  createdAt?: Date;
  unsubscribedAt?: Date;
  unsubscribeToken?: string;
}

/**
 * Generate a unique unsubscribe token
 */
export function generateUnsubscribeToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Save a new subscriber or update existing one
 * If email exists, updates the record with new information
 * 
 * @param subscriber Subscriber data to save
 * @returns The saved subscriber record
 */
export async function saveSubscriber(subscriber: Subscriber): Promise<Subscriber | null> {
  try {
    // Generate unsubscribe token if not provided
    const unsubscribeToken = subscriber.unsubscribeToken || generateUnsubscribeToken();
    const consentDate = subscriber.marketingConsent ? new Date().toISOString() : null;

    // Insert or update on conflict (duplicate email)
    const result = await sql`
      INSERT INTO newsletter_subscribers (
        email,
        first_name,
        last_name,
        marketing_consent,
        consent_date,
        marathon_date,
        goal_time,
        training_weeks,
        days_per_week,
        current_weekly_miles,
        max_weekly_miles,
        unsubscribe_token
      )
      VALUES (
        ${subscriber.email},
        ${subscriber.firstName || null},
        ${subscriber.lastName || null},
        ${subscriber.marketingConsent},
        ${consentDate},
        ${subscriber.marathonDate || null},
        ${subscriber.goalTime || null},
        ${subscriber.trainingWeeks || null},
        ${subscriber.daysPerWeek || null},
        ${subscriber.currentWeeklyMiles || null},
        ${subscriber.maxWeeklyMiles || null},
        ${unsubscribeToken}
      )
      ON CONFLICT (email) 
      DO UPDATE SET
        first_name = COALESCE(EXCLUDED.first_name, newsletter_subscribers.first_name),
        last_name = COALESCE(EXCLUDED.last_name, newsletter_subscribers.last_name),
        marketing_consent = EXCLUDED.marketing_consent,
        consent_date = CASE 
          WHEN EXCLUDED.marketing_consent = true THEN CURRENT_TIMESTAMP 
          ELSE newsletter_subscribers.consent_date 
        END,
        marathon_date = COALESCE(EXCLUDED.marathon_date, newsletter_subscribers.marathon_date),
        goal_time = COALESCE(EXCLUDED.goal_time, newsletter_subscribers.goal_time),
        training_weeks = COALESCE(EXCLUDED.training_weeks, newsletter_subscribers.training_weeks),
        days_per_week = COALESCE(EXCLUDED.days_per_week, newsletter_subscribers.days_per_week),
        current_weekly_miles = COALESCE(EXCLUDED.current_weekly_miles, newsletter_subscribers.current_weekly_miles),
        max_weekly_miles = COALESCE(EXCLUDED.max_weekly_miles, newsletter_subscribers.max_weekly_miles),
        unsubscribed_at = NULL
      RETURNING *;
    `;

    if (result.rows.length > 0) {
      const row = result.rows[0];
      return {
        id: row.id,
        email: row.email,
        firstName: row.first_name,
        lastName: row.last_name,
        marketingConsent: row.marketing_consent,
        consentDate: row.consent_date,
        marathonDate: row.marathon_date,
        goalTime: row.goal_time,
        trainingWeeks: row.training_weeks,
        daysPerWeek: row.days_per_week,
        currentWeeklyMiles: row.current_weekly_miles,
        maxWeeklyMiles: row.max_weekly_miles,
        createdAt: row.created_at,
        unsubscribedAt: row.unsubscribed_at,
        unsubscribeToken: row.unsubscribe_token,
      };
    }

    return null;
  } catch (error) {
    console.error('Error saving subscriber:', error);
    // Don't throw - gracefully degrade
    return null;
  }
}

/**
 * Get subscriber by email
 * 
 * @param email Subscriber email address
 * @returns Subscriber record or null if not found
 */
export async function getSubscriber(email: string): Promise<Subscriber | null> {
  try {
    const result = await sql`
      SELECT * FROM newsletter_subscribers
      WHERE email = ${email}
      LIMIT 1;
    `;

    if (result.rows.length > 0) {
      const row = result.rows[0];
      return {
        id: row.id,
        email: row.email,
        firstName: row.first_name,
        lastName: row.last_name,
        marketingConsent: row.marketing_consent,
        consentDate: row.consent_date,
        marathonDate: row.marathon_date,
        goalTime: row.goal_time,
        trainingWeeks: row.training_weeks,
        daysPerWeek: row.days_per_week,
        currentWeeklyMiles: row.current_weekly_miles,
        maxWeeklyMiles: row.max_weekly_miles,
        createdAt: row.created_at,
        unsubscribedAt: row.unsubscribed_at,
        unsubscribeToken: row.unsubscribe_token,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching subscriber:', error);
    return null;
  }
}

/**
 * Unsubscribe user by token
 * Sets unsubscribed_at timestamp and marketing_consent to false
 * 
 * @param token Unique unsubscribe token
 * @returns Success boolean
 */
export async function unsubscribeByToken(token: string): Promise<boolean> {
  try {
    const result = await sql`
      UPDATE newsletter_subscribers
      SET 
        unsubscribed_at = CURRENT_TIMESTAMP,
        marketing_consent = false
      WHERE unsubscribe_token = ${token}
      AND unsubscribed_at IS NULL
      RETURNING id;
    `;

    return result.rows.length > 0;
  } catch (error) {
    console.error('Error unsubscribing user:', error);
    return false;
  }
}

/**
 * Get all active subscribers (consented and not unsubscribed)
 * 
 * @returns Array of active subscriber emails
 */
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  try {
    const result = await sql`
      SELECT * FROM newsletter_subscribers
      WHERE marketing_consent = true
      AND unsubscribed_at IS NULL
      ORDER BY created_at DESC;
    `;

    return result.rows.map((row) => ({
      id: row.id,
      email: row.email,
      firstName: row.first_name,
      lastName: row.last_name,
      marketingConsent: row.marketing_consent,
      consentDate: row.consent_date,
      marathonDate: row.marathon_date,
      goalTime: row.goal_time,
      trainingWeeks: row.training_weeks,
      daysPerWeek: row.days_per_week,
      currentWeeklyMiles: row.current_weekly_miles,
      maxWeeklyMiles: row.max_weekly_miles,
      createdAt: row.created_at,
      unsubscribedAt: row.unsubscribed_at,
      unsubscribeToken: row.unsubscribe_token,
    }));
  } catch (error) {
    console.error('Error fetching active subscribers:', error);
    return [];
  }
}

/**
 * Export subscriber emails for marketing use
 * Returns only email addresses of active subscribers
 * 
 * @returns Array of email addresses
 */
export async function exportSubscriberEmails(): Promise<string[]> {
  try {
    const result = await sql`
      SELECT email FROM newsletter_subscribers
      WHERE marketing_consent = true
      AND unsubscribed_at IS NULL
      ORDER BY created_at DESC;
    `;

    return result.rows.map((row) => row.email);
  } catch (error) {
    console.error('Error exporting subscriber emails:', error);
    return [];
  }
}

/**
 * Get subscriber statistics
 * Useful for analytics and reporting
 */
export async function getSubscriberStats(): Promise<{
  total: number;
  active: number;
  unsubscribed: number;
}> {
  try {
    const result = await sql`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN marketing_consent = true AND unsubscribed_at IS NULL THEN 1 ELSE 0 END) as active,
        SUM(CASE WHEN unsubscribed_at IS NOT NULL THEN 1 ELSE 0 END) as unsubscribed
      FROM newsletter_subscribers;
    `;

    const row = result.rows[0];
    return {
      total: parseInt(row.total) || 0,
      active: parseInt(row.active) || 0,
      unsubscribed: parseInt(row.unsubscribed) || 0,
    };
  } catch (error) {
    console.error('Error fetching subscriber stats:', error);
    return { total: 0, active: 0, unsubscribed: 0 };
  }
}
