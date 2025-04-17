// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, X, BookOpen, Puzzle, Users, Brain, DollarSign, FileText, ShieldCheck, TrendingUp } from "lucide-react";

const navItems = {
  Product: [
    {
      category: "Research Features",
      items: [
        { label: "Research Showcase", href: "/showcase", icon: BookOpen },
        { label: "R&D Challenge Hub", href: "/challenges", icon: Puzzle },
        { label: "Matchmaking", href: "/match", icon: Users },
        { label: "IP Marketplace", href: "/ip", icon: Brain },
        { label: "Funding Model", href: "/funding", icon: DollarSign },
      ],
    },
    {
      category: "Assist Services",
      items: [
        { label: "Documentation", href: "/assist/docs", icon: FileText },
        { label: "Legal & Compliance", href: "/assist/legal", icon: ShieldCheck },
        { label: "GTM Strategy", href: "/assist/gtm", icon: TrendingUp },
      ],
    },
  ],
  Solutions: [
    { label: "Researchers", href: "/onboard?type=researcher" },
    { label: "Enterprises", href: "/onboard?type=enterprise" },
    { label: "Investors", href: "/onboard?type=investor" },
  ],
  Resources: [
    { label: "Getting Started", href: "/resources/start" },
    { label: "Case Studies", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/community" },
    { label: "Tools", href: "/resources/tools" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Founders", href: "/founders" },
    { label: "Media", href: "/media" },
  ],
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white text-black sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-black hover:text-orange-500 transition cursor-pointer">
            Lab2Launch
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {Object.entries(navItems).map(([category, content]) => (
            <div key={category} className="relative group">
              <button
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition"
                onMouseEnter={() => setOpenMenu(category)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {category} ▼
              </button>
              {openMenu === category && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white border border-gray-200 shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-6 w-[600px] z-50 divide-x divide-gray-200"
                  onMouseEnter={() => setOpenMenu(category)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {Array.isArray((content as any)[0]?.items)
                    ? (content as any).map((group: any, i: number) => (
                        <div key={group.category} className={`px-4 ${i === 0 ? '' : 'border-l border-gray-100'}`}>
                          <h4 className="font-semibold text-gray-600 text-xs uppercase mb-2">{group.category}</h4>
                          {group.items.map(({ label, href, icon: Icon }: any) => (
                            <Link
                              key={href}
                              href={href}
                              className="flex items-center gap-2 py-1 text-sm text-gray-700 hover:text-orange-500"
                            >
                              {Icon && <Icon size={16} className="text-orange-500" />} {label}
                            </Link>
                          ))}
                        </div>
                      ))
                    : content.map(({ label, href }: any) => (
                        <Link
                          key={href}
                          href={href}
                          className="block text-sm text-gray-700 hover:text-orange-500"
                        >
                          {label}
                        </Link>
                      ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/enterprise">
            <span className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition">
              Enterprise
            </span>
          </Link>

          <Link href="/pricing">
            <span className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition">
              Pricing
            </span>
          </Link>
        </div>

        <Link href="/showcase">
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold hidden md:inline-block">
            Get Started →
          </button>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none text-black"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
