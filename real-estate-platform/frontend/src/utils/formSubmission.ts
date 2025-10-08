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
  company: string; // Keep for compatibility but will be empty
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
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzALH3cNv2IihdK6KmbAuAnkvRAF-VJXtNjBJvXufH1Uep99rNuExl-FhIea6lqVidA/exec';

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
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  
  const isSuccessResult = result.result === 'success';
  const icon = isSuccessResult ? '✅' : '❌';
  const title = isSuccessResult ? 'הטופס נשלח בהצלחה!' : 'שגיאה בשליחת הטופס';
  const message = isSuccessResult ? 'תודה רבה! נחזור אליך בהקדם.' : (result.error || 'אירעה שגיאה לא צפויה. אנא נסה שוב.');
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
      <div class="text-6xl mb-4">${icon}</div>
      <h3 class="text-2xl font-bold mb-4 text-gray-800">${title}</h3>
      <p class="text-gray-600 mb-6">${message}</p>
      <button 
        onclick="this.closest('.fixed').remove()" 
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        סגור
      </button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto-remove after 5 seconds for success messages
  if (isSuccessResult) {
    setTimeout(() => {
      if (modal.parentNode) {
        modal.remove();
      }
    }, 5000);
  }
  
  return isSuccessResult;
}
