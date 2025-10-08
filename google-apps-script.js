// Google Apps Script for Amido Real Estate Platform
// This script handles form submissions and stores them in Google Sheets

const CONTACT_SHEET_NAME = 'Contact Form Submissions';
const REGISTRATION_SHEET_NAME = 'Registration Form Submissions';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
  
  // Create Contact Form sheet
  let contactSheet = activeSpreadsheet.getSheetByName(CONTACT_SHEET_NAME);
  if (!contactSheet) {
    contactSheet = activeSpreadsheet.insertSheet(CONTACT_SHEET_NAME);
    setupContactHeaders(contactSheet);
  } else {
    setupContactHeaders(contactSheet);
  }
  
  // Create Registration Form sheet
  let registrationSheet = activeSpreadsheet.getSheetByName(REGISTRATION_SHEET_NAME);
  if (!registrationSheet) {
    registrationSheet = activeSpreadsheet.insertSheet(REGISTRATION_SHEET_NAME);
    setupRegistrationHeaders(registrationSheet);
  } else {
    setupRegistrationHeaders(registrationSheet);
  }
}

function setupContactHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Message'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  sheet.autoResizeColumns(1, headers.length);
}

function setupRegistrationHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Message',
    'Investment Experience',
    'Investment Types',
    'Investment Timeline',
    'Investment Amount',
    'Investment Goal',
    'Liquidity Importance',
    'Preferred Regions',
    'Project Type',
    'Additional Info'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#34a853');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  sheet.autoResizeColumns(1, headers.length);
}

function doGet(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    
    // Debug logging
    console.log('Received parameters:', e.parameter);
    console.log('Form Type:', e.parameter['Form Type']);
    console.log('Has Investment Experience:', e.parameter['Investment Experience']);
    
    // Determine which sheet to use based on form type
    let sheet;
    let formType = e.parameter['Form Type'] || '';
    
    // More explicit form detection
    if (formType === 'Contact Form') {
      // Contact form - explicitly marked
      console.log('Routing to Contact Form sheet');
      sheet = doc.getSheetByName(CONTACT_SHEET_NAME);
      if (!sheet) {
        throw new Error('Contact Form sheet not found. Please run initialSetup() first.');
      }
    } else if (formType === 'Registration Form' || e.parameter['Investment Experience'] || e.parameter['Investment Amount'] || e.parameter['Investment Types']) {
      // Registration form - explicitly marked or has investment fields
      console.log('Routing to Registration Form sheet');
      sheet = doc.getSheetByName(REGISTRATION_SHEET_NAME);
      if (!sheet) {
        throw new Error('Registration Form sheet not found. Please run initialSetup() first.');
      }
    } else {
      // Default to contact form for simple submissions
      console.log('Defaulting to Contact Form sheet');
      sheet = doc.getSheetByName(CONTACT_SHEET_NAME);
      if (!sheet) {
        throw new Error('Contact Form sheet not found. Please run initialSetup() first.');
      }
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Create new row with timestamp and form data
    const newRow = headers.map(header => {
      if (header === 'Timestamp') {
        return new Date();
      }
      return e.parameter[header] || '';
    });

    console.log('Headers:', headers);
    console.log('New row data:', newRow);
    console.log('Adding to sheet:', sheet.getName(), 'at row:', nextRow);

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Auto-resize columns
    sheet.autoResizeColumns(1, newRow.length);

    console.log('Data successfully added to sheet');

    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success', 
        'row': nextRow,
        'sheet': sheet.getName(),
        'message': 'Form submitted successfully!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doPost(e) {
  // Keep doPost for backward compatibility
  return doGet(e);
}

// Test function to check if script is working
function testScript() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      'status': 'active',
      'message': 'Amido Forms API is running' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
