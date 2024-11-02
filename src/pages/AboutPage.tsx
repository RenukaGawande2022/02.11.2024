import React from 'react';
import { Navbar } from '../components/Navbar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Info, Mail } from 'lucide-react';

interface AboutPageProps {
  type: 'about' | 'contact';
}

export function AboutPage({ type }: AboutPageProps) {
  const getContent = () => {
    switch (type) {
      case 'about':
        return {
          title: 'About Us',
          icon: Info,
          content: `Tamilyogi Movie is your premier destination for discovering and exploring the world of cinema. Our platform provides comprehensive movie information, reviews, and recommendations to help you find your next favorite film. We are passionate about movies and committed to creating the best possible experience for movie enthusiasts.`
        };
      case 'contact':
        return {
          title: 'Contact Us',
          icon: Mail,
          content: `Have questions or feedback? We'd love to hear from you! Our team is dedicated to providing excellent service and support to our users. While we strive to respond to all inquiries, please allow up to 48 hours for a response during business days.`
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'About', path: '/' },
            { label: content.title }
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <content.icon className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{content.content}</p>
            {type === 'contact' && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}