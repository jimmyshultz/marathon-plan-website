-- Newsletter Subscribers Table
-- Stores user information for marketing communications and training plan delivery
-- Environment Variables Required: POSTGRES_URL, POSTGRES_PRISMA_URL (auto-set by Vercel Neon integration)

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    -- Primary key
    id SERIAL PRIMARY KEY,
    
    -- Contact information
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    
    -- Marketing consent (GDPR compliant - opt-in only)
    marketing_consent BOOLEAN NOT NULL DEFAULT false,
    consent_date TIMESTAMP,
    
    -- Training plan details
    marathon_date DATE,
    goal_time VARCHAR(20),
    training_weeks INTEGER,
    days_per_week INTEGER,
    current_weekly_miles INTEGER,
    max_weekly_miles INTEGER,
    
    -- Audit timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP,
    
    -- Unsubscribe token for one-click unsubscribe links
    unsubscribe_token VARCHAR(100) UNIQUE
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_marketing_consent ON newsletter_subscribers(marketing_consent);
CREATE INDEX IF NOT EXISTS idx_newsletter_unsubscribe_token ON newsletter_subscribers(unsubscribe_token);

-- Comments for documentation
COMMENT ON TABLE newsletter_subscribers IS 'Stores subscriber information for newsletter and training plan delivery';
COMMENT ON COLUMN newsletter_subscribers.marketing_consent IS 'User consent for marketing emails (GDPR compliant, opt-in only)';
COMMENT ON COLUMN newsletter_subscribers.unsubscribe_token IS 'Unique token for unsubscribe links';
