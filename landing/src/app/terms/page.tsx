

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – Session Cove",
  description:
    "Read the terms that apply when you visit sessioncove.com or share your details with Session Cove.",
};

export default function TermsPage() {
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
              Terms
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Terms of Use
            </h1>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Last updated: 29 November 2025
            </p>
          </header>

          <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            <p>
              These Terms of Use ("Terms") apply when you visit{" "}
              <span className="font-semibold">sessioncove.com</span> or share your details
              with Session Cove ("we", "us", "our"). By using the site, you agree to
              these Terms.
            </p>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                1. What Session Cove is
              </h2>
              <p>
                Session Cove is a scheduling tool designed to help solo trainers, tutors,
                and coaches organise sessions more clearly around their WhatsApp
                conversations. At this stage, the website mainly provides information
                about the product and allows interested people to share their contact
                details.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                2. No guarantees
              </h2>
              <p>
                We may change, pause, or stop parts of the website or product
                development at any time. We do not guarantee that the site will always be
                available, free from errors, or that any particular feature will be
                released.
              </p>
              <p>
                We provide the site and any information on it on an "as is" and
                "as available" basis, without warranties of any kind, whether express or
                implied.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                3. Your responsibilities
              </h2>
              <p>When you use Session Cove, you agree to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Provide accurate information when you submit any forms</li>
                <li>Use the site only for lawful purposes</li>
                <li>
                  Not attempt to harm, disrupt, or gain unauthorised access to the
                  website, its infrastructure, or other users
                </li>
              </ul>
              <p className="mt-2">
                If we believe your use of the site is harmful or abusive, we may restrict
                or block your access.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                4. Email and WhatsApp communication
              </h2>
              <p>
                If you share your email address or WhatsApp number with us, you agree
                that we may contact you about Session Cove. This may include product
                updates, feedback requests, or support messages.
              </p>
              <p>
                You can ask us to stop contacting you at any time by using an
                unsubscribe option (if available) or by emailing us at{" "}
                <a
                  href="mailto:support@sessioncove.com"
                  className="font-semibold text-[#3189D7] hover:text-[#256CBD]"
                >
                  support@sessioncove.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                5. Intellectual property
              </h2>
              <p>
                All content on sessioncove.com, including the logo, branding, text,
                layouts, and design elements, is owned by us or used with permission.
                You may not copy, reproduce, or reuse this content for your own products
                without our written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                6. Limitation of liability
              </h2>
              <p>
                As far as allowed by law, Session Cove and its team will not be liable
                for any indirect, incidental, or consequential damages arising from:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Your use of the website</li>
                <li>Any reliance on information provided on the site</li>
                <li>Any changes, interruptions, or errors related to the site</li>
              </ul>
              <p className="mt-2">
                If, despite this, we are found to be liable, our total liability will be
                limited to the amount you paid us for using Session Cove during the
                period in question. At this stage, the website itself does not charge any
                fees.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                7. Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time as Session Cove develops.
                When we do, we will update the "Last updated" date at the top of this
                page. If there are important changes, we will explain them in clear
                language.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">8. Contact</h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
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