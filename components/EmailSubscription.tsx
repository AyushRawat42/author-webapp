'use client';

import React, { useState, useTransition } from 'react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';
import { addSubscriber } from '@/lib/storage';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side pre-validation
    const trimmed = email.trim();
    if (!trimmed) {
      setStatus('error');
      setMessage('Email address is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.append('email', trimmed);

      // Execute Server Action
      const serverResult = await subscribeToNewsletter(formData);

      if (serverResult.success) {
        // Also persist locally in client mock store
        addSubscriber(trimmed);
        setStatus('success');
        setMessage(serverResult.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(serverResult.message);
      }
    });
  };

  return (
    <section
      aria-label="Email Subscription"
      className="w-full bg-[#111111] border-y border-[#777777]/25 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle antique gold top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent" />

      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Short Heading in Cinzel */}
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-[#C0C0C0]">
          Occasional Philosophical Dispatches
        </h2>

        {/* Brief Supporting Text in Poppins */}
        <p className="font-poppins text-sm sm:text-base text-[#777777] max-w-xl mx-auto leading-relaxed">
          Receive private essays, early notifications on upcoming book releases, and invitations to literary lectures directly from Anant Chaudhary.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3"
          noValidate
        >
          <div className="flex-1 relative">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email address"
              required
              aria-label="Email address for subscription"
              className="w-full px-4 py-3 bg-[#050505] border border-[#777777]/40 rounded-sm text-sm text-[#C0C0C0] placeholder-[#777777] focus:outline-none focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-3 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-semibold tracking-widest font-cinzel uppercase rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
          >
            <span>{isPending ? 'Subscribing...' : 'Subscribe'}</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Confirmation State */}
        {status === 'success' && (
          <div className="flex items-center justify-center gap-2 text-sm text-[#B08D57] font-poppins pt-2">
            <CheckCircle2 size={16} className="text-[#B08D57] shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Error Feedback */}
        {status === 'error' && (
          <div className="flex items-center justify-center gap-2 text-sm text-[#DC2626] font-poppins pt-2">
            <AlertCircle size={16} className="text-[#DC2626] shrink-0" />
            <span>{message}</span>
          </div>
        )}

        <p className="text-[11px] text-[#777777]/70 font-poppins">
          Zero marketing spam. You may withdraw correspondence at any time.
        </p>
      </div>
    </section>
  );
}
