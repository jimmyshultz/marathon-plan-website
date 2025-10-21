# Local Development Guide

## Running the Project Locally

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables (Optional for Email)

If you want to test the email functionality:

1. Create a `.env.local` file in the root of your project:
```bash
touch .env.local
```

2. Add your Resend API key:
```
RESEND_API_KEY=re_your_api_key_here
```

**Note:** The app works perfectly without this! You can skip this step and still test:
- Plan generation
- Plan display
- Download/copy/print features
- The only thing that won't work is email sending

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open [http://localhost:3000](http://localhost:3000)

### What to Test

1. **Home Page** - Check the new "Create Custom Plan" button
2. **Navigation** - Click the "Custom Plan" button in the nav
3. **Custom Plan Page** - `/custom-plan`
   - Fill out the form
   - Try invalid inputs (date in past, etc.) to see validation
   - Submit without email to see plan generation
   - If you have Resend API key, try with email
4. **Generated Plan**
   - Check the weekly breakdown
   - Try the Copy to Clipboard button
   - Try the Download button
   - Try the Print button

### Stopping the Server
Press `Ctrl+C` in your terminal

### Common Issues

**Port already in use:**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

**Dependencies issues:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build issues:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## File Structure

```
/workspace/
├── .env.local              # Your local environment variables (NOT committed)
├── .env.example            # Template for environment variables (committed)
├── src/
│   ├── app/
│   │   ├── custom-plan/    # New custom plan page
│   │   └── actions/        # Server actions (email & generation)
│   ├── components/         # React components
│   └── utils/              # Marathon plan generator
└── package.json
```

## Development Tips

### Hot Reload
Next.js automatically reloads when you make changes. No need to restart the server!

### Checking Logs
- Browser console: Right-click → Inspect → Console tab
- Server logs: Check your terminal where `npm run dev` is running

### Testing Email Without Sending
If you want to see what the email would look like without sending:
1. Comment out the email sending code in `src/app/actions/generatePlan.ts`
2. Console.log the email HTML
3. Copy it to an HTML file and open in browser

### TypeScript Errors
If you see TypeScript errors in your editor:
```bash
# Check for type errors
npm run build
```

### Linting
```bash
# Check for code quality issues
npm run lint
```
