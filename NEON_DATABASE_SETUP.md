# Neon Database Setup Instructions

This document provides step-by-step instructions for setting up the Neon PostgreSQL database integration in Vercel for the email collection and newsletter functionality.

## Prerequisites
- Vercel account with project deployed
- Access to Vercel project dashboard

## Step 1: Create Neon Database in Vercel

1. **Navigate to Your Project**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your marathon training plan project

2. **Access Storage Tab**
   - Click on the "Storage" tab in your project navigation
   - This is where you'll manage all database integrations

3. **Create Postgres Database**
   - Click "Create Database" button
   - Select "Postgres" (Powered by Neon)
   - Follow the setup wizard:
     - Choose a database name (e.g., `marathon-training-db`)
     - Select your preferred region (choose closest to your users)
     - Click "Create & Continue"

4. **Automatic Environment Variables**
   - Vercel will automatically set these environment variables:
     - `POSTGRES_URL`: Main connection string
     - `POSTGRES_PRISMA_URL`: Prisma-compatible connection string
     - `POSTGRES_URL_NON_POOLING`: Direct connection (non-pooled)
     - `POSTGRES_USER`: Database user
     - `POSTGRES_HOST`: Database host
     - `POSTGRES_PASSWORD`: Database password
     - `POSTGRES_DATABASE`: Database name
   - These are automatically available to your app - no manual configuration needed!

## Step 2: Initialize Database Schema

After creating the database, you need to run the schema SQL to create the tables and indexes.

### Option A: Using Neon Console (Recommended)

1. **Access Neon Console**
   - In Vercel Storage tab, click "Open Neon Console"
   - Or go directly to [Neon Console](https://console.neon.tech/)

2. **Open SQL Editor**
   - Navigate to the SQL Editor tab
   - Select your database from the dropdown

3. **Run Schema Script**
   - Copy the contents of `src/db/schema.sql`
   - Paste into the SQL editor
   - Click "Run" to execute
   - Verify tables are created successfully

### Option B: Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Link your project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run a one-time database migration script
# (You'll need to create a script that executes schema.sql)
node scripts/migrate.js
```

## Step 3: Verify Setup

1. **Check Environment Variables**
   - In Vercel Dashboard → Settings → Environment Variables
   - Confirm all POSTGRES_* variables are present
   - These should be automatically set for all environments

2. **Test Database Connection**
   - Deploy your updated application
   - Check deployment logs for any database connection errors
   - The `testDatabaseConnection()` function in `src/db/database.ts` can help debug issues

3. **Test Form Submission**
   - Go to your deployed site's custom plan page
   - Fill out the form with consent checked
   - Submit and verify no errors in Vercel logs

## Step 4: Monitor Database

1. **Neon Dashboard**
   - View query performance and metrics
   - Monitor database size and connections
   - Access logs for debugging

2. **Vercel Analytics**
   - Monitor API route performance (`/api/unsubscribe`)
   - Check for any server errors related to database operations

## Environment Variables Reference

These are automatically set by Vercel when you create the Neon database:

```env
# Main connection URL (pooled)
POSTGRES_URL="postgres://..."

# Prisma-compatible URL (pooled)
POSTGRES_PRISMA_URL="postgres://..."

# Direct connection (non-pooled) - use for migrations
POSTGRES_URL_NON_POOLING="postgres://..."

# Individual connection parameters
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
```

## Additional Environment Variables Needed

Make sure these are also set in your Vercel project:

```env
# For sending training plan emails (already configured)
RESEND_API_KEY="re_..."

# For Google Analytics (already configured)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-..."
```

## Database Schema Overview

The `newsletter_subscribers` table stores:
- Contact information (email, first name, last name)
- Marketing consent status and date (GDPR compliant)
- Training plan preferences
- Unsubscribe tokens
- Audit timestamps

### Key Features:
- **GDPR Compliant**: Opt-in only consent, easy unsubscribe
- **Duplicate Handling**: UPSERT logic for existing emails
- **Indexed**: Fast queries on email and consent status
- **Graceful Degradation**: Form still works if database is down

## Troubleshooting

### Connection Errors
- **Issue**: "Failed to connect to database"
- **Solution**: Verify POSTGRES_URL is set in environment variables
- **Check**: Redeploy after adding database to apply env vars

### Schema Not Found
- **Issue**: "Table newsletter_subscribers does not exist"
- **Solution**: Run the schema.sql file in Neon console
- **Verify**: Check table exists in Neon dashboard

### Permission Errors
- **Issue**: "Permission denied for table..."
- **Solution**: Ensure database user has proper permissions
- **Check**: Neon user should have full access by default

## Security Best Practices

1. **Never Commit Credentials**
   - All POSTGRES_* vars are set by Vercel
   - Don't add them to git or .env files

2. **Use Environment Variables**
   - Always use `process.env.POSTGRES_URL`
   - Never hardcode connection strings

3. **Monitor Access**
   - Review Neon access logs regularly
   - Rotate credentials if compromised

4. **Backup Data**
   - Neon provides automatic backups
   - Export subscriber list periodically for safety

## Need Help?

- **Vercel Docs**: https://vercel.com/docs/storage/vercel-postgres
- **Neon Docs**: https://neon.tech/docs/introduction
- **Support**: Check Vercel and Neon community forums

## Database Management

Use the helper functions in `src/db/queries.ts`:
- `saveSubscriber()` - Add/update subscriber
- `getSubscriber(email)` - Get by email
- `unsubscribeByToken(token)` - Unsubscribe user
- `getActiveSubscribers()` - Get all active subscribers
- `exportSubscriberEmails()` - Export email list
- `getSubscriberStats()` - Get statistics

## Future Enhancements

Consider adding:
- Admin dashboard for subscriber management
- Email campaign tracking
- A/B testing for training tips
- Integration with email marketing services (Mailchimp, SendGrid, etc.)
