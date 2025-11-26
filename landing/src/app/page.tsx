import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-1 sm:py-2 -mt-10 sm:-mt-16">
          <div className="flex items-center gap-2">
            <Image
              src="/Session_Cove_Logo.png"
              alt="Session Cove"
              width={256}
              height={64}
              className="w-48 h-auto sm:w-64"
              priority
            />
          </div>

          <nav className="flex items-center gap-4 text-xs font-medium text-slate-300 sm:text-sm">
            <a
              href="https://x.com/sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              X
            </a>
            <a
              href="https://instagram.com/sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@sessioncove"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              TikTok
            </a>
          </nav>
        </header>

        {/* Main content wrapper */}
        <div className="-mt-10 flex flex-col gap-8 pb-8 sm:-mt-16 sm:gap-10 sm:pb-12">
          {/* Hero */}
          <section className="flex justify-center">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/60 backdrop-blur-xl sm:p-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/50 px-3 py-1 text-[11px] font-medium text-cyan-200 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                WhatsApp-first · Private beta coming soon
              </div>

              {/* Headline + subheadline */}
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Turn WhatsApp chats into clean, reliable sessions
                </h1>
                <p className="text-sm leading-relaxed text-slate-200/80 sm:text-base">
                  Session Cove helps solo trainers and tutors move beyond messy
                  DMs and spreadsheets. Share one booking link, send automatic
                  WhatsApp confirmations, and cut down on no-shows.
                </p>
              </div>

              {/* Waitlist form (Tally embed) */}
              <div className="mt-6 space-y-3">
                <iframe
                  data-tally-src="https://tally.so/embed/WOJr0L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height={340} // fallback height; Tally will resize if script is loaded
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Session Cove early access"
                  className="rounded-2xl"
                ></iframe>

                <p className="text-[11px] leading-relaxed text-slate-300/80">
                  Early access is free. No credit card required. Your details
                  are used only for early access, product updates, and support —
                  never for selling or sharing lists.
                </p>
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                Built for solo trainers and tutors who live on WhatsApp
              </h2>
              <p className="text-sm text-slate-300/90">
                Session Cove focuses on people who manage clients in chats, not
                in big studio software.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50">
                  Personal trainers &amp; coaches
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  Share a single booking link instead of juggling screenshots,
                  notes, and missed messages.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50">
                  Tutors &amp; teachers
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  Keep lessons on schedule with WhatsApp confirmations and
                  reminders clients actually read.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50">
                  Specialist instructors
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  From yoga to music lessons, keep sessions organized without
                  forcing clients into new apps.
                </p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                How Session Cove fits into a normal day
              </h2>
              <p className="text-sm text-slate-300/90">
                No new habits for clients. Everything stays inside WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                  1
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-50">
                  Set your availability
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  Pick the days, time windows, and session types that match your
                  real schedule.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                  2
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-50">
                  Share your booking link
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  Send one link on WhatsApp, Instagram, or in your bio. Clients
                  choose a slot in their own time.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                  3
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-50">
                  Let WhatsApp handle the follow-ups
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                  Session Cove sends confirmations and reminders automatically,
                  so fewer clients forget or arrive late.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                Questions, answered quickly
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  When will Session Cove be available?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  Session Cove is entering private beta with a small group of
                  solo trainers and tutors first. People on the early access
                  list receive invitations in batches as soon as new spots open.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  How much will Session Cove cost?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  During private beta, Session Cove is free for early access
                  users. After launch, pricing will stay solo-friendly – closer
                  to the price of one client session per month than a big studio
                  system – with a free tier for light use and a single paid
                  plan for heavier use. No contracts, cancel any time.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  What do early access users get?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  Early access users can try Session Cove for free during the
                  private beta and help shape how it develops. Feedback from
                  this group directly influences what gets built next. When
                  paid plans launch, early access users will be offered a
                  special founding member price for the Pro plan as a thank-you
                  for helping improve Session Cove.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  Will Session Cove work in my country?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  Session Cove is built with WhatsApp usage in mind, starting
                  with regions where WhatsApp is already the main channel for
                  clients. Early access is open globally, with priority for
                  trainers and tutors who actively use WhatsApp with clients
                  today.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  Is Session Cove another chat app?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  No. Session Cove does not replace WhatsApp. It adds structure
                  on top of existing chats: booking flows, reminders, and a
                  simple view of upcoming sessions.
                </p>
              </div>

              <p className="text-[11px] text-slate-400/90">
                Session Cove respects inboxes and phone numbers. Contact details
                are used only to manage early access, product communication, and
                support – never for selling or sharing contact lists.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-4 flex flex-col items-start justify-between gap-2 border-t border-white/5 py-4 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:text-xs">
            <span>© Session Cove, 2025</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://x.com/sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                X
              </a>
              <a
                href="https://instagram.com/sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@sessioncove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                TikTok
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
