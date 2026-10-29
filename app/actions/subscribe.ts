'use server';

export interface SubscribeResult {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(formData: FormData): Promise<SubscribeResult> {
  const email = formData.get('email')?.toString().trim().toLowerCase();

  if (!email) {
    return {
      success: false,
      message: 'Email address is required.',
    };
  }

  // Proper email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please provide a valid email format (e.g., name@domain.com).',
    };
  }

  // Simulate secure database persistence latency
  await new Promise((resolve) => setTimeout(resolve, 350));

  return {
    success: true,
    message: 'Thank you for subscribing. You have been registered for private dispatches.',
  };
}
