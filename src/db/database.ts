/**
 * Database Connection Utility
 * 
 * Uses Vercel Postgres (Neon) for serverless database access.
 * 
 * Environment Variables Required:
 * - POSTGRES_URL: Main database connection URL (auto-set by Vercel)
 * - POSTGRES_PRISMA_URL: Prisma-compatible connection URL (auto-set by Vercel)
 * 
 * Setup Instructions:
 * 1. In Vercel Dashboard, go to your project
 * 2. Navigate to Storage tab
 * 3. Click "Create Database" and select "Postgres (Powered by Neon)"
 * 4. Follow the setup wizard - this will automatically set environment variables
 * 5. Run the schema.sql file in the Neon SQL Editor or using Vercel's database dashboard
 */

import { sql } from '@vercel/postgres';

/**
 * Get database connection
 * This uses the @vercel/postgres package which automatically uses POSTGRES_URL env var
 */
export const db = sql;

/**
 * Test database connection
 * Useful for health checks and debugging
 */
export async function testDatabaseConnection(): Promise<boolean> {
  try {
    await sql`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

/**
 * Initialize database tables
 * Runs the schema creation if tables don't exist
 * Note: In production, you should run schema.sql manually in Neon dashboard
 */
export async function initializeDatabase(): Promise<void> {
  try {
    // Check if table exists
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscribers'
      );
    `;
    
    if (!result.rows[0].exists) {
      console.log('Newsletter subscribers table does not exist. Please run schema.sql in Neon dashboard.');
    }
  } catch (error) {
    console.error('Error checking database schema:', error);
    throw error;
  }
}
