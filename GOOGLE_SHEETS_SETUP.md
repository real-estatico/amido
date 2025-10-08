# 📊 Google Sheets Integration Setup Guide

This guide will help you connect your Amido forms directly to Google Sheets, eliminating the need for a backend database.

## 🚀 **Step 1: Create Google Sheet**

1. **Open Google Sheets**: Go to [sheets.google.com](https://sheets.google.com)
2. **Create New Sheet**: Click "Blank" to create a new spreadsheet
3. **Name Your Sheet**: Rename it to "Amido Form Submissions" (or any name you prefer)
4. **Save the Sheet ID**: Copy the sheet ID from the URL (the long string between `/d/` and `/edit`)

## 🔧 **Step 2: Set Up Google Apps Script**

1. **Open Apps Script**: In your Google Sheet, go to `Extensions` > `Apps Script`
2. **Delete Default Code**: Remove any existing code in the editor
3. **Copy the Script**: Copy the entire contents of `google-apps-script.js` from this repository
4. **Paste the Code**: Paste it into the Apps Script editor
5. **Save the Script**: Click the save icon and name it "Amido Forms Handler"

## 🚀 **Step 3: Deploy the Script**

1. **Click Deploy**: Click the "Deploy" button in the Apps Script editor
2. **New Deployment**: Select "New deployment"
3. **Configure Deployment**:
   - **Type**: Web app
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. **Deploy**: Click "Deploy"
5. **Authorize**: Follow the authorization prompts
6. **Copy the URL**: Save the deployment URL (looks like `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## 🔗 **Step 4: Update Your Forms**

1. **Update Script URL**: In `src/utils/formSubmission.ts`, replace `YOUR_SCRIPT_ID` with your actual script URL
2. **Test the Integration**: Submit a test form to verify it works

## 📋 **Step 5: Set Up Sheet Headers**

The script will automatically create these columns in your Google Sheet:

### **Contact Form Fields:**
- Timestamp
- Form Type
- Name
- Email
- Phone
- Company
- Message

### **Registration Form Fields:**
- Timestamp
- Form Type
- Name
- Email
- Phone
- Investment Experience
- Investment Types
- Investment Timeline
- Investment Amount
- Investment Goal
- Liquidity Importance
- Preferred Regions
- Project Type
- Additional Info

## ✅ **Step 6: Test Your Setup**

1. **Run Initial Setup**: In Apps Script, run the `initialSetup()` function once
2. **Test Contact Form**: Fill out and submit the contact form on your website
3. **Test Registration Form**: Fill out and submit the registration form
4. **Check Google Sheet**: Verify that data appears in your Google Sheet

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **"Sheet not found" Error**:
   - Make sure you ran `initialSetup()` function
   - Check that the sheet name matches `SHEET_NAME` in the script

2. **CORS Errors**:
   - Ensure your script is deployed as "Anyone" can access
   - Check that the script URL is correct

3. **Data Not Appearing**:
   - Check the Apps Script logs for errors
   - Verify the form field names match the script expectations

### **Debug Steps:**

1. **Check Apps Script Logs**: Go to Apps Script > Executions to see error logs
2. **Test Script Manually**: Use the `doGet()` function to test if the script is accessible
3. **Verify Form Data**: Check browser console for any JavaScript errors

## 🎯 **Benefits of This Setup**

- ✅ **No Backend Required**: Direct form-to-sheet integration
- ✅ **Real-time Data**: Submissions appear instantly in Google Sheets
- ✅ **Easy Management**: View and manage submissions in familiar Google Sheets interface
- ✅ **Automatic Backup**: Google Sheets provides automatic backup and version history
- ✅ **Collaboration**: Share sheet access with team members
- ✅ **Export Options**: Easy to export data to CSV, Excel, etc.

## 📊 **Advanced Features**

### **Automatic Notifications:**
You can set up Google Sheets to send email notifications when new submissions arrive:

1. In Google Sheets, go to `Tools` > `Notification rules`
2. Set up notifications for new form submissions
3. Choose email frequency (immediate, daily, weekly)

### **Data Validation:**
Add data validation rules in Google Sheets to ensure data quality:

1. Select columns with specific data types
2. Go to `Data` > `Data validation`
3. Set up rules for email format, phone numbers, etc.

### **Charts and Analytics:**
Create charts and pivot tables to analyze form submissions:

1. Use `Insert` > `Chart` to visualize submission trends
2. Create pivot tables to analyze data by form type, date, etc.

## 🔒 **Security Considerations**

- The script URL is public, but only processes form submissions
- No sensitive data is stored in the script itself
- All data is stored securely in your Google Sheet
- You can restrict sheet access to specific users if needed

## 📞 **Support**

If you encounter any issues:

1. Check the Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Test with a simple form submission first
4. Check browser console for JavaScript errors

---

**🎉 Congratulations!** Your forms are now connected to Google Sheets and will automatically collect all submissions without requiring a backend database!

