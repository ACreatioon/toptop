'use client'
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/ui/game-card";
import { PopularCard } from "@/components/ui/populer-card";
import { Search, ChevronLeft, ChevronRight, Gem, Coins, DollarSign, Flashlight, LightbulbIcon, IdCard, Wifi, WifiHigh, HandCoins } from "lucide-react";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [activeTab, setActiveTab] = useState("topup");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 untuk next, -1 untuk prev
  const tabs = [
    { key: "topup", label: "Top Up Games" },
    { key: "token", label: "Specialis Token" },
    { key: "pulsa", label: "Murah Meriah Pulsa" },
    { key: "paket", label: "Semangat Kita Paket Data" },
  ];

  const banners = [
    {
      id: 1,
      title: "Promo Game Terbaru",
      background: "from-blue-600 to-purple-700",
      image: "/images/banner1.jpg",
      link: "/promo/game-terbaru"
    },
    {
      id: 2,
      title: "Diskon Top Up 50%",
      background: "from-red-600 to-orange-500",
      image: "/images/banner2.jpg",
      link: "/promo/diskon-topup"
    },
    {
      id: 3,
      title: "Paket Data Murah",
      background: "from-green-600 to-teal-500",
      image: "/images/banner3.jpg",
      link: "/promo/paket-data"
    },
    {
      id: 4,
      title: "Special Event",
      background: "from-yellow-500 to-amber-600",
      image: "/images/banner4.jpg",
      link: "/promo/special-event"
    }
  ]

  const goToNextBanner = () => {
    setDirection(1);
    setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const goToPrevBanner = () => {
    setDirection(-1);
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToBanner = (index) => {
    setDirection(index > currentBanner ? 1 : -1);
    setCurrentBanner(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNextBanner();
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay, currentBanner]);

  const bannerVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  return (
    <>
      <div className="flex flex-col backdrop-blur-2xl top-0 sticky z-50">
        <div className="border-b items-center flex justify-between py-4 px-24 ">
          <Link href="" className="text-white text-3xl font-bold">
            Toptop
          </Link>
          <div className="">
            <Button
              variant="secondary"
              size="icon"
            >
              <Search />
            </Button>
          </div>
        </div>
        <div className="py-4 px-24 flex justify-between shadow-lg text-white">
          <nav className="flex gap-5">
            <Link href="#" className="hover:text-primary transition-all duration-200">Home</Link>
            <Link href="#">Topup</Link>
            <Link href="#">About</Link>
          </nav>
          <div className="">
            <p className="text-sm font-light text-white/60">smkpgri05jmbr@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="min-h-[70svh] flex justify-center items-center">
        <div className="relative h-[75vh] w-auto px-4 md:px-24 py-6 aspect-[1920/1080]">
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentBanner}
                custom={direction}
                variants={bannerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full"
              >
                <Link href={banners[currentBanner].link}>
                  <div className={`relative h-full w-full bg-gradient-to-r ${banners[currentBanner].background} flex items-center justify-center cursor-pointer`}>
                    <h1 className="text-4xl font-bold text-white z-10">{banners[currentBanner].title}</h1>
                    <Image
                      src={banners[currentBanner].image}
                      alt={banners[currentBanner].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentBanner ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => goToBanner(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all z-10"
              onClick={goToPrevBanner}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all z-10"
              onClick={goToNextBanner}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="px-24 mt-20 mb-30 text-white">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold">LAGI POPULER NIH</h1>
          <p className="text-base font-light">beriku game game yang lagi populer di kalangan remaja</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />
          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />
          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />

          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />
          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />
          <PopularCard src="/images/MLBB_Naruto_2025.jpg" title='Mobile Legend' creator="moonton" />
        </div>
      </div>

      <div className="px-24 mb-10 flex items-center gap-3">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "default" : "secondary"}
            className="text-xs"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="px-6 md:px-12 lg:px-24 mb-20">
        {activeTab === "topup" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {[...new Array(8)].map((_, idx) => (
              <GameCard
                key={idx}
                title="Genshin Impact"
                src="/images/GI.jpg"
                className="w-full"
                icon={Gem}
              />
            ))}
          </motion.div>
        )}

        {activeTab === "token" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            <GameCard title="Token PLN 50K" src="/images/GI.jpg" icon={LightbulbIcon} />
            <GameCard title="Token PLN 100K" src="/images/GI.jpg" icon={LightbulbIcon} />
          </motion.div>
        )}

        {activeTab === "pulsa" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            <GameCard title="Pulsa Telkomsel 20K" src="/images/GI.jpg" icon={HandCoins} />
            <GameCard title="Pulsa XL 25K" src="/images/GI.jpg" icon={HandCoins} />
          </motion.div>
        )}

        {activeTab === "paket" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            <GameCard title="Paket Data 5GB" src="/images/GI.jpg" icon={Wifi} />
            <GameCard title="Paket Data 10GB" src="/images/GI.jpg" icon={Wifi} />
          </motion.div>
        )}
      </div >
    </>
  );
}
