'use client';

import React, { useState, useTransition } from 'react';
import { HelpCircle, CheckCircle2, AlertCircle, Lock, Shield } from 'lucide-react';
import { submitQuestionForm } from '@/app/actions/submissions';
import { addAskQuestion } from '@/lib/storage';

export default function AskPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    botField: '', // Hidden honeypot field
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; question?: string }>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client pre-validation
    const newErrors: { name?: string; email?: string; question?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is mandatory.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is mandatory.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.question.trim()) {
      newErrors.question = 'Question is mandatory.';
    } else if (formData.question.trim().length < 15) {
      newErrors.question = 'Please provide at least 15 characters for thoughtful philosophical review.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('error');
      setFeedback('Please resolve the highlighted fields below.');
      return;
    }

    setErrors({});

    startTransition(async () => {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('question', formData.question);
      payload.append('botField', formData.botField);

      const result = await submitQuestionForm(payload);

      if (result.success) {
        // Also persist locally in client admin store
        addAskQuestion(formData.name, formData.email, formData.question);
        setStatus('success');
        setFeedback(result.message);
        setFormData({ name: '', email: '', question: '', botField: '' });
      } else {
        setStatus('error');
        setFeedback(result.message);
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Philosophical Dialogues & Inquiries
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide text-[#C0C0C0]">
            Ask a Question
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777] max-w-xl mx-auto leading-relaxed">
            Submit your intellectual questions regarding Anant Chaudhary’s published books, philosophical reflections, or personal conduct.
          </p>
        </div>

        {/* Notice of Non-Automatic Publishing & Strict Privacy */}
        <div className="bg-[#111111] border border-[#777777]/25 rounded-sm p-4 flex items-center gap-3 text-xs text-[#777777]">
          <Lock size={16} className="text-[#B08D57] shrink-0" />
          <span>
            <strong>Editorial Discretion Notice:</strong> Questions submitted here are confidential and undergo private review. Questions are never published automatically to preserve intellectual gravity.
          </span>
        </div>

        {/* Form Container */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-8">
          {status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#161616] border border-[#B08D57] flex items-center justify-center mx-auto text-[#B08D57]">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-[#C0C0C0]">
                Question Submitted
              </h2>
              <p className="font-poppins text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
                {feedback}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-[#050505] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Submit Another Question
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Spam Protection Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="ask-botField">Do not fill this field</label>
                <input
                  id="ask-botField"
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  autoComplete="off"
                />
              </div>

              {/* Field 1: Name (Required) */}
              <div className="space-y-2">
                <label
                  htmlFor="ask-name"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  1. Name <span className="text-[#B5121B]">*</span>
                </label>
                <input
                  id="ask-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-[#050505] border rounded-sm text-sm text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors ${
                    errors.name
                      ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]'
                      : 'border-[#777777]/40 focus:border-[#B5121B] focus:ring-[#B5121B]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-[#DC2626] flex items-center gap-1.5 pt-1">
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Email Address (Required) */}
              <div className="space-y-2">
                <label
                  htmlFor="ask-email"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  2. Email Address <span className="text-[#B5121B]">*</span>
                </label>
                <input
                  id="ask-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-[#050505] border rounded-sm text-sm text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors ${
                    errors.email
                      ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]'
                      : 'border-[#777777]/40 focus:border-[#B5121B] focus:ring-[#B5121B]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-[#DC2626] flex items-center gap-1.5 pt-1">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Question (Required) */}
              <div className="space-y-2">
                <label
                  htmlFor="ask-question"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  3. Question <span className="text-[#B5121B]">*</span>
                </label>
                <textarea
                  id="ask-question"
                  name="question"
                  rows={5}
                  required
                  placeholder="Articulate your question, reference specific chapters or concepts, or state your inquiry..."
                  value={formData.question}
                  onChange={(e) => {
                    setFormData({ ...formData, question: e.target.value });
                    if (errors.question) setErrors({ ...errors, question: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-[#050505] border rounded-sm text-sm text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors resize-y ${
                    errors.question
                      ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]'
                      : 'border-[#777777]/40 focus:border-[#B5121B] focus:ring-[#B5121B]'
                  }`}
                />
                {errors.question && (
                  <p className="text-xs text-[#DC2626] flex items-center gap-1.5 pt-1">
                    <AlertCircle size={12} />
                    <span>{errors.question}</span>
                  </p>
                )}
              </div>

              {/* Submit Button labeled exactly: SUBMIT QUESTION */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-semibold tracking-widest font-cinzel uppercase rounded-sm transition-all duration-200 shadow-lg shadow-[#B5121B]/20 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isPending ? 'SUBMITTING QUESTION...' : 'SUBMIT QUESTION'}</span>
                  <HelpCircle size={15} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#777777] pt-2">
                <Shield size={14} className="text-[#B08D57]" />
                <span>Submissions are stored privately for administrator review and are never auto-published.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
