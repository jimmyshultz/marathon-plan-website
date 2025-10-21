# Custom Training Plan Setup Guide

This guide explains how to set up the email functionality for the custom training plan feature.

## Overview

The custom training plan generator allows users to create personalized marathon training plans based on their specific goals and circumstances. Users can optionally provide their email address to receive the plan via email.

## Email Service Setup

The application uses [Resend](https://resend.com) for sending emails. Resend is a modern email API that's perfect for transactional emails.

### Steps to Set Up Email Functionality

1. **Sign up for Resend**
   - Go to [https://resend.com](https://resend.com)
   - Create a free account (includes 3,000 emails/month for free)

2. **Get Your API Key**
   - Log in to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key (it will only be shown once)

3. **Configure Your Domain (Optional but Recommended)**
   - For production use, verify your domain in Resend
   - This allows you to send from your own domain (e.g., `noreply@marathontrainingplans.com`)
   - For development, you can use the default Resend domain

4. **Add API Key to Environment Variables**
   - Create a `.env.local` file in the root of your project
   - Add your API key:
     ```
     RESEND_API_KEY=re_your_api_key_here
     ```
   - **Important:** Never commit this file to version control

5. **Update Email Sender Address** (if using custom domain)
   - Open `src/app/actions/generatePlan.ts`
   - Find the `from` field in the email configuration
   - Update to match your verified domain:
     ```typescript
     from: "Marathon Training Plans <noreply@yourdomain.com>"
     ```

## Testing Email Functionality

### Local Testing
1. Set up your API key as described above
2. Run the development server: `npm run dev`
3. Navigate to `/custom-plan`
4. Fill out the form with your email address
5. Check your inbox for the training plan email

### Without Email (Development)
If you don't want to set up email immediately, the application will still work:
- Users can generate plans without providing an email
- The plan will be displayed on the page
- Users can copy, download, or print the plan
- A warning will be logged in the console if `RESEND_API_KEY` is not set

## Features

### User Input Fields
- **Marathon Date**: The date of the target marathon
- **Goal Time**: Desired finish time (HH:MM:SS format)
- **Training Weeks**: Duration of the training plan (8-20 weeks)
- **Running Days Per Week**: How many days per week to run (3-7 days)
- **Current Weekly Mileage**: Starting weekly mileage
- **Peak Weekly Mileage**: Target peak mileage during training
- **Email** (optional): Where to send the training plan
- **First Name** (optional): For email personalization

### Plan Generation Algorithm
- Based on Jack Daniels' VDOT methodology
- Progressive mileage buildup
- Proper taper before race day
- Mix of easy runs, tempo runs, interval workouts, and long runs
- Customized workout distribution based on days per week

### Email Content
The email includes:
- Personalized greeting
- Training plan summary
- Complete week-by-week schedule
- Training notes and pace key
- Professional HTML formatting
- Plain text fallback

## File Structure

```
src/
├── app/
│   ├── actions/
│   │   └── generatePlan.ts        # Server action for plan generation and email
│   └── custom-plan/
│       └── page.tsx                # Custom plan page
├── components/
│   ├── CustomPlanForm.tsx          # Form for user input
│   └── CustomPlanDisplay.tsx       # Display generated plan
└── utils/
    └── marathonPlanGenerator.ts    # Core plan generation logic
```

## Troubleshooting

### Email Not Sending
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Verify your API key is valid in the Resend dashboard
- Check the browser console and server logs for error messages
- Ensure you're not exceeding Resend's rate limits

### Domain Verification Issues
- Make sure DNS records are properly configured
- Allow time for DNS propagation (up to 48 hours)
- Use the Resend dashboard to check verification status

### Plan Not Generating
- Check browser console for validation errors
- Ensure all required fields are filled
- Verify date is in the future
- Check that max weekly mileage > current weekly mileage

## Production Deployment

When deploying to production (e.g., Vercel):

1. Add `RESEND_API_KEY` to your environment variables in the hosting platform
2. Verify your sending domain in Resend
3. Update the `from` email address to use your verified domain
4. Test the email functionality in production
5. Monitor email deliverability in the Resend dashboard

## Cost Considerations

Resend Pricing (as of 2024):
- **Free Tier**: 3,000 emails/month, 100 emails/day
- **Pro Tier**: $20/month for 50,000 emails
- **Business Tier**: Custom pricing for higher volumes

For most marathon training plan sites, the free tier should be sufficient.

## Security Notes

- API keys should never be committed to version control
- Use environment variables for all sensitive configuration
- Validate user input on both client and server side
- Rate limit form submissions if needed to prevent abuse
- Monitor email sending for unusual patterns

## Support

For issues with:
- **Resend API**: Visit [https://resend.com/docs](https://resend.com/docs)
- **Plan Generation**: Check the `marathonPlanGenerator.ts` implementation
- **Email Formatting**: Modify the email templates in `generatePlan.ts`
