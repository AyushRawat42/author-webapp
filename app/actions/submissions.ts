'use server';

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
    question?: string;
  };
}

export interface StoredContactRecord {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'received' | 'read' | 'replied';
  notificationSentToAdmin: boolean;
}

export interface StoredQuestionRecord {
  id: string;
  name: string;
  email: string;
  question: string;
  createdAt: string;
  published: false; // STRICT RULE: Questions must NOT be published automatically
  status: 'pending_review' | 'under_consideration' | 'archived';
  notificationSentToAdmin: boolean;
  adminNotes?: string;
}

// In-memory simulation of server-side data persistence
const serverContactsStore: StoredContactRecord[] = [];
const serverQuestionsStore: StoredQuestionRecord[] = [];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action for Contact page submissions
 */
export async function submitContactForm(formData: FormData): Promise<FormSubmissionResult> {
  // Honeypot spam protection check
  const honeypot = formData.get('botField')?.toString().trim();
  if (honeypot) {
    // Silently ignore spam bots
    return {
      success: true,
      message: 'Your message has been processed.',
    };
  }

  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim().toLowerCase() || '';
  const message = formData.get('message')?.toString().trim() || '';

  const errors: { name?: string; email?: string; message?: string } = {};

  if (!name) {
    errors.name = 'Name is required.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please provide a valid email format (e.g., name@domain.com).';
  }

  if (!message) {
    errors.message = 'Message content is required.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted validation errors.',
      errors,
    };
  }

  // Simulated server persistence
  const newContact: StoredContactRecord = {
    id: `contact-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
    status: 'received',
    notificationSentToAdmin: true, // Simulated email dispatch to administrator desk
  };

  serverContactsStore.unshift(newContact);

  // Simulate network dispatch delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    success: true,
    message: 'Your correspondence has been securely transmitted to Anant Chaudhary’s desk. Thank you for reaching out.',
  };
}

/**
 * Server Action for Ask page question submissions
 * STRICT RULE: Submissions have published: false by default and are staged for admin review.
 */
export async function submitQuestionForm(formData: FormData): Promise<FormSubmissionResult> {
  // Honeypot spam protection check
  const honeypot = formData.get('botField')?.toString().trim();
  if (honeypot) {
    return {
      success: true,
      message: 'Your question has been received.',
    };
  }

  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim().toLowerCase() || '';
  const question = formData.get('question')?.toString().trim() || '';

  const errors: { name?: string; email?: string; question?: string } = {};

  if (!name) {
    errors.name = 'Name is mandatory.';
  }

  if (!email) {
    errors.email = 'Email address is mandatory.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!question) {
    errors.question = 'Question is mandatory.';
  } else if (question.length < 15) {
    errors.question = 'Please provide sufficient philosophical context for your question (min 15 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please complete all required fields.',
      errors,
    };
  }

  // Strictly stored as unpublished for private administrative review
  const newQuestion: StoredQuestionRecord = {
    id: `ask-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name,
    email,
    question,
    createdAt: new Date().toISOString(),
    published: false, // Never auto-published
    status: 'pending_review',
    notificationSentToAdmin: true, // Simulated admin alert
  };

  serverQuestionsStore.unshift(newQuestion);

  // Simulate secure queuing latency
  await new Promise((resolve) => setTimeout(resolve, 450));

  return {
    success: true,
    message: 'Your question has been securely submitted for private editorial review. Questions are never published automatically.',
  };
}
