// Google Apps Script for Amido Real Estate Platform
// This script handles form submissions and stores them in Google Sheets

const SHEET_NAME = 'Form Submissions';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
  
  // Create headers if they don't exist
  const sheet = activeSpreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    const newSheet = activeSpreadsheet.insertSheet(SHEET_NAME);
    setupHeaders(newSheet);
  } else {
    setupHeaders(sheet);
  }
}

function setupHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Form Type',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Message',
    // Registration form fields
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
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
}

function doGet(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error('Sheet not found. Please run initialSetup() first.');
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

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Auto-resize columns
    sheet.autoResizeColumns(1, newRow.length);

    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success', 
        'row': nextRow,
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
