"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { submitContactForm, showFormMessage } from "../utils/formSubmission";

// Function to get all background images dynamically
const getAllBackgroundImages = () => {
  // List of background images from /public/background/ folder
  const backgroundImages = [
    '/background/pexels-brett-sayles-2606383.jpg',
    '/background/pexels-expect-best-79873-351262.jpg',
    '/background/pexels-pixabay-259950.jpg',
    '/background/pexels-sevenstormphotography-409842.jpg',
    '/background/pexels-sevenstormphotography-425122.jpg'
  ];
  
  return backgroundImages;
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Home() {
  // Slideshow images - automatically includes all background images
  const slideshowImages = getAllBackgroundImages();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Scroll detection for automatic section jumping
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const sections = ['features', 'vision', 'solution', 'about', 'contact'];
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        for (let i = 0; i < sections.length - 1; i++) {
          const currentSection = document.getElementById(sections[i]);
          const nextSection = document.getElementById(sections[i + 1]);
          
          if (currentSection && nextSection) {
            const currentSectionBottom = currentSection.offsetTop + currentSection.offsetHeight;
            const nextSectionTop = nextSection.offsetTop;
            
            // If we're near the end of current section (within 100px of bottom)
            if (scrollPosition + windowHeight >= currentSectionBottom - 100) {
              // Smooth scroll to next section
              nextSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
              break;
            }
          }
        }
        
        setIsScrolling(false);
      }, 150); // Wait 150ms after scroll stops
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  // Contact form submission handler
  // Function to show contact form success message
  const showContactSuccessMessage = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
        <div class="text-6xl mb-4">✅</div>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">תודה שפניתם אלינו</h3>
        <p class="text-gray-600 mb-6">נענה על פנייתכם בהקדם!</p>
        <button 
          onclick="this.closest('.fixed').remove()" 
          class="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-950 transition-colors"
        >
          סגור
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 5000);
  };

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: '', // Company field removed
      message: formData.get('message') as string,
    };

    // Show loading state
    const submitButton = document.getElementById('contact-submit') as HTMLButtonElement;
    const submitText = document.getElementById('contact-submit-text');
    const submitLoading = document.getElementById('contact-submit-loading');
    
    if (submitButton && submitText && submitLoading) {
      submitButton.disabled = true;
      submitText.classList.add('hidden');
      submitLoading.classList.remove('hidden');
    }

    try {
      const result = await submitContactForm(contactData);
      
      if (result.result === 'success') {
        // Show custom success message for contact form
        showContactSuccessMessage();
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage({
        result: 'error',
        error: 'שגיאה בשליחת הטופס. אנא נסה שוב.'
      });
    } finally {
      // Reset button state
      if (submitButton && submitText && submitLoading) {
        submitButton.disabled = false;
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
      }
    }
  };

  // Function to get features images dynamically
  const getFeaturesImages = () => {
    // List of available features images - automatically uses first 3 images from /features/ folder
    const featuresImages = [
      "/features/pexels-brett-sayles-2606383.jpg",
      "/features/pexels-pixabay-358530.jpg", 
      "/features/pexels-sevenstormphotography-443383.jpg"
    ];
    return featuresImages;
  };

  // Features cards data
  const featuresImages = getFeaturesImages();
  const featuresCards = [
    {
      backgroundImage: featuresImages[0],
      title: "הזדמנויות בלעדיות",
      description: "גישה לעסקאות פרי-סייל ייחודיות במחירים ותנאים שלא קיימים בשוק החופשי"
    },
    {
      backgroundImage: featuresImages[1],
      title: "מומחיות מקצועית",
      description: "צוות מומחים עם ניסיון עשיר בתחום הנדלן והשקעות, המלווה אותך בכל שלב"
    },
    {
      backgroundImage: featuresImages[2],
      title: "קהילה חזקה",
      description: "הצטרף לקהילה של משקיעים מנוסים, שיתוף ידע והזדמנויות בלעדיות"
    }
  ];

  return (
    <div className="min-h-screen bg-black" dir="rtl">
      {/* Hero Section Background Image Slideshow (absolute to cover hero only) */}
      <div className="absolute inset-0 z-0" style={{ height: '100vh' }}>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slideshowImages[currentImageIndex]}')`,
            backgroundPosition: "center top"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-transparent backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link href="#" className="cursor-pointer">
                <div className="font-luxury-display text-xl md:text-2xl text-white tracking-wider">
                  AMIDO
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12 space-x-reverse">
              <Link href="#features" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                למה לבחור ב-Amido
              </Link>
              <Link href="#vision" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase" onClick={(e) => { e.preventDefault(); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                החזון שלנו
              </Link>
              <Link href="#solution" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase" onClick={(e) => { e.preventDefault(); document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                הפתרון שלנו
              </Link>
              <Link href="#about" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                אודותינו
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                צור קשר
              </Link>
              <Link href="/register" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase border border-white/30 px-6 py-2 hover:bg-white/10">
                הרשמה
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  href="#features" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                >
                  למה לבחור ב-Amido
                </Link>
                <Link 
                  href="#vision" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                >
                  החזון שלנו
                </Link>
                <Link 
                  href="#solution" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                >
                  הפתרון שלנו
                </Link>
                <Link 
                  href="#about" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                >
                  אודותינו
                </Link>
                <Link 
                  href="#contact" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                >
                  צור קשר
                </Link>
                <Link 
                  href="/register" 
                  className="block px-3 py-2 text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase border border-white/30 rounded hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  הרשמה
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 font-luxury-display tracking-tight">
              AMIDO
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-8 md:mb-12 font-luxury-body tracking-wider uppercase">
              קבוצת נדל״ן
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 mx-auto mb-8 md:mb-12 bg-white/60"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-luxury-body px-4">
              הצטרפו לקהילה רחבה של משקיעים נבחרים<br />
              תהנו מהנחות משמעותיות, תנאים יחודיים ואירועים פרטיים יוקרתיים
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section (Vertical Layout with Image-Text Alternating) */}
      <section id="features" className="py-48 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 font-luxury-display">
              למה לבחור ב-Amido
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 mx-auto mb-6 md:mb-8" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-luxury-body px-4">
              גישה להשקעות נדלן יוקרה שהיו בעבר מחוץ להישג יד - עכשיו בהישג ידכם
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-16 max-w-6xl mx-auto"
          >
            {featuresCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className={`flex flex-col lg:flex-row items-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${card.backgroundImage}')`
                  }}
                >
                  {/* Fade effect to background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/60"
                    style={{
                      background: index % 2 === 0 
                        ? 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)'
                        : 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)'
                    }}
                  ></div>
                </div>
                
                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 bg-black flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section (with gray background, no image, no borders) */}
      <section id="vision" className="py-48 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury-display">
              החזון שלנו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-xl text-white/90">
              החזון שלנו להשקעות נדלן
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
              className="relative bg-black/50 backdrop-blur-sm p-12 min-h-[500px] flex items-center"
            >
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-luxury-body">
                  החזון שלנו הוא להנגיש את עולם ההשקעות בנדלן, כך שגם משקיעים פרטיים יוכלו להנות מהזדמנויות יוצאות דופן.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-luxury-body">
                  אנו שואפים לבנות קהילת משקיעים איכותית ומובילה המבוססת על אמון, שקיפות ומקצועיות שתעניק לחבריה - גישה לעסקאות פרי-סייל ייחודיות בתנאים מועדפים, ליווי משפטי ומקצועי המבטיח ביטחון ושקט נפשי לאורך כל הדרך וחווית השתייכות לקבוצה חזקה, ערכית וחדשנית המשלבת בין הון כלכלי להון אנושי.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-luxury-body">
                  מעבר לעסקאות אנו יוצרים פלטפורמה חברתית המשלבת כנסים, מפגשים ותוכן מקצועי ברמה הגבוהה ביותר ההופכים כל השקעה לחוויה מעצימה ומשמעותית.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-luxury-body">
                  אנו רואים בקבוצה הזו את הבסיס למותג השקעות נדל״ן מוביל בישראל. הזדמנות אמיתית לצמיחה כלכלית וחברתית.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Solution Section (Issue vs Solution layout with white borders) */}
      <section id="solution" className="py-48 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury-display">
              הפתרון שלנו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-xl text-white/90">
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
              className="flex flex-col md:flex-row items-center min-h-[200px] border border-sky-300/20 bg-transparent backdrop-blur-sm"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-sky-500/5 to-slate-900/20 flex flex-col justify-center border-r border-sky-300/20">
                <div className="flex items-start">
                  <span className="text-sky-400 text-xl ml-3 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">מיקסום ערך ההשקעה</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">ניצול כח הקבוצה להשגת הנחות משמעותיות, תנאי מימון נוחים ותנאים מסחריים מיטביים.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-slate-800/20 to-red-500/5 flex flex-col justify-center border-l border-red-300/20">
                <div className="flex items-start">
                  <span className="text-red-400 text-xl ml-3 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">מחירים ותנאים</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">משקיע פרטי לא מצליח להשיג הנחות והטבות שמקבלות קבוצות גדולות או גופים מוסדיים.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 2 vs Solution 2 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[200px] border border-sky-300/20 bg-transparent backdrop-blur-sm"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-sky-500/5 to-slate-900/20 flex flex-col justify-center border-r border-sky-300/20">
                <div className="flex items-start">
                  <span className="text-sky-400 text-xl ml-3 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">הנגשת הזדמנויות בלעדיות</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">לתת למשקיעים פרטיים עסקאות פרי-סייל ייחודיות במחירים ותנאים שלא קיימים בשוק החופשי.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-slate-800/20 to-red-500/5 flex flex-col justify-center border-l border-red-300/20">
                <div className="flex items-start">
                  <span className="text-red-400 text-xl ml-3 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">גישה לעסקאות פרי-סייל</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">העסקאות המשתלמות נסגרות מאחורי הקלעים הרבה לפני שהציבור הרחב נחשף אליהן.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 3 vs Solution 3 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[200px] border border-sky-300/20 bg-transparent backdrop-blur-sm"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-sky-500/5 to-slate-900/20 flex flex-col justify-center border-r border-sky-300/20">
                <div className="flex items-start">
                  <span className="text-sky-400 text-xl ml-3 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">ביטחון ושקיפות מלאה</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">צוות משפטי וכלי בדיקה קפדניים שמבטיחים ליווי אישי ושקיפות מלאה בכל שלב.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-slate-800/20 to-red-500/5 flex flex-col justify-center border-l border-red-300/20">
                <div className="flex items-start">
                  <span className="text-red-400 text-xl ml-3 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">ליווי מקצועי</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">משקיעים רבים פועלים לבדם, ללא עורכי דין המגנים עליהם או אנשי מקצוע הבוחנים את טיב העסקה לעומק.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 4 vs Solution 4 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[200px] border border-sky-300/20 bg-transparent backdrop-blur-sm"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-sky-500/5 to-slate-900/20 flex flex-col justify-center border-r border-sky-300/20">
                <div className="flex items-start">
                  <span className="text-sky-400 text-xl ml-3 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">קהילה איכותית ומובילה</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">חיבור בין אנשים בעלי ערכים משותפים, יצירת רשת עסקית וחברתית שתעניק ערך מעבר לעסקה עצמה.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-slate-800/20 to-red-500/5 flex flex-col justify-center border-l border-red-300/20">
                <div className="flex items-start">
                  <span className="text-red-400 text-xl ml-3 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">שקיפות</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">עודף מידע שיווקי, חוסר בהירות וחוסר אמון פוגעים ביכולות המשקיע להבין את העסקה.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issue 5 vs Solution 5 */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col md:flex-row items-center min-h-[200px] border border-sky-300/20 bg-transparent backdrop-blur-sm"
            >
              {/* Solution Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-sky-500/5 to-slate-900/20 flex flex-col justify-center border-r border-sky-300/20">
                <div className="flex items-start">
                  <span className="text-sky-400 text-xl ml-3 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">אירועים, כנסים ותוכן בלעדי</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">חברי הקבוצה יהנו מגישה לאירועים וכנסים סגורים, מפגשי נטוורקינג יוקרתיים ותוכן מקצועי ייחודי.</p>
                  </div>
                </div>
              </div>
              
              {/* Issue Section */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-slate-800/20 to-red-500/5 flex flex-col justify-center border-l border-red-300/20">
                <div className="flex items-start">
                  <span className="text-red-400 text-xl ml-3 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-heading">שייכות</h4>
                    <p className="text-base text-white/90 leading-relaxed font-luxury-body">משקיעים פרטיים פועלים באופן בודד - "כל אחד לעצמו", ללא קהילה מאוחדת, ללא גב משותף וללא שיתוף ידע היכול להעצים את ההשקעה.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-48 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury-display">
              אודותינו
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-xl text-white/90">
              הכירו את הצוות המוביל את המהפכה בהשקעות נדלן
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="bg-slate-800/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">מומחיות מקצועית</h3>
              <p className="text-white/90">צוות מומחים עם ניסיון עשיר בתחום הנדלן והשקעות</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-slate-800/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">שקיפות מלאה</h3>
              <p className="text-white/90">ליווי משפטי וכלי בדיקה קפדניים בכל שלב</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-slate-800/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">קהילה חזקה</h3>
              <p className="text-white/90">רשת משקיעים איכותית עם ערכים משותפים</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-luxury-display">
              צור קשר
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 mx-auto mb-4 sm:mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-lg sm:text-xl text-white/90 px-4">
              מוכנים להתחיל את המסע שלכם להשקעות נדלן מוצלחות?
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8">
              <form id="contact-form" onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-white mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 text-sm sm:text-base"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-white mb-2">אימייל</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 text-sm sm:text-base"
                    placeholder="הכנס את כתובת האימייל שלך"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-white mb-2">טלפון *</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 text-sm sm:text-base text-right"
                    placeholder="הכנס את מספר הטלפון שלך"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-white mb-2">הודעה (אופציונלי)</label>
                  <textarea 
                    id="contact-message" 
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 text-sm sm:text-base"
                    placeholder="כתוב את ההודעה שלך כאן (אופציונלי)"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  id="contact-submit"
                  className="w-full bg-red-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-luxury-accent hover:bg-red-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span id="contact-submit-text">שלח הודעה</span>
                  <span id="contact-submit-loading" className="hidden">שולח...</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Logo className="text-white mx-auto mb-6" size="lg" />
            <p className="text-white/60 mb-4">
              © 2024 Amido Group. כל הזכויות שמורות.
            </p>
            <p className="text-white/60 mb-4">
              כתובת: רחוב דיזנגוף 100, תל אביב | טלפון: 03-1234567 | אימייל: info@amido.co.il
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">תנאי שימוש</Link>
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">מדיניות פרטיות</Link>
              <Link href="#contact" className="text-white/60 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>צור קשר</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}