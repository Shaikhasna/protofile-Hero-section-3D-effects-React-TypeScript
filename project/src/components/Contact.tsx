import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-violet-950 to-indigo-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              <p className="text-lg text-purple-100/90">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  text: "hello@example.com",
                  href: "mailto:hello@example.com"
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  text: "Schedule a call",
                  href: "#"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-100 transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;