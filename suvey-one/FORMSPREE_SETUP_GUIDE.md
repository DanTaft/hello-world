# 🚀 How to Set Up Your Survey Form with Formspree

## Step 1: Create Your Formspree Account
1. Go to **https://formspree.io**
2. Click **"Get Started"** or **"Sign Up"**
3. Create a free account with your email

## Step 2: Create a New Form
1. After logging in, click **"+ New Form"**
2. Give your form a name like **"Painting Services Survey"**
3. Formspree will generate a unique Form ID (looks like: `xpzgkrqw`)

## Step 3: Update Your HTML File
1. Open your `survey.html` file
2. Find this line:
   ```html
   <form id="survey-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID from Formspree
   ```html
   <form id="survey-form" action="https://formspree.io/f/xpzgkrqw" method="POST">
   ```

## Step 4: Configure Formspree Settings (Optional)
In your Formspree dashboard, you can:
- ✅ Set up email notifications
- ✅ Add a custom thank you page
- ✅ Enable spam protection
- ✅ Set up webhook integrations

## Step 5: Test Your Form
1. Upload your `survey.html` and `survey.css` files to any web hosting
2. **OR** use GitHub Pages for free hosting:
   - Create a new repository on GitHub
   - Upload your files
   - Go to Settings → Pages
   - Enable GitHub Pages

## Step 6: Verify Setup
1. Fill out your form and submit it
2. Check your email for the submission
3. Check your Formspree dashboard for the data

## Free Plan Limits
- ✅ **50 submissions per month** (perfect for starting out)
- ✅ **Unlimited forms**
- ✅ **Basic integrations**
- ✅ **Spam filtering**

## What You'll Receive via Email
When someone submits your survey, you'll get an email with:
- Customer's name and email
- All their survey responses
- Timestamp of submission
- You can reply directly to the customer

## Hosting Options (Free)
1. **GitHub Pages** (Recommended)
   - Free hosting
   - Easy to update
   - Professional URL

2. **Netlify**
   - Drag and drop your files
   - Free custom domain

3. **Vercel**
   - Similar to Netlify
   - Great performance

## Pro Tips
- Test your form before going live
- Check your spam folder for submissions
- Keep your Form ID secure (don't share publicly)
- Consider upgrading to paid plan if you get more than 50 submissions/month

## Need Help?
- Formspree has excellent documentation: https://help.formspree.io
- Their support team is very responsive
- Form submissions will include all the data from your comprehensive survey

Your form is now ready to collect professional painting survey data! 🎨
