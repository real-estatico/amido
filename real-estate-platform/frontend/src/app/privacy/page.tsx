"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Privacy() {
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

      {/* Privacy Policy Content */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury-display">
              מדיניות פרטיות
            </h1>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <p className="text-xl text-white/90">
              מדיניות הפרטיות של קבוצת Amido
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
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">1. איסוף מידע</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  אנו אוספים מידע אישי שתספק לנו מרצונך, כולל שם, כתובת אימייל, מספר טלפון ופרטים נוספים. 
                  המידע נאסף באמצעות טפסי הרשמה, טפסי יצירת קשר ושאר אמצעי תקשורת באתר.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">2. שימוש במידע</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  המידע שאנו אוספים משמש אותנו לצורך מתן שירותים, יצירת קשר עמך ופיתוח מוצרים ושירותים חדשים. 
                  אנו משתמשים במידע גם לצורך שיפור האתר והשירותים שלנו.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">3. הגנת המידע</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  אנו נוקטים באמצעי אבטחה מתאימים להגנה על המידע האישי שלך מפני גישה לא מורשית, שימוש לרעה או חשיפה. 
                  המידע נשמר במערכות מאובטחות ומוגן באמצעות הצפנה מתקדמת.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">4. שיתוף מידע</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  אנו לא נמכור, נשכיר או נחלוק את המידע האישי שלך עם צדדים שלישיים ללא הסכמתך המפורשת. 
                  יוצא דופן: אנו עשויים לחלוק מידע עם ספקי שירותים מהימנים הפועלים בשמנו.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">5. זכויותיך</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  יש לך זכות לגשת למידע האישי שלך, לתקן אותו, למחוק אותו או להגביל את השימוש בו. 
                  ניתן לפנות אלינו בכל עת לבקשת גישה, תיקון או מחיקה של המידע האישי שלך.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">6. עוגיות (Cookies)</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  האתר משתמש בעוגיות לשיפור חוויית המשתמש ולניתוח התנהגות הגלישה. 
                  ניתן להשבית עוגיות בהגדרות הדפדפן, אך הדבר עשוי להשפיע על תפקוד האתר.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">7. שינויים במדיניות</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  אנו שומרים לעצמנו את הזכות לשנות מדיניות פרטיות זו בכל עת. 
                  שינויים משמעותיים יפורסמו באתר ויישלחו לך הודעה במידת האפשר.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-luxury-heading">8. קשר</h2>
                <p className="text-white/90 leading-relaxed font-luxury-body text-lg">
                  לשאלות בנושא מדיניות פרטיות, ניתן לפנות אלינו בכתובת: info@amido.co.il או בטלפון: 03-1234567
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
