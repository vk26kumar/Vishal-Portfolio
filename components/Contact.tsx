import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { ContactInfo } from '../types';
import { GithubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from './icons/SocialIcons';

interface ContactProps {
  contactInfo: ContactInfo;
  accentColor: string;
}

const Contact: React.FC<ContactProps> = ({ contactInfo, accentColor }) => {
  const contactItems = [
    {
      icon: <LinkedInIcon className="h-6 w-6" />,
      label: "LinkedIn",
      value: contactInfo.linkedin.split('/').pop(),
      href: contactInfo.linkedin,
      target: "_blank"
    },
    {
      icon: <GithubIcon className="h-6 w-6" />,
      label: "GitHub",
      value: contactInfo.github.split('/').pop(),
      href: contactInfo.github,
      target: "_blank"
    },
    {
      icon: <EmailIcon className="h-6 w-6" />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and build something amazing!"
      accentColor={accentColor}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-lg text-slate-300 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I’m always open to discussing new opportunities, ideas, or creative collaborations. Reach out!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.target || "_self"}
              rel={item.target ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`
                bg-slate-800/70 border border-slate-700 rounded-xl p-5 shadow-md
                hover:shadow-xl hover:scale-[1.02] transition-all duration-300
                backdrop-blur-md relative overflow-hidden
                group
              `}
            >
              <div className={`absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-${accentColor}-500/20 to-${accentColor}-800/20`} />
              <div className="flex items-center relative z-10 space-x-4">
                <div className={`text-${accentColor}-400 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-md font-semibold text-slate-100 group-hover:text-slate-50">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
