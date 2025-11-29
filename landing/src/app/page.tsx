// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

const faqs = [
  {
    question: "Do my clients need to download an app or create an account?",
    answer:
      "No. Clients open your Session Cove booking link in their browser, choose a session, pick a time, and enter their name and WhatsApp number. After booking, they can tap a button to continue the conversation with you in WhatsApp.",
  },
  {
    question: "How does Session Cove work with WhatsApp?",
    answer:
      "Session Cove does not send any messages on your behalf. Instead, it creates message drafts that open in WhatsApp with the details already filled in. You choose when to send confirmations, reminders, or cancellations, and you can edit the text before sending.",
  },
  {
    question: "How much will Session Cove cost?",
    answer:
      "During private beta, Session Cove is free for early access users. After launch, pricing will stay solo-friendly — closer to the price of one client session per month than a big studio system — with a free tier for light use and a single paid plan for heavier use. No contracts — cancel any time.",
  },
  {
    question: "When will Session Cove be available?",
    answer:
      "Session Cove is entering private beta with a small group of solo trainers, tutors, and coaches first. People on the early access list receive invitations in batches as soon as new spots open. Early access users can try Session Cove for free and help shape how it develops. When paid plans launch, they will receive a special founding member price.",
  },
  {
    question: "Will Session Cove work in my country?",
    answer:
      "Session Cove is built for people whose clients already use WhatsApp as a main way to communicate. Early access is open globally, with priority for trainers, tutors, and coaches who actively use WhatsApp with clients today.",
  },
  {
    question: "Is Session Cove another chat app?",
    answer:
      "No. Session Cove does not replace WhatsApp or ask clients to move to a new app. It adds structure on top of your existing chats: a booking page, clearer schedule, and ready-made message drafts for key moments.",
  },
];

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Ensure Tally embeds are loaded when this page is mounted (for client-side navigation)
    (window as any).Tally?.loadEmbeds?.();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E5F1FC] to-white text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-1 sm:py-2">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="Go to Session Cove homepage">
              <Image
                src="/Session_Cove_Logo.png"
                alt="Session Cove"
                width={256}
                height={64}
                className="w-40 h-auto -mt-5 -mb-5 sm:w-56 sm:-mt-10 sm:-mb-10"
                priority
              />
            </Link>
          </div>

          <nav className="flex items-center gap-3 text-xs font-medium text-slate-500 sm:gap-4 sm:text-sm">
            <a
              href="#how-it-works"
              className="hidden text-slate-600 hover:text-slate-900 sm:inline-block"
            >
              How it works
            </a>
            <span className="hidden text-slate-300 sm:inline-block">•</span>
            <a
              href="#benefits"
              className="hidden text-slate-600 hover:text-slate-900 sm:inline-block"
            >
              What you get
            </a>
            <span className="hidden text-slate-300 sm:inline-block">•</span>
            <a
              href="#faq"
              className="hidden text-slate-600 hover:text-slate-900 sm:inline-block"
            >
              FAQ
            </a>
            <span className="hidden text-slate-300 sm:inline-block">•</span>
            <a
              href="https://x.com/sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#33A2FF]"
            >
              X
            </a>
            <a
              href="https://instagram.com/sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#33A2FF]"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#33A2FF]"
            >
              TikTok
            </a>
          </nav>
        </header>

        {/* Main content wrapper */}
        <div className="flex flex-col gap-16 pb-16 sm:gap-24 sm:pb-24">
          {/* Hero */}
          <section className="flex justify-center">
            <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                WhatsApp-first · Private beta coming soon
              </div>

              <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                WhatsApp-first scheduling for solo sessions
              </p>

              {/* Headline + subheadline */}
              <div className="mt-4 space-y-4">
                <h1 className="text-[30px] font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
                  Turn WhatsApp chats into clean, reliable sessions
                </h1>
                <p className="text-[15px] leading-relaxed text-slate-600 sm:text-[17px]">
                  Session Cove helps solo <strong>trainers</strong>, <strong>tutors</strong>, and <strong>coaches</strong> move beyond messy
                  DMs and spreadsheets. Share one booking link, let clients book themselves,
                  and confirm or remind them in WhatsApp with one tap.
                </p>
              </div>


              {/* Waitlist form (Tally embed) */}
              <section id="waitlist" className="mt-6 space-y-3 sm:mt-7">

                <p className="text-xs text-slate-500 sm:text-sm">
                  Takes less than a minute.{" "}
                  <span className="font-semibold">No credit card required.</span>
                </p>

                <iframe
                  data-tally-src="https://tally.so/embed/WOJr0L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height={360} // fallback height; Tally will resize if script is loaded
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Session Cove early access"
                  className="rounded-2xl"
                ></iframe>

                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  Early access is free. Your details are used only for early access,
                  product updates, and support —{" "}
                  <span className="font-semibold">never for selling or sharing lists.</span>
                </p>
              </section>
            </div>
          </section>

          {/* Who it's for */}
          <section className="space-y-4">
            <div className="space-y-3">
              <p className="text-[12px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                Who Session Cove is for
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                Built for solo trainers, tutors, and coaches who live on WhatsApp
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-[17px]">
                Session Cove focuses on people who manage clients in chats, not in big
                studio software.
              </p>
            </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                    <span role="img" aria-label="Personal training">🏋️</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    Personal trainers &amp; coaches
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Share a single booking link instead of juggling screenshots,
                    notes, and missed messages.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                    <span role="img" aria-label="Tutoring">📚</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    Tutors &amp; teachers
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Keep lessons on schedule with WhatsApp confirmations and
                    reminders clients actually read.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                    <span role="img" aria-label="Instructor">🎵</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    Specialist instructors
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    From yoga to music lessons, keep sessions organized without
                    forcing clients into new apps.
                  </p>
                </div>
              </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="space-y-4">
            <div className="space-y-3">
              <p className="text-[12px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                A simple 3-step flow
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                How Session Cove fits into a normal day
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-[17px]">
                No new habits for clients. Everything stays inside WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F1FC] text-sm font-semibold text-[#1D5798]">
                  1
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Set your availability
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Pick the days, time windows, and session types that match your
                  real schedule.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F1FC] text-sm font-semibold text-[#1D5798]">
                  2
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Share your booking link
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Send one link on WhatsApp, Instagram, or in your bio. Clients
                  choose a slot in their own time.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F1FC] text-sm font-semibold text-[#1D5798]">
                  3
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Let WhatsApp handle the follow-ups
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Open ready-made WhatsApp drafts for confirmations and reminders, then send
                  them with one tap, so fewer clients forget or arrive late.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits / what you get */}
          {/* Benefits / what you get */}
          <section id="benefits" className="space-y-4">
            <div className="space-y-3">
              <p className="text-[12px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                What you&apos;ll be able to do
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                What you get in the first version of Session Cove
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-[17px]">
                Early access focuses on a simple flow: clients book themselves, you stay in
                control on WhatsApp, and your day stays clear.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                  <span role="img" aria-label="Calendar">🗓️</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Clients book themselves, in their own time
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Create simple session types and weekly availability. Clients pick a time
                  that works for them, in their local time, without long message chains.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                  <span role="img" aria-label="Link">🔗</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  A single booking link you can use everywhere
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Use the same link in WhatsApp, your Instagram bio, or your profile on other
                  platforms. When you update your schedule or session types, the link stays
                  up to date.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F1FC] text-base">
                  <span role="img" aria-label="Checklist">✅</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Confirm, remind, and cancel from one place
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  See a simple “Today / Upcoming” list, then tap to open ready-made WhatsApp
                  messages for confirmations, reminders, or cancellations — always in your
                  own tone and language.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-4">
            <div className="space-y-3">
              <p className="text-[12px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                FAQ
              </p>
              <h2 className="text-[30px] font-semibold tracking-tight text-slate-900 sm:text-[34px]">
                Frequently asked questions
              </h2>
              <p className="text-[14px] leading-relaxed text-slate-600">
                A few questions that{" "}
                <span className="font-semibold">trainers, tutors, and coaches</span> usually
                ask before trying Session Cove for the first time.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mt-2 sm:mt-4">
                {faqs.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.question}
                      className={
                        index === 0
                          ? "py-3 sm:py-4 lg:py-5"
                          : "border-t border-slate-200 py-3 sm:py-4 lg:py-5"
                      }
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[17px] sm:text-[18px] font-semibold text-slate-900">
                          {item.question}
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="mt-2 text-[14px] leading-relaxed text-slate-600">
                          <p className="leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Session Cove respects inboxes and phone numbers. Contact details are used
              only to manage early access, bookings, product communication, and support —{" "}
              <span className="font-semibold">
                never for selling or sharing contact lists.
              </span>
            </p>
          </section>

          {/* Final CTA */}
          <section className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                Ready to clean up your WhatsApp bookings?
              </h2>

              <div className="mt-6 flex justify-center">
                <a
                  href="#waitlist"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#3189D7] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-[#256CBD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33A2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E5F1FC] sm:w-auto sm:text-[16px]"
                >
                  Join the early access list
                </a>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-slate-500 sm:text-[15px]">
                It usually takes under a minute to join. No credit card required, and early
                access users help shape how Session Cove grows.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-4 flex flex-col items-center gap-3 border-t border-slate-200 py-4 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="space-y-1">
              <p>© Session Cove, 2025.</p>
              <p>Built in Indonesia, made for local and global solo professionals.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              <a href="/privacy" className="hover:text-slate-700">
                Privacy
              </a>
              <span className="hidden text-slate-300 sm:inline-block">•</span>
              <a href="/terms" className="hover:text-slate-700">
                Terms
              </a>
              <span className="hidden text-slate-300 sm:inline-block">•</span>
              <a
                href="https://x.com/sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#33A2FF]"
              >
                X
              </a>
              <a
                href="https://instagram.com/sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#33A2FF]"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#33A2FF]"
              >
                TikTok
              </a>
            </div>
          </footer>
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-5 right-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-600 shadow-md backdrop-blur hover:bg-white sm:bottom-6 sm:right-6"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}
