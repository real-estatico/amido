"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../../components/Logo";
import { submitRegistrationForm, showFormMessage } from "../../utils/formSubmission";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hasInvested: '',
    investmentTypes: [] as string[],
    investmentTimeline: '',
    investmentAmount: '',
    investmentGoal: '',
    liquidityImportance: '',
    preferredRegions: [] as string[],
    projectType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'investmentTypes' || name === 'preferredRegions') {
        setFormData((prev: any) => ({
          ...prev,
          [name]: checked 
            ? [...prev[name as keyof typeof prev] as string[], value]
            : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        }));
      }
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registrationData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: '', // Not collected in registration form
        investmentExperience: formData.hasInvested,
        investmentTypes: formData.investmentTypes,
        investmentTimeline: formData.investmentTimeline,
        investmentAmount: formData.investmentAmount,
        investmentGoal: formData.investmentGoal,
        liquidityImportance: formData.liquidityImportance,
        preferredRegions: formData.preferredRegions,
        projectType: formData.projectType,
        additionalInfo: ''
      };

      const result = await submitRegistrationForm(registrationData);
      showFormMessage(result);
      
      if (result.result === 'success') {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          hasInvested: '',
          investmentTypes: [],
          investmentTimeline: '',
          investmentAmount: '',
          investmentGoal: '',
          liquidityImportance: '',
          preferredRegions: [],
          projectType: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('❌ שגיאה בשליחת הטופס. אנא נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950" dir="rtl">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <Logo className="text-white" size="md" />
              </Link>
            </div>
            <div className="flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-white/80 hover:text-white px-6 py-3 text-lg font-luxury-accent transition-all duration-300 hover:bg-red-900/20 hover:border-red-900/30 border border-transparent">
                חזרה לעמוד הבית
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-luxury-display">
              הצטרפות ל-Amido Group
            </h1>
            <div className="w-32 h-1 mx-auto mb-8" style={{
              background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
            }}></div>
            <div className="bg-slate-800/50 backdrop-blur-sm shadow-2xl border border-white/20 p-12">
              <p className="text-xl text-white leading-relaxed mb-6 font-luxury-body">
                ברוכים הבאים ל - amido group.
              </p>
              <p className="text-xl text-white leading-relaxed mb-6 font-luxury-body">
                אנחנו שמחים על ההזדמנות להכיר אותך קצת יותר. השאלון נועד לעזור לנו להבין את הצרכים, ההעדפות והחזון האישי שלך כמשקיע- כדי שנוכל להתאים עבורך את ההזדמנויות המדויקות והנכונות ביותר.
              </p>
              <p className="text-xl text-white leading-relaxed font-luxury-body">
                מטרתנו היא לבנות קהילה חזקה של אנשים שחושבים קדימה, פועלים באמון ויוצרים יחד ערך אמיתי.
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm shadow-2xl border border-white/20 p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Personal Information Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                  פרטים אישיים
                </h2>
                <div className="w-24 h-1 mb-8" style={{
                  background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
                }}></div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                      שם פרטי *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                      placeholder="הכנס את שמך הפרטי"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                      שם משפחה *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                      placeholder="הכנס את שם המשפחה"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                      אימייל *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                      placeholder="הכנס את מספר הטלפון שלך"
                    />
                  </div>
                </div>
              </div>

              {/* Investment Experience Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                  ניסיון השקעות
                </h2>
                <div className="w-24 h-1 mb-8" style={{
                  background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
                }}></div>
                
                <div>
                  <label className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    האם השקעת בעבר בנדל״ן? *
                  </label>
                  <div className="flex space-x-6 space-x-reverse">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasInvested"
                        value="yes"
                        checked={formData.hasInvested === 'yes'}
                        onChange={handleInputChange}
                        className="ml-2 text-red-900 focus:ring-red-900"
                      />
                      <span className="text-white">כן</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasInvested"
                        value="no"
                        checked={formData.hasInvested === 'no'}
                        onChange={handleInputChange}
                        className="ml-2 text-red-900 focus:ring-red-900"
                      />
                      <span className="text-white">לא</span>
                    </label>
                  </div>
                </div>

                {formData.hasInvested === 'yes' && (
                  <div className="mt-6">
                    <label className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                      באילו סוגי עסקאות השקעת?
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'דירה להשקעה בישראל',
                        'נדל״ן בחול',
                        'קבוצת רכישה',
                        'אחר'
                      ].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            name="investmentTypes"
                            value={type}
                            checked={formData.investmentTypes.includes(type)}
                            onChange={handleInputChange}
                            className="ml-2 text-red-900 focus:ring-red-900"
                          />
                          <span className="text-white">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Investment Preferences Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                  העדפות השקעה
                </h2>
                <div className="w-24 h-1 mb-8" style={{
                  background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
                }}></div>
                
                <div>
                  <label htmlFor="investmentTimeline" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    מהו טווח ההשקעה הרצוי? *
                  </label>
                  <select
                    id="investmentTimeline"
                    name="investmentTimeline"
                    required
                    value={formData.investmentTimeline}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                  >
                    <option value="">בחר טווח השקעה</option>
                    <option value="short">קצר טווח (עד שנתיים)</option>
                    <option value="medium">בינוני טווח (בין 2-5 שנים)</option>
                    <option value="long">ארוך טווח (מעל 5 שנים)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="investmentAmount" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    מהו גובה ההשקעה הרצוי? *
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    required
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                  >
                    <option value="">בחר גובה השקעה</option>
                    <option value="250k">250,000 ש״ח</option>
                    <option value="500k">500,000 ש״ח</option>
                    <option value="1m">1,000,000 ש״ח</option>
                    <option value="1m+">מעל מליון ש״ח</option>
                  </select>
                </div>
              </div>

              {/* Investment Goals Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                  מטרות השקעה
                </h2>
                <div className="w-24 h-1 mb-8" style={{
                  background: 'linear-gradient(to right, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)'
                }}></div>
                
                <div>
                  <label htmlFor="investmentGoal" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    מה המטרה המרכזית שלך בהשקעה? *
                  </label>
                  <select
                    id="investmentGoal"
                    name="investmentGoal"
                    required
                    value={formData.investmentGoal}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                  >
                    <option value="">בחר מטרת השקעה</option>
                    <option value="income">תשואה שוטפת</option>
                    <option value="appreciation">עלייה בערך</option>
                    <option value="hedge">גידור סיכון</option>
                    <option value="security">שקט וביטחון לטווח ארוך</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="liquidityImportance" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    עד כמה חשובה לך נזילות ההשקעה? *
                  </label>
                  <select
                    id="liquidityImportance"
                    name="liquidityImportance"
                    required
                    value={formData.liquidityImportance}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                  >
                    <option value="">בחר רמת נזילות</option>
                    <option value="high">חשובה מאוד</option>
                    <option value="medium">בינונית</option>
                    <option value="low">לא חשובה</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    באילו איזורים בארץ היית מעוניין שנבחן פרוייקטים?
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['מרכז', 'צפון', 'דרום', 'אין העדפה'].map((region) => (
                      <label key={region} className="flex items-center">
                        <input
                          type="checkbox"
                          name="preferredRegions"
                          value={region}
                          checked={formData.preferredRegions.includes(region)}
                          onChange={handleInputChange}
                          className="ml-2 text-red-900 focus:ring-red-900"
                        />
                        <span className="text-white">{region}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    איזה סוג פרויקט מדבר אליך יותר? *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                  >
                    <option value="">בחר סוג פרויקט</option>
                    <option value="luxury">פרוייקט יוקרתי - דגש על איכות, מיקום מרכזי, מותג חזק וסטנדרט גבוה</option>
                    <option value="standard">פרוייקט סטנדרטי - יציבות, ביקוש גבוה, מחיר נגיש</option>
                    <option value="seaside">פרוייקט ליד הים - נכס עם ערך מוסף ויתרון לוקיישן</option>
                    <option value="early">פרוייקט יזמי בשלב מוקדם - כניסה לפני כולם בשלב הראשוני עם פוטנציאל עליית ערך משמעותי לאורך זמן</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-red-900 to-red-950 text-white px-16 py-6 text-xl font-luxury-accent hover:from-red-950 hover:to-red-900 transition-all duration-300 shadow-2xl shadow-red-900/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'שלח טופס הרשמה'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}