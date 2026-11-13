"use client";

import React from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Footer() {
  const { company, contact, navigation, productCategories, logoSpectrum } =
    SITE_CONFIG;

  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
    : "#contact";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Footer and Contact Information"
      className="bg-[#11100F] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative"
    >
      {/* Top Pigment Spectrum Line */}
      <div className="absolute top-0 left-0 right-0 h-1 flex" aria-hidden="true">
        {logoSpectrum.map((c) => (
          <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
        ))}
      </div>

      <div className="site-container">
        {/* Top Contact & Consultation Banner */}
        <div className="p-7 sm:p-10 rounded-2xl bg-[#1A1817] border border-white/10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F08A1C]">
              Connect With Bhatti Paints
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mt-1 mb-2">
              Planning a residential or commercial painting project?
            </h3>
            <p className="text-sm sm:text-base text-white/70 max-w-xl 3xl:max-w-2xl">
              Reach out to ask about available product categories, physical shade cards,
              or dealer enquiries in {company.location}.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3.5">
            <a
              href={whatsappUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-[#082411] font-semibold text-sm hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {contact.whatsapp
                  ? "Chat on WhatsApp"
                  : "WhatsApp CTA (Configure in siteConfig)"}
              </span>
            </a>
            <a
              href={contact.phone ? `tel:${contact.phone}` : "#contact"}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white hover:text-[#161514] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>
                {contact.phone ? contact.phone : "Phone CTA (Editable Placeholder)"}
              </span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Official Logo & Introduction (4 cols) */}
          <div className="lg:col-span-4">
            <div className="inline-block bg-white px-3.5 py-2.5 rounded-sm mb-6">
              <img
                src="/bhatti-logo.jpg"
                alt="Bhatti Paints (Pvt.) Ltd. Official Logo"
                className="h-12 w-auto object-contain block"
              />
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm 3xl:max-w-md mb-6">
              <strong className="text-white">{company.name}</strong> — Bringing quality,
              colour, and character to homes and commercial spaces from{" "}
              {company.location}, since {company.established}.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F08A1C]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{company.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-[#F08A1C] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Product Categories
            </h4>
            <ul className="space-y-3 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-[#F08A1C] transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.accentHex }}
                    />
                    <span>{cat.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Contact &amp; Social
            </h4>
            <ul className="space-y-3.5 text-sm text-white/80 mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F08A1C] shrink-0 mt-0.5" />
                <span>
                  {contact.address ? (
                    <>
                      {contact.address}, {contact.city}
                    </>
                  ) : (
                    <>
                      <span className="text-white">{contact.city}</span>
                      <span className="block text-xs text-white/45 mt-0.5">
                        Street address placeholder (Edit in siteConfig.ts)
                      </span>
                    </>
                  )}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#3CB8B0] shrink-0 mt-0.5" />
                {contact.phone ? (
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                ) : (
                  <span className="text-xs text-white/50">
                    Phone: Editable placeholder in <code className="font-mono">siteConfig.ts</code>
                  </span>
                )}
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B5267F] shrink-0 mt-0.5" />
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                ) : (
                  <span className="text-xs text-white/50">
                    Email: Editable placeholder in <code className="font-mono">siteConfig.ts</code>
                  </span>
                )}
              </li>
            </ul>

            {/* Social Media Placeholders */}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
                Social Channels (Editable Placeholders)
              </span>
              <div className="flex flex-wrap gap-2">
                {(["facebook", "instagram", "linkedin", "youtube"] as const).map(
                  (platform) => {
                    const url = contact.social[platform];
                    const label =
                      platform.charAt(0).toUpperCase() + platform.slice(1);
                    return url ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-xs text-white hover:bg-[#F08A1C] hover:text-[#161514] transition-colors"
                      >
                        <span>{label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span
                        key={platform}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/45"
                        title={`Add official ${label} URL in src/config/siteConfig.ts`}
                      >
                        {label}
                      </span>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer Row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/50">
          <p suppressHydrationWarning>
            &copy; {currentYear} {company.name} All rights reserved. Established{" "}
            {company.established} in {company.city}.
          </p>
          <p>
            Digital colour swatches are illustrative inspiration; verify physical shade
            cards before purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}

