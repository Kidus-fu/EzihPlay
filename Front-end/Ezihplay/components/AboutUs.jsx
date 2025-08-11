import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CountUp = ({ target, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const startCount = () => {
    if (started) return; // Prevent multiple runs
    setStarted(true);
    let start = 0;
    const increment = target / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
  };

  return (
    <motion.h4
      className="mb-2 text-3xl font-bold text-orange-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={startCount}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.h4>
  );
};

const AboutUS = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-down">
          <h2 className="text-orange-600 text-xl mb-2 font-semibold tracking-wide">
            About Us
          </h2>
          <h3 className="mb-4 text-3xl md:text-4xl font-bold section-title text-gray-900">
            Connecting People Through the Language of Music
          </h3>
          <p className="mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            EzihPlay is a community-driven platform where music lovers can share,
            discover, and review playlists from YouTube, Spotify, and more.
            Inspired by Ethiopia’s rich musical heritage and modern digital culture,
            we bring together traditional melodies, Afrobeat vibes, and global hits.
            Whether you want to share your favorite playlist or explore something new,
            EzihPlay connects you with people who feel the music just like you do.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
        <CountUp target={5000} suffix="+" />
        <p className="text-gray-500">Active Users</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
        <CountUp target={2000} suffix="+" />
        <p className="text-gray-500">Playlists Shared</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
        <CountUp target={1500} suffix="+" />
        <p className="text-gray-500">Reviews Written</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
        <CountUp target={2025} />
        <p className="text-gray-500">Founded</p>
      </div>
    </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12" data-aos="fade-up">
          <a
            href="#team"
            className="cursor-pointer rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 shadow-md hover:shadow-lg transition"
          >
            Meet Our Team
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-xl border border-orange-500 text-orange-500 py-3 px-8 hover:bg-orange-50 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
