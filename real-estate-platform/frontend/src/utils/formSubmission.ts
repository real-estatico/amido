// Form submission utility for Google Sheets integration
// This handles both contact and registration form submissions

interface FormSubmissionResult {
  result: 'success' | 'error';
  message?: string;
  error?: string;
  row?: number;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  investmentExperience: string;
  investmentTypes: string[];
  investmentTimeline: string;
  investmentAmount: string;
  investmentGoal: string;
  liquidityImportance: string;
  preferredRegions: string[];
  projectType: string;
  additionalInfo: string;
}

// Replace this URL with your deployed Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBvvmslpIpkqH-WcuS1NUNqiLEx4SCpmddn0lK0dco5wsRVLMWHBtpYMxWCotB2rbM/exec';

export async function submitContactForm(formData: ContactFormData): Promise<FormSubmissionResult> {
  try {
    // Create URL parameters for GET request (Google Apps Script works better with GET)
    const params = new URLSearchParams({
      'Form Type': 'Contact Form',
      'Name': formData.name,
      'Email': formData.email,
      'Phone': formData.phone,
      'Company': formData.company,
      'Message': formData.message
    });

    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors', // This bypasses CORS issues
    });

    // Since we're using no-cors, we can't read the response
    // But the data should still be sent to Google Sheets
    return {
      result: 'success',
      message: 'Form submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      result: 'error',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export async function submitRegistrationForm(formData: RegistrationFormData): Promise<FormSubmissionResult> {
  try {
    // Create URL parameters for GET request (Google Apps Script works better with GET)
    const params = new URLSearchParams({
      'Form Type': 'Registration Form',
      'Name': formData.name,
      'Email': formData.email,
      'Phone': formData.phone,
      'Company': formData.company,
      'Investment Experience': formData.investmentExperience,
      'Investment Types': formData.investmentTypes.join(', '),
      'Investment Timeline': formData.investmentTimeline,
      'Investment Amount': formData.investmentAmount,
      'Investment Goal': formData.investmentGoal,
      'Liquidity Importance': formData.liquidityImportance,
      'Preferred Regions': formData.preferredRegions.join(', '),
      'Project Type': formData.projectType,
      'Additional Info': formData.additionalInfo
    });

    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors', // This bypasses CORS issues
    });

    // Since we're using no-cors, we can't read the response
    // But the data should still be sent to Google Sheets
    return {
      result: 'success',
      message: 'Form submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting registration form:', error);
    return {
      result: 'error',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Helper function to show success/error messages
export function showFormMessage(result: FormSubmissionResult, isSuccess: boolean = false) {
  if (result.result === 'success') {
    alert('✅ ' + (result.message || 'Form submitted successfully!'));
    return true;
  } else {
    alert('❌ Error: ' + (result.error || 'Failed to submit form. Please try again.'));
    return false;
  }
}
