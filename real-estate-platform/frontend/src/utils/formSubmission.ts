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
    const formDataToSend = new FormData();
    formDataToSend.append('Form Type', 'Contact Form');
    formDataToSend.append('Name', formData.name);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Phone', formData.phone);
    formDataToSend.append('Company', formData.company);
    formDataToSend.append('Message', formData.message);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await response.json();
    return result;
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
    const formDataToSend = new FormData();
    formDataToSend.append('Form Type', 'Registration Form');
    formDataToSend.append('Name', formData.name);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Phone', formData.phone);
    formDataToSend.append('Company', formData.company);
    formDataToSend.append('Investment Experience', formData.investmentExperience);
    formDataToSend.append('Investment Types', formData.investmentTypes.join(', '));
    formDataToSend.append('Investment Timeline', formData.investmentTimeline);
    formDataToSend.append('Investment Amount', formData.investmentAmount);
    formDataToSend.append('Investment Goal', formData.investmentGoal);
    formDataToSend.append('Liquidity Importance', formData.liquidityImportance);
    formDataToSend.append('Preferred Regions', formData.preferredRegions.join(', '));
    formDataToSend.append('Project Type', formData.projectType);
    formDataToSend.append('Additional Info', formData.additionalInfo);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await response.json();
    return result;
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
