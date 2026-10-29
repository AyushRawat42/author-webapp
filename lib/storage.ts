'use client';

import {
  Subscriber,
  ContactSubmission,
  AskSubmission,
  INITIAL_SUBSCRIBERS,
  INITIAL_CONTACT_MESSAGES,
  INITIAL_ASK_QUESTIONS,
} from './data';

const SUB_KEY = 'anant_chaudhary_subscribers';
const CONTACT_KEY = 'anant_chaudhary_contacts';
const ASK_KEY = 'anant_chaudhary_asks';

export function getStoredSubscribers(): Subscriber[] {
  if (typeof window === 'undefined') return INITIAL_SUBSCRIBERS;
  try {
    const raw = localStorage.getItem(SUB_KEY);
    return raw ? JSON.parse(raw) : INITIAL_SUBSCRIBERS;
  } catch {
    return INITIAL_SUBSCRIBERS;
  }
}

export function addSubscriber(email: string): { success: boolean; message: string } {
  if (!email || !email.includes('@') || !email.includes('.')) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  const current = getStoredSubscribers();
  const normalized = email.trim().toLowerCase();
  if (current.some((s) => s.email.toLowerCase() === normalized)) {
    return { success: true, message: 'You are already registered to receive upcoming dispatches.' };
  }
  const newSub: Subscriber = {
    id: `sub-${Date.now()}`,
    email: normalized,
    subscribedAt: new Date().toISOString(),
  };
  const updated = [newSub, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(SUB_KEY, JSON.stringify(updated));
  }
  return { success: true, message: 'Thank you for subscribing. You will receive private dispatches and publication notices.' };
}

export function getStoredContacts(): ContactSubmission[] {
  if (typeof window === 'undefined') return INITIAL_CONTACT_MESSAGES;
  try {
    const raw = localStorage.getItem(CONTACT_KEY);
    return raw ? JSON.parse(raw) : INITIAL_CONTACT_MESSAGES;
  } catch {
    return INITIAL_CONTACT_MESSAGES;
  }
}

export function addContactMessage(name: string, email: string, message: string): { success: boolean; message: string } {
  if (!name.trim()) return { success: false, message: 'Name is required.' };
  if (!email.trim() || !email.includes('@')) return { success: false, message: 'A valid email address is required.' };
  if (!message.trim()) return { success: false, message: 'Message content is required.' };

  const newContact: ContactSubmission = {
    id: `msg-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  const current = getStoredContacts();
  const updated = [newContact, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(updated));
  }
  return {
    success: true,
    message: 'Your message has been securely delivered to Anant Chaudhary’s correspondence desk. Thank you for your inquiry.',
  };
}

export function getStoredAskQuestions(): AskSubmission[] {
  if (typeof window === 'undefined') return INITIAL_ASK_QUESTIONS;
  try {
    const raw = localStorage.getItem(ASK_KEY);
    return raw ? JSON.parse(raw) : INITIAL_ASK_QUESTIONS;
  } catch {
    return INITIAL_ASK_QUESTIONS;
  }
}

export function addAskQuestion(name: string, email: string, question: string): { success: boolean; message: string } {
  if (!name.trim()) return { success: false, message: 'Name is required.' };
  if (!email.trim() || !email.includes('@')) return { success: false, message: 'A valid email address is required.' };
  if (!question.trim()) return { success: false, message: 'Question text is required.' };

  const newAsk: AskSubmission = {
    id: `ask-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    question: question.trim(),
    createdAt: new Date().toISOString(),
    status: 'pending_review',
  };
  const current = getStoredAskQuestions();
  const updated = [newAsk, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(ASK_KEY, JSON.stringify(updated));
  }
  return {
    success: true,
    message: 'Your question has been received for editorial consideration. Submissions undergo careful personal review before selection for future commentary.',
  };
}

export function updateAskStatus(id: string, status: 'pending_review' | 'answered' | 'archived', adminNotes?: string) {
  const current = getStoredAskQuestions();
  const updated = current.map((q) => (q.id === id ? { ...q, status, adminNotes: adminNotes ?? q.adminNotes } : q));
  if (typeof window !== 'undefined') {
    localStorage.setItem(ASK_KEY, JSON.stringify(updated));
  }
  return updated;
}
