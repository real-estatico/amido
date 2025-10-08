"use client";

import Link from "next/link";
import { colorClasses } from "../utils/colors";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Logo from "../components/Logo";

export default function Home() {
  // Function to get all background images dynamically
  const getAllBackgroundImages = () => {
    // List of background images - automatically includes all images in /background/ folder
    const backgroundImages = [
      '/background/pexels-marketingtuig-87223.jpg',
      '/background/pexels-matthiaszomer-313736.jpg',
      '/background/pexels-brett-sayles-2606383.jpg',
      '/background/pexels-pixabay-259950.jpg',
      '/background/pexels-sevenstormphotography-409842.jpg',
      '/background/pexels-pixabay-163707.jpg',
      '/background/pexels-expect-best-79873-351262.jpg',
      '/background/pexels-pixabay-358530.jpg',
      '/background/pexels-scottwebb-1190897.jpg',
      '/background/pexels-sevenstormphotography-425122.jpg'
    ];
    
    // To add new images: just add them to the /public/background/ folder
    // and add the path here following the pattern: '/background/[filename]'
    return backgroundImages;
  };

  // Slideshow images - automatically includes all background images
  const slideshowImages = getAllBackgroundImages();

  // Features cards data
  const featuresCards = [
    {
      backgroundImage: "/background/pexels-marketingtuig-87223.jpg",
      title: "הזדמנויות בלעדיות",
      description: "גישה לעסקאות פרי-סייל ייחודיות במחירים ותנאים שלא קיימים בשוק החופשי"
    },
    {
      backgroundImage: "/background/pexels-matthiaszomer-313736.jpg",
      title: "מומחיות מקצועית",
      description: "צוות מומחים עם ניסיון עשיר בתחום הנדלן והשקעות, המלווה אותך בכל שלב"
    },
    {
      backgroundImage: "/background/pexels-brett-sayles-2606383.jpg",
      title: "קהילה חזקה",
      description: "הצטרף לקהילה של משקיעים מנוסים, שיתוף ידע והזדמנויות בלעדיות"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
        <div className="min-h-screen bg-slate-950" dir="rtl">
      {/* Background Image for hero section only */}
      <div className="absolute inset-0 z-0" style={{ height: '100vh' }}>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slideshowImages[currentImageIndex]}')`,
            backgroundPosition: "center top"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/30"></div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-transparent backdrop-blur-sm border-b border-white/20 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo on the left */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="#" className="cursor-pointer">
                  <Logo className="text-white" size="md" />
                </Link>
              </div>
            </div>
            
            {/* Navigation on the right */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                <Link href="#vision" className="text-white/80 hover:text-white hover:bg-red-900/20 px-4 py-2 text-sm font-luxury-accent transition-all duration-300 border border-transparent hover:border-red-900/30">
                  החזון
                </Link>
                <Link href="#solution" className="text-white/80 hover:text-white hover:bg-red-900/20 px-4 py-2 text-sm font-luxury-accent transition-all duration-300 border border-transparent hover:border-red-900/30">
                  הפתרון
                </Link>
                <Link href="#about" className="text-white/80 hover:text-white hover:bg-red-900/20 px-4 py-2 text-sm font-luxury-accent transition-all duration-300 border border-transparent hover:border-red-900/30">
                  אודותינו
                </Link>
                <Link href="#contact" className="text-white/80 hover:text-white hover:bg-red-900/20 px-4 py-2 text-sm font-luxury-accent transition-all duration-300 border border-transparent hover:border-red-900/30">
                  צור קשר
                </Link>
                <Link href="/register" className="bg-red-900 hover:bg-red-950 text-white px-4 py-2 text-sm font-luxury-accent transition-all duration-300 border border-red-900 hover:border-red-950">
                  הרשמה
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white/80 hover:text-white p-2 transition-all duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/10 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          {/* Background Music Controls */}
          <div className="absolute top-4 left-4 z-30">
            <button
              id="musicToggle"
              className="bg-black/50 backdrop-blur-sm text-amber-400 p-3 rounded-full hover:bg-black/70 transition-all duration-300"
              onClick={() => {
                const audio = document.getElementById('backgroundMusic') as HTMLAudioElement;
                const button = document.getElementById('musicToggle');
                if (audio.paused) {
                  audio.play();
                  button.innerHTML = '🔊';
                } else {
                  audio.pause();
                  button.innerHTML = '🔇';
                }
              }}
            >
              🔇
            </button>
                <audio id="backgroundMusic" loop preload="auto">
                  <source src="https://www.bensound.com/bensound-music/bensound-inspire.mp3" type="audio/mpeg" />
                  <source src="https://www.bensound.com/bensound-music/bensound-inspire.ogg" type="audio/ogg" />
                </audio>
          </div>
          
          <div className="text-center max-w-6xl mx-auto">
            {/* Luxury Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <span className="text-white/90 text-sm font-medium tracking-wide">השקעות נדלן בלעדיות</span>
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-bold ${colorClasses.text.primary} mb-8 leading-tight font-luxury-display`} style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
              Amido Group
              <span className={`block text-4xl md:text-5xl ${colorClasses.text.secondary} mt-4 font-luxury-heading`}>קבוצת נדל״ן</span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${colorClasses.text.secondary} mb-16 max-w-5xl mx-auto leading-relaxed font-luxury-body`}>
              הצטרפו לקהילה סודית של משקיעים נבחרים. גישה לעסקאות יוקרה בלעדיות, 
              תנאים מועדפים ומומחיות משותפת. ביחד כקבוצה אנחנו חזקים יותר.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#contact" className={`${colorClasses.button.primary} px-16 py-6 rounded-lg text-xl font-semibold transition-all duration-300 shadow-2xl shadow-blue-500/25 inline-block hover:scale-105 transform`}>
                השאר פרטים ונחזור אליך
              </a>
              <a href="#vision" className="text-white/80 hover:text-white px-8 py-4 border border-white/30 rounded-lg text-lg font-medium transition-all duration-300 hover:border-white/50 hover:bg-white/5">
                גלה את החזון שלנו
              </a>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/70 text-sm">עסקאות מוצלחות</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">₪50M+</div>
                <div className="text-white/70 text-sm">היקף השקעות</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70 text-sm">משקיעים פעילים</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
              className="text-center mb-24"
            >
              <h2 className={`text-5xl md:text-6xl font-bold ${colorClasses.text.primary} mb-8 font-luxury-display`}>
                למה לבחור ב-Amido
              </h2>
              <div className="w-32 h-1 mx-auto mb-8" style={{
                background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
              }}></div>
              <p className={`text-xl md:text-2xl ${colorClasses.text.secondary} max-w-4xl mx-auto leading-relaxed font-luxury-body`}>
                גישה להשקעות נדלן יוקרה שהיו בעבר מחוץ להישג יד - עכשיו בהישג ידכם
              </p>
            </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-0 max-w-6xl mx-auto"
          >
            {featuresCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className={`flex flex-col md:flex-row items-center min-h-[400px] ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${card.backgroundImage}')`
                  }}
                >
                  {/* Fade effect to background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40"
                    style={{
                      background: index % 2 === 0 
                        ? 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)'
                        : 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)'
                    }}
                  ></div>
                </div>
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {card.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${colorClasses.text.primary} mb-6 font-luxury-display`}>
              החזון שלנו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className={`text-xl ${colorClasses.text.secondary}`}>
              החזון שלנו להשקעות נדלן
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
              className="relative bg-gray-200 shadow-2xl p-12 min-h-[500px] flex items-center"
            >
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl text-slate-800 leading-relaxed mb-8 font-luxury-body">
                  החזון שלנו הוא להנגיש את עולם ההשקעות בנדלן, כך שגם משקיעים פרטיים יוכלו להנות מהזדמנויות יוצאות דופן.
                </p>
                
                <p className="text-xl text-slate-800 leading-relaxed mb-8 font-luxury-body">
                  אנו שואפים לבנות קהילת משקיעים איכותית ומובילה המבוססת על אמון, שקיפות ומקצועיות שתעניק לחבריה - גישה לעסקאות פרי-סייל ייחודיות בתנאים מועדפים, ליווי משפטי ומקצועי המבטיח ביטחון ושקט נפשי לאורך כל הדרך וחווית השתייכות לקבוצה חזקה, ערכית וחדשנית המשלבת בין הון כלכלי להון אנושי.
                </p>
                
                <p className="text-xl text-slate-800 leading-relaxed mb-8 font-luxury-body">
                  מעבר לעסקאות אנו יוצרים פלטפורמה חברתית המשלבת כנסים, מפגשים ותוכן מקצועי ברמה הגבוהה ביותר ההופכים כל השקעה לחוויה מעצימה ומשמעותית.
                </p>
                
                <p className="text-xl text-slate-800 leading-relaxed font-luxury-body">
                  אנו רואים בקבוצה הזו את הבסיס למותג השקעות נדל״ן מוביל בישראל. הזדמנות אמיתית לצמיחה כלכלית וחברתית.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${colorClasses.text.primary} mb-6 font-luxury-display`}>
              הפתרון שלנו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className={`text-xl ${colorClasses.text.secondary}`}>
              איך אנחנו פותרים את אתגרי השקעות הנדלן ומביאים פתרונות אמיתיים
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-0 max-w-6xl mx-auto"
          >
            {/* Issue 1 vs Solution 1 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[300px] border-2 border-white/30"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center border-r-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl ml-4 mt-1">✓</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">מיקסום ערך ההשקעה</h4>
                    <p className="text-lg text-white/90 leading-relaxed">ניצול כח הקבוצה להשגת הנחות משמעותיות, תנאי מימון נוחים ותנאים מסחריים מיטביים.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-800 flex flex-col justify-center border-l-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-red-400 text-2xl ml-4 mt-1">✗</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">מחירים ותנאים</h4>
                    <p className="text-lg text-white/90 leading-relaxed">משקיע פרטי לא מצליח להשיג הנחות והטבות שמקבלות קבוצות גדולות או גופים מוסדיים.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 2 vs Solution 2 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[300px] border-t-2 border-white/30"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center border-r-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl ml-4 mt-1">✓</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">הנגשת הזדמנויות בלעדיות</h4>
                    <p className="text-lg text-white/90 leading-relaxed">לתת למשקיעים פרטיים עסקאות פרי-סייל ייחודיות במחירים ותנאים שלא קיימים בשוק החופשי.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-800 flex flex-col justify-center border-l-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-red-400 text-2xl ml-4 mt-1">✗</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">גישה לעסקאות פרי-סייל</h4>
                    <p className="text-lg text-white/90 leading-relaxed">העסקאות המשתלמות נסגרות מאחורי הקלעים הרבה לפני שהציבור הרחב נחשף אליהן.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 3 vs Solution 3 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[300px] border-t-2 border-white/30"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center border-r-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl ml-4 mt-1">✓</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">ביטחון ושקיפות מלאה</h4>
                    <p className="text-lg text-white/90 leading-relaxed">צוות משפטי וכלי בדיקה קפדניים שמבטיחים ליווי אישי ושקיפות מלאה בכל שלב.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-800 flex flex-col justify-center border-l-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-red-400 text-2xl ml-4 mt-1">✗</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">ליווי מקצועי</h4>
                    <p className="text-lg text-white/90 leading-relaxed">משקיעים רבים פועלים לבדם, ללא עורכי דין המגנים עליהם או אנשי מקצוע הבוחנים את טיב העסקה לעומק.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 4 vs Solution 4 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[300px] border-t-2 border-white/30"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center border-r-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl ml-4 mt-1">✓</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">קהילה איכותית ומובילה</h4>
                    <p className="text-lg text-white/90 leading-relaxed">חיבור בין אנשים בעלי ערכים משותפים, יצירת רשת עסקית וחברתית שתעניק ערך מעבר לעסקה עצמה.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-800 flex flex-col justify-center border-l-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-red-400 text-2xl ml-4 mt-1">✗</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">שקיפות</h4>
                    <p className="text-lg text-white/90 leading-relaxed">עודף מידע שיווקי, חוסר בהירות וחוסר אמון פוגעים ביכולות המשקיע להבין את העסקה.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 5 vs Solution 5 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[300px] border-t-2 border-white/30"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-900 flex flex-col justify-center border-r-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl ml-4 mt-1">✓</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">אירועים, כנסים ותוכן בלעדי</h4>
                    <p className="text-lg text-white/90 leading-relaxed">חברי הקבוצה יהנו מגישה לאירועים וכנסים סגורים, מפגשי נטוורקינג יוקרתיים ותוכן מקצועי ייחודי.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-12 bg-slate-800 flex flex-col justify-center border-l-2 border-white/30">
                <div className="flex items-start">
                  <span className="text-red-400 text-2xl ml-4 mt-1">✗</span>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-6">שייכות</h4>
                    <p className="text-lg text-white/90 leading-relaxed">משקיעים פרטיים פועלים באופן בודד - "כל אחד לעצמו", ללא קהילה מאוחדת, ללא גב משותף וללא שיתוף ידע היכול להעצים את ההשקעה.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${colorClasses.text.primary} mb-6 font-luxury-display`}>
              אודותינו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className={`text-xl ${colorClasses.text.secondary}`}>
              מי אנחנו ומה מניע אותנו להצלחה שלכם
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-lg"
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-serif">הצוות שלנו</h3>
              <p className="text-gray-300 leading-relaxed">
                מומחים מנוסים בתחום הנדלן, השקעות ומשפטים עם ניסיון של עשרות שנים בשוק הישראלי
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              className="text-center bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-lg"
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-serif">הניסיון שלנו</h3>
              <p className="text-gray-300 leading-relaxed">
                מעל 100 עסקאות מוצלחות, מיליוני שקלים בהשקעות וקהילה של מאות משקיעים מרוצים
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              className="text-center bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-lg"
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-serif">המחויבות שלנו</h3>
              <p className="text-gray-300 leading-relaxed">
                מחויבות מלאה לשקיפות, מקצועיות והצלחת כל משקיע בקהילה שלנו
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${colorClasses.text.primary} mb-6 font-luxury-display`}>
              צור קשר
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className={`text-xl ${colorClasses.text.secondary}`}>
              השאר פרטים ונחזור אליך בהקדם עם הזדמנויות בלעדיות
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-600/50 p-12"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-3">
                    שם פרטי
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    placeholder="הכנס את שמך הפרטי"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-3">
                    שם משפחה
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    placeholder="הכנס את שם המשפחה"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-3">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    placeholder="050-1234567"
                  />
                </div>
              </div>
              
              
              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                    הודעה (אופציונלי)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    placeholder="ספר לנו על עצמך ומה מעניין אותך..."
                  ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-900 to-red-950 text-white px-12 py-5 rounded-lg text-lg font-semibold hover:from-red-950 hover:to-red-900 transition-all duration-300 shadow-2xl shadow-red-900/25"
                >
                  שלח הודעה
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
                <div>
                      <Logo className="text-gray-200 mb-6" size="sm" />
              <p className="text-gray-400 leading-relaxed font-luxury-body">
                מחברים משקיעים נבחרים עם הזדמנויות נדלן יוקרתיות בלעדיות דרך קבוצות רכישה סודיות.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-200 font-luxury-accent">הפלטפורמה</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#vision" className="hover:text-gray-200 transition-colors font-luxury-body">החזון</Link></li>
                <li><Link href="#solution" className="hover:text-gray-200 transition-colors font-luxury-body">הפתרון</Link></li>
                <li><Link href="#about" className="hover:text-gray-200 transition-colors font-luxury-body">אודותינו</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-200 font-luxury-accent">משאבים</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-gray-200 transition-colors font-luxury-body">מדריך השקעות</Link></li>
                <li><Link href="#" className="hover:text-gray-200 transition-colors font-luxury-body">שאלות נפוצות</Link></li>
                <li><Link href="#" className="hover:text-gray-200 transition-colors font-luxury-body">תמיכה</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-200 font-luxury-accent">צור קשר</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="font-luxury-body">info@amido.com</li>
                <li className="font-luxury-body">+972-50-123-4567</li>
                <li className="font-luxury-body">תל אביב, ישראל</li>
              </ul>
            </div>
          </div>
            <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p className="font-luxury-body">&copy; 2024 Amido. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
