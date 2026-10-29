'use client';

import React, { useState, useTransition } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { submitContactForm } from '@/app/actions/submissions';
import { addContactMessage } from '@/lib/storage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botField: '', // Hidden honeypot field for spam protection
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client pre-validation
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('error');
      setFeedback('Please correct the highlighted fields below.');
      return;
    }

    setErrors({});

    startTransition(async () => {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('message', formData.message);
      payload.append('botField', formData.botField);

      const result = await submitContactForm(payload);

      if (result.success) {
        // Also persist locally in client admin store
        addContactMessage(formData.name, formData.email, formData.message);
        setStatus('success');
        setFeedback(result.message);
        setFormData({ name: '', email: '', message: '', botField: '' });
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
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] px-4 sm:px-6 md:px-12 py-10 md:py-20">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Official Correspondence
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#C0C0C0] leading-tight break-words">
            Contact
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777] max-w-lg mx-auto leading-relaxed">
            For literary inquiries, publication rights, speaking engagements, or formal correspondence with Anant Chaudhary.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-5 sm:p-8 md:p-12 space-y-8">
          {status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#161616] border border-[#B08D57] flex items-center justify-center mx-auto text-[#B08D57]">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-[#C0C0C0]">
                Message Delivered
              </h2>
              <p className="font-poppins text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
                {feedback}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 bg-[#050505] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Spam Protection: Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="botField">Do not fill this field</label>
                <input
                  id="botField"
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  autoComplete="off"
                  className="w-full h-12 px-4 text-base"
                />
              </div>

              {/* Field 1: Name (Required) */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  Name <span className="text-[#B5121B]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full h-12 px-4 bg-[#050505] border rounded-sm text-base text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors ${
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
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  Email Address <span className="text-[#B5121B]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full h-12 px-4 bg-[#050505] border rounded-sm text-base text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors ${
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

              {/* Field 3: Message (Required) */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-wider font-cinzel text-[#C0C0C0] font-semibold"
                >
                  Message <span className="text-[#B5121B]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="State the nature of your inquiry or correspondence..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-[#050505] border rounded-sm text-base text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:ring-1 transition-colors resize-y ${
                    errors.message
                      ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]'
                      : 'border-[#777777]/40 focus:border-[#B5121B] focus:ring-[#B5121B]'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-[#DC2626] flex items-center gap-1.5 pt-1">
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button labeled exactly: SEND MESSAGE */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-semibold tracking-widest font-cinzel uppercase rounded-sm transition-all duration-200 shadow-lg shadow-[#B5121B]/20 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isPending ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                  <Send size={14} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#777777] pt-2">
                <ShieldCheck size={14} className="text-[#B08D57]" />
                <span>Protected with server-side honeypot spam verification.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
