import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-purple-100 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-purple-100 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Send Message
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};