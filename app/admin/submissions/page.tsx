'use client';

import React, { useState, useEffect } from 'react';
import {
  getStoredContacts,
  getStoredAskQuestions,
  getStoredSubscribers,
  updateAskStatus,
} from '@/lib/storage';
import { ContactSubmission, AskSubmission, Subscriber } from '@/lib/data';
import { Mail, HelpCircle, Users, CheckCircle, Clock, Archive, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SubmissionsManagementPage() {
  const [activeTab, setActiveTab] = useState<'ask' | 'contact' | 'subscribers'>('ask');
  const [contacts, setContacts] = useState<ContactSubmission[]>(() => getStoredContacts());
  const [asks, setAsks] = useState<AskSubmission[]>(() => getStoredAskQuestions());
  const [subscribers, setSubscribers] = useState<Subscriber[]>(() => getStoredSubscribers());

  const handleStatusChange = (id: string, status: 'pending_review' | 'answered' | 'archived') => {
    const updated = updateAskStatus(id, status);
    setAsks(updated);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Official Site</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#777777]/25">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
              <Shield size={14} className="text-[#B5121B]" />
              <span>Administrative Review Portal</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#C0C0C0] mt-1">
              Submissions Management
            </h1>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center gap-2 bg-[#111111] p-1 border border-[#777777]/30 rounded-sm">
            <button
              onClick={() => setActiveTab('ask')}
              className={`px-4 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeTab === 'ask'
                  ? 'bg-[#B5121B] text-white font-semibold'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Ask Inquiries ({asks.length})
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-[#B5121B] text-white font-semibold'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Contact Messages ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('subscribers')}
              className={`px-4 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeTab === 'subscribers'
                  ? 'bg-[#B5121B] text-white font-semibold'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Subscribers ({subscribers.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Ask Inquiries (Requires Admin Review - Not automatically published) */}
        {activeTab === 'ask' && (
          <div className="space-y-6">
            <div className="bg-[#111111] p-4 border border-[#777777]/30 text-xs text-[#777777]">
              All questions submitted via <code>/ask</code> are staged here in <strong>Pending Review</strong> status. Per editorial requirements, no question is published automatically.
            </div>

            {asks.length === 0 ? (
              <p className="text-sm text-[#777777] py-8 text-center">No submitted questions at this time.</p>
            ) : (
              <div className="space-y-4">
                {asks.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-cinzel text-sm font-bold text-[#C0C0C0] mr-2">
                          {item.name}
                        </span>
                        <span className="text-[#777777]">&lt;{item.email}&gt;</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <time className="text-[#777777]">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </time>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-cinzel uppercase tracking-wider rounded-xs ${
                            item.status === 'pending_review'
                              ? 'bg-[#B5121B]/30 text-[#DC2626] border border-[#B5121B]/40'
                              : item.status === 'answered'
                              ? 'bg-[#B08D57]/30 text-[#B08D57] border border-[#B08D57]/40'
                              : 'bg-white/10 text-[#777777]'
                          }`}
                        >
                          {item.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#050505] p-4 rounded-sm border border-[#777777]/20 text-sm font-poppins text-[#C0C0C0]/90 leading-relaxed italic">
                      “{item.question}”
                    </div>

                    {/* Review Actions */}
                    <div className="flex items-center justify-end gap-3 pt-2 text-xs">
                      <button
                        onClick={() => handleStatusChange(item.id, 'pending_review')}
                        className={`px-3 py-1.5 rounded-sm border ${
                          item.status === 'pending_review'
                            ? 'border-[#B5121B] text-[#DC2626]'
                            : 'border-[#777777]/30 text-[#777777] hover:text-white'
                        }`}
                      >
                        Pending Review
                      </button>
                      <button
                        onClick={() => handleStatusChange(item.id, 'answered')}
                        className={`px-3 py-1.5 rounded-sm border ${
                          item.status === 'answered'
                            ? 'border-[#B08D57] text-[#B08D57]'
                            : 'border-[#777777]/30 text-[#777777] hover:text-white'
                        }`}
                      >
                        Mark Answered
                      </button>
                      <button
                        onClick={() => handleStatusChange(item.id, 'archived')}
                        className={`px-3 py-1.5 rounded-sm border ${
                          item.status === 'archived'
                            ? 'border-white text-white'
                            : 'border-[#777777]/30 text-[#777777] hover:text-white'
                        }`}
                      >
                        Archive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Contact Messages */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="bg-[#111111] p-4 border border-[#777777]/30 text-xs text-[#777777]">
              General and formal messages submitted via the dedicated <code>/contact</code> page.
            </div>

            {contacts.length === 0 ? (
              <p className="text-sm text-[#777777] py-8 text-center">No contact messages received.</p>
            ) : (
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-cinzel text-sm font-bold text-[#C0C0C0] mr-2">
                          {c.name}
                        </span>
                        <span className="text-[#777777]">&lt;{c.email}&gt;</span>
                      </div>
                      <time className="text-[#777777]">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </time>
                    </div>
                    <p className="bg-[#050505] p-4 rounded-sm border border-[#777777]/20 text-sm font-poppins text-[#C0C0C0]/90 leading-relaxed">
                      {c.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Newsletter Subscribers */}
        {activeTab === 'subscribers' && (
          <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#777777]/20 text-xs text-[#777777]">
              <span>Subscriber Email</span>
              <span>Subscribed On</span>
            </div>
            {subscribers.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between text-xs font-mono py-2 border-b border-[#777777]/10"
              >
                <span className="text-[#C0C0C0]">{s.email}</span>
                <span className="text-[#777777]">
                  {new Date(s.subscribedAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
