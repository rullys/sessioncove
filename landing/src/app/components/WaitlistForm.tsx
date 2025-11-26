"use client";

export default function WaitlistForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-700">
          What do you do? <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="">Select...</option>
          <option value="trainer">Personal trainer / Fitness coach</option>
          <option value="tutor">Tutor / Teacher</option>
          <option value="yoga">Yoga / Pilates instructor</option>
          <option value="music">Music teacher</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-gray-700">
          WhatsApp number <span className="text-gray-400 text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="+1 234 567 8900"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Join the early access list
      </button>
      <p className="text-center text-xs text-gray-500">
        No spam. Early access invitations and product updates only.
      </p>
    </form>
  );
}

