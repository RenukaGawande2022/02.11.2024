import React from 'react';
import { Navbar } from '../components/Navbar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Shield, Scale, Copyright } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'dmca';
}

export function LegalPage({ type }: LegalPageProps) {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: Shield,
          content: `Our Privacy Policy outlines how we collect, use, and protect your personal information. We are committed to maintaining the trust and confidence of our visitors to our website. We are not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes. In this Privacy Policy, we've provided detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.`
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: Scale,
          content: `By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.`
        };
      case 'dmca':
        return {
          title: 'DMCA Notice & Takedown Policy',
          icon: Copyright,
          content: `We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, we will respond expeditiously to claims of copyright infringement committed using our service that are reported.`
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
            { label: 'Legal', path: '/' },
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
          </div>
        </div>
      </main>
    </div>
  );
}