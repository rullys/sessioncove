

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Session Cove",
  description:
    "Learn how Session Cove collects and uses information when you visit sessioncove.com or share your details.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#E5F1FC_0,_#FFFFFF_55%,_#FFFFFF_100%)] px-4 py-6 text-slate-900 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        {/* Header with logo */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Go to Session Cove homepage"
            className="inline-flex items-center"
          >
            <Image
              src="/Session_Cove_Logo.png"
              alt="Session Cove"
              width={200}
              height={48}
              className="w-40 h-auto -mt-15 -mb-15 sm:w-56 sm:-mt-20 sm:-mb-20"
              priority
            />
          </Link>
        </header>

        {/* Content card */}
        <section className="mt-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-8">
          <header className="mb-5 sm:mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Privacy
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Last updated: 29 November 2025
            </p>
          </header>

          <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            <p>
              This Privacy Policy explains how Session Cove (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) collects and uses information when you visit{" "}
              <span className="font-semibold">sessioncove.com</span> or share your details
              through our forms.
            </p>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                1. Information we collect
              </h2>
              <p>
                When you submit a form on our site, we may collect:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your WhatsApp number (if you choose to share it)</li>
                <li>Any optional message or note you include in the form</li>
              </ul>
              <p className="mt-2">
                We may also receive basic technical information automatically when you
                visit our site, such as your IP address, browser type, and device
                information. This is standard for most websites.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                2. How we use your information
              </h2>
              <p>We use the information you provide to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Respond to your questions or messages</li>
                <li>Contact you about trying Session Cove when it is ready for you</li>
                <li>Send product updates, feedback requests, and support replies</li>
                <li>
                  Understand, in a general way, who is interested in Session Cove (for
                  example, whether you are a trainer, tutor, or coach)
                </li>
              </ul>
              <p className="mt-2">
                We <span className="font-semibold">do not</span> sell your data or share
                your contact details with third parties for their own marketing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                3. Third-party tools
              </h2>
              <p>
                To collect form responses and send emails, we may use trusted
                third-party providers, such as:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Form and survey tools</li>
                <li>Email or newsletter services</li>
                <li>Basic analytics tools</li>
              </ul>
              <p className="mt-2">
                These providers process your data on our behalf so we can operate the
                website and communicate with you. Each provider has its own privacy
                policy, which describes how they handle data in more detail.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                4. How long we keep your data
              </h2>
              <p>
                We keep your contact details for as long as we reasonably need them to:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Communicate with you about Session Cove</li>
                <li>Provide updates, support, or invitations</li>
                <li>Understand overall interest in the product</li>
              </ul>
              <p className="mt-2">
                You can ask us to delete your information at any time (see Section 6).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                5. Cookies and basic analytics
              </h2>
              <p>
                We may use cookies or similar technologies to help the site work correctly
                and to understand overall usage (for example, how many people visit a
                page). We do not use this information to build personal advertising
                profiles.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                6. Your choices and rights
              </h2>
              <p>You can:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Ask us to delete your information from our records</li>
                <li>Ask what information we hold about you</li>
                <li>Ask us to stop contacting you about Session Cove</li>
              </ul>
              <p className="mt-2">
                To do this, please email us at{" "}
                <a
                  href="mailto:support@sessioncove.com"
                  className="font-semibold text-[#3189D7] hover:text-[#256CBD]"
                >
                  support@sessioncove.com
                </a>
                . If we use a different support email in the future, we will update it on
                this page.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">7. Children</h2>
              <p>
                Session Cove is designed for adult professionals (for example, trainers,
                tutors, and coaches). If you believe a child has submitted personal data
                to us, please contact us so we can delete it.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                8. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy as Session Cove grows. When we do, we
                will update the &quot;Last updated&quot; date at the top of this page.
                If there are important changes, we will explain them in clear language.
              </p>
            </section>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-600 hover:text-[#3189D7]"
          >
            <span className="mr-1">&larr;</span>
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}