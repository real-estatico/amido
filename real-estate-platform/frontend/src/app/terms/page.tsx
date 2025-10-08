"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-black" dir="rtl">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="cursor-pointer">
                <div className="font-luxury-display text-xl md:text-2xl text-white tracking-wider">
                  AMIDO
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/" className="text-white/70 hover:text-white text-sm font-luxury-body transition-all duration-300 tracking-wider uppercase">
                חזרה לאתר
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terms of Use Content */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury-display">
              תנאי שימוש
            </h1>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-xl text-white/90">
              תנאי השימוש באתר קבוצת Amido
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="prose prose-invert max-w-none"
          >
            <div className="text-white/90 leading-relaxed space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">1. כללי</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  תנאי שימוש אלו חלים על השימוש באתר של קבוצת Amido ("האתר"). השימוש באתר מהווה הסכמה מלאה לתנאים אלו. 
                  אנו שומרים לעצמנו את הזכות לשנות תנאים אלו בכל עת ללא הודעה מוקדמת.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">2. שימוש באתר</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  האתר מיועד למטרות מידע בלבד. אסור להשתמש באתר למטרות בלתי חוקיות או בניגוד לתנאים אלו. 
                  אסור להפריע לפעילות האתר או לגרום נזק למערכות האתר.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">3. זכויות יוצרים</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  כל התוכן באתר, כולל טקסטים, תמונות, לוגואים ועיצוב, מוגן בזכויות יוצרים ומהווה קניין של קבוצת Amido. 
                  אסור להעתיק, להפיץ או להשתמש בתוכן ללא רשות מפורשת בכתב.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">4. הגבלת אחריות</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  קבוצת Amido אינה אחראית לכל נזק ישיר או עקיף שייגרם כתוצאה משימוש באתר. 
                  המידע באתר מוצג כפי שהוא ללא כל אחריות לגבי דיוקו או שלמותו.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">5. קישורים לאתרים חיצוניים</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  האתר עשוי להכיל קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן או למדיניות הפרטיות של אתרים אלו.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">6. שינויים</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  אנו שומרים לעצמנו את הזכות לשנות תנאים אלו בכל עת. השינויים ייכנסו לתוקף מייד עם פרסומם באתר. 
                  המשך השימוש באתר לאחר השינויים מהווה הסכמה לתנאים החדשים.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">7. קשר</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  לשאלות בנושא תנאי השימוש, ניתן לפנות אלינו בכתובת: info@amido.co.il או בטלפון: 03-1234567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              © 2024 Amido Group. כל הזכויות שמורות.
            </p>
            <p className="text-white/60 mb-4">
              כתובת: רחוב דיזנגוף 100, תל אביב | טלפון: 03-1234567 | אימייל: info@amido.co.il
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
