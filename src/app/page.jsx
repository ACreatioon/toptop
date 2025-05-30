'use client';

import { TeamLogo } from '@/components/team-logo';
import { Button } from '@/components/ui/button';
import { GameCard } from '@/components/ui/game-card';
import { PopularCard } from '@/components/ui/populer-card';
import { motion } from 'framer-motion';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Gem,
  Lightbulb,
  Wifi,
  HandCoins,
  Shield,
  Clock,
  Users,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('topup');

  const tabs = [
    { key: 'topup', label: 'Top Up Games' },
    { key: 'token', label: 'Specialis Token' },
    { key: 'pulsa', label: 'Murah Meriah Pulsa' },
    { key: 'paket', label: 'Semangat Kita Paket Data' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Transaksi aman dengan sistem keamanan berlapis dan sertifikat resmi',
    },
    {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Top up otomatis dalam hitungan detik, 24/7 tanpa gangguan',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Tim support yang responsif siap membantu kapan saja',
    },
    {
      icon: Star,
      title: 'Harga Terbaik',
      description: 'Harga kompetitif dengan berbagai promo menarik setiap hari',
    },
  ];

  return (
    <>
      <div className="bg-background/80 sticky top-0 z-50 flex flex-col border-b backdrop-blur-2xl">
        <div className="h-15 border-b">
          <div className="container flex h-full items-center justify-between">
            <Link
              href="/"
              className="text-primary inline-flex gap-1.5 focus-visible:border-ring focus-visible:ring-ring/50 text-3xl font-bold outline-none transition [font-family:var(--font-family-logo)] focus-visible:ring-[3px]"
            >
              <TeamLogo color="#4caf50" className="size-8" /><span>IdleTop</span>
            </Link>
            <div>
              <Button variant="secondary" size="icon">
                <Search />
              </Button>
            </div>
          </div>
        </div>
        <div className="h-13 container flex items-center justify-between shadow-lg">
          <nav className="flex space-x-1">
            {[
              ['home', 'Home'],
              ['topup', 'Top Up'],
              ['about', 'About'],
            ].map((items, idx) => (
              <Link
                key={idx}
                href={`/${items[0]}`}
                className="hover:text-primary hover:bg-primary/20 focus-visible:border-ring focus-visible:ring-ring/50 rounded-sm px-1.5 outline-none transition focus-visible:ring-[3px]"
              >
                {items[1]}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <main className="-mt-28">
        <div className="pt-34 flex h-svh flex-col">
          <div className="container relative aspect-[20/9] h-auto w-full">
            <div className="relative size-full overflow-hidden rounded-xl shadow-lg">
              <div className="absolute size-full">
                <Link
                  href="/promo/game-terbaru"
                  className="relative flex size-full items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700"
                >
                  <Image src="/images/banners/banner1.png" alt="" fill className="object-cover" />
                </Link>
              </div>
              <button
                className="bg-muted/20 text-muted-foreground aspect-square flex items-center justify-center hover:bg-muted/40 focus-visible:border-ring focus-visible:ring-ring/50 absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-3 shadow-md outline-none transition focus-visible:ring-[3px]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                className="bg-muted/20 text-muted-foreground aspect-square flex items-center justify-center hover:bg-muted/40 focus-visible:border-ring focus-visible:ring-ring/50 absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-3 shadow-md outline-none transition focus-visible:ring-[3px]"
                aria-label="Next slide"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
          <div className="container mt-4">
            <h1 className="text-2xl font-bold leading-relaxed">Promo Game Terbaru</h1>
            <p className="mb-4 line-clamp-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia beatae
              voluptatibus quo dolor laudantium cumque dolorem voluptas, similique doloribus saepe
              quidem distinctio, obcaecati, aliquid totam eligendi consequuntur provident unde.
              Recusandae nesciunt laborum beatae assumenda necessitatibus nobis minima dolorum?
            </p>
            <Button asChild variant="secondary">
              <Link href="/promo/game-terbaru">Baca Selengkapnya</Link>
            </Button>
          </div>
        </div>

        <div className="mb-30 container mt-20">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold">LAGI POPULER NIH</h1>
            <p className="text-base font-light">
              beriku game game yang lagi populer di kalangan remaja
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[...new Array(6)].map((_, idx) => (
              <PopularCard
                key={idx}
                src="/images/MLBB_Naruto_2025.jpg"
                title="Mobile Legend"
                creator="moonton"
              />
            ))}
          </div>
        </div>

        <div className="container mb-4 flex items-center gap-1.5">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              size="sm"
              variant={activeTab === tab.key ? 'default' : 'outline'}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="container mb-16 border-t py-4">
          {activeTab === 'topup' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {[...new Array(8)].map((_, idx) => (
                <GameCard
                  key={idx}
                  title="Genshin Impact"
                  src="/images/GI.jpg"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia beatae
              voluptatibus quo dolor laudantium cumque dolorem voluptas,"
                  icon={Gem}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'token' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {[...new Array(2)].map((_, idx) => (
                <GameCard
                  key={idx}
                  title="Token PLN 50K"
                  src="/images/GI.jpg"
                  description="Lorem ipsum dolor sit amet consectetur."
                  icon={Lightbulb}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'pulsa' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {[...new Array(2)].map((_, idx) => (
                <GameCard
                  key={idx}
                  title="Pulsa Telkomsel 20K"
                  src="/images/GI.jpg"
                  description="Lorem ipsum dolor sit amet."
                  icon={HandCoins}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'paket' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {[...new Array(2)].map((_, idx) => (
                <GameCard
                  key={idx}
                  title="Paket Data 5GB"
                  src="/images/GI.jpg"
                  description="Lorem ipsum dolor."
                  icon={Wifi}
                />
              ))}
            </motion.div>
          )}
        </div><section id="about" className="bg-muted/50 py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Tentang IdleTop</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
                IdleTop adalah platform terpercaya untuk semua kebutuhan top up game, token listrik,
                pulsa, dan paket data. Kami berkomitmen memberikan layanan terbaik dengan harga
                kompetitif dan proses yang cepat.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background rounded-xl p-8 mt-16 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Kenapa Pilih IdleTop?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transaksi aman dengan sistem enkripsi SSL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proses otomatis 24/7 tanpa gangguan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Berbagai metode pembayaran yang mudah</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customer service yang responsif dan ramah</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-lg font-semibold mb-1">Transaksi Berhasil</div>
                  <div className="text-sm text-muted-foreground">Dipercaya jutaan pengguna</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link
                href="/"
                className="text-primary text-2xl font-bold inline-flex gap-1.5 [font-family:var(--font-family-logo)] focus-visible:border-ring focus-visible:ring-ring/5 outline-none focus-visible:ring-[3px] transition"
              >
                <TeamLogo color="#4caf50" className="size-8" /><span>IdleTop</span>
              </Link>
              <p className="text-muted-foreground">
                Platform terpercaya untuk semua kebutuhan top up game,
                token listrik, pulsa, dan paket data.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  ['Home', '/'],
                  ['Top Up Games', '/topup'],
                  ['Promo', '/promo'],
                  ['About', '/about'],
                  ['FAQ', '/faq'],
                ].map(([label, href], idx) => (
                  <li key={idx}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold">Layanan</h3>
              <ul className="space-y-2">
                {[
                  'Top Up Mobile Legends',
                  'Top Up Free Fire',
                  'Top Up Genshin Impact',
                  'Token PLN',
                  'Pulsa & Paket Data',
                ].map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">support@idletop.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+62 812-3456-7890</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Jl. Teknologi No. 123<br />
                    Malang, Jawa Timur 65141
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 IdleTop. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary focus-visible:text-primary outline-none transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
