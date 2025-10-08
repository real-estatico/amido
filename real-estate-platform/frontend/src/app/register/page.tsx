"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logo";

export default function Register() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    
    // Investment Experience
    hasInvestedBefore: "",
    investmentTypes: [],
    otherInvestmentType: "",
    
    // Investment Preferences
    investmentTimeline: "",
    investmentAmount: "",
    
    // Investment Goals & Preferences
    investmentGoal: "",
    liquidityImportance: "",
    preferredRegions: [],
    projectType: "",
    
    // Additional Information
    additionalInfo: "",
    howDidYouHear: "",
    expectations: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const fieldName = name.replace('[]', '');
      setFormData(prev => ({
        ...prev,
        [fieldName]: checked 
          ? [...(prev[fieldName] as string[]), value]
          : (prev[fieldName] as string[]).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to backend
    console.log("Form data:", formData);
    alert("תודה על ההרשמה המפורטת! נחזור אליך בהקדם עם הזדמנויות מותאמות אישית.");
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
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
                    placeholder="your@email.com"
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
                    placeholder="050-1234567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    גיל
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                  >
                    <option value="">בחר גיל</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56-65">56-65</option>
                    <option value="65+">65+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-lg font-medium text-white mb-4 font-luxury-accent">
                    עיר מגורים
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-700/50 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all duration-300 font-luxury-body"
                    placeholder="תל אביב"
                  />
                </div>
              </div>
            </div>

            {/* Investment Experience Section */}
            <div className="space-y-6 mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                ניסיון השקעות
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Investment Experience Question */}
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    האם השקעת בעבר בנדל״ן? <span className="text-red-400">*</span>
                  </label>
                  <div className="flex space-x-6 space-x-reverse">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasInvestedBefore"
                        value="yes"
                        checked={formData.hasInvestedBefore === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">כן</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasInvestedBefore"
                        value="no"
                        checked={formData.hasInvestedBefore === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">לא</span>
                    </label>
                  </div>
                </div>

                {/* Investment Types - Always present but content changes */}
                <div>
                  {formData.hasInvestedBefore === "yes" ? (
                    <>
                      <label className="block text-sm font-medium text-white mb-4">
                        באילו סוגי עסקאות השקעת?
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="investmentTypes"
                            value="apartment_israel"
                            checked={formData.investmentTypes.includes("apartment_israel")}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                          />
                          <span className="mr-3 text-white">דירה להשקעה בישראל</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="investmentTypes"
                            value="real_estate_abroad"
                            checked={formData.investmentTypes.includes("real_estate_abroad")}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                          />
                          <span className="mr-3 text-white">נדל״ן בחול</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="investmentTypes"
                            value="purchase_group"
                            checked={formData.investmentTypes.includes("purchase_group")}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                          />
                          <span className="mr-3 text-white">קבוצת רכישה</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="investmentTypes"
                            value="other"
                            checked={formData.investmentTypes.includes("other")}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                          />
                          <span className="mr-3 text-white">אחר</span>
                        </label>
                        {formData.investmentTypes.includes("other") && (
                          <div className="mr-8">
                            <input
                              type="text"
                              name="otherInvestmentType"
                              value={formData.otherInvestmentType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                              placeholder="פרט את סוג ההשקעה"
                            />
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="h-32 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">בחר "כן" כדי לראות אפשרויות השקעה</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Investment Preferences Section */}
            <div className="space-y-6 mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                העדפות השקעה
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    מהו טווח ההשקעה הרצוי? <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentTimeline"
                        value="short"
                        checked={formData.investmentTimeline === "short"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">קצר טווח (עד שנתיים)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentTimeline"
                        value="medium"
                        checked={formData.investmentTimeline === "medium"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">בינוני טווח (בין 2-5 שנים)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentTimeline"
                        value="long"
                        checked={formData.investmentTimeline === "long"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">ארוך טווח (מעל 5 שנים)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    מהו גובה ההשקעה הרצוי? <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentAmount"
                        value="250k"
                        checked={formData.investmentAmount === "250k"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">250,000 ש״ח</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentAmount"
                        value="500k-1m"
                        checked={formData.investmentAmount === "500k-1m"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">500,000 - 1,000,000 ש״ח</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentAmount"
                        value="1m+"
                        checked={formData.investmentAmount === "1m+"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">מעל מליון ש״ח</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Goals & Preferences Section */}
            <div className="space-y-6 mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 font-luxury-display">
                מטרות והעדפות השקעה
              </h2>
              
              <div className="space-y-8">
                {/* Investment Goal */}
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    מה המטרה המרכזית שלך בהשקעה? <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentGoal"
                        value="current_yield"
                        checked={formData.investmentGoal === "current_yield"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">תשואה שוטפת</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentGoal"
                        value="value_appreciation"
                        checked={formData.investmentGoal === "value_appreciation"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">עליית ערך</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentGoal"
                        value="risk_hedging"
                        checked={formData.investmentGoal === "risk_hedging"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">גידור סיכון</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="investmentGoal"
                        value="long_term_security"
                        checked={formData.investmentGoal === "long_term_security"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">שקט וביטחון לטווח ארוך</span>
                    </label>
                  </div>
                </div>

                {/* Liquidity Importance */}
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    עד כמה חשובה לך נזילות ההשקעה (היכולת לצאת במהלך הדרך)? <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="liquidityImportance"
                        value="very_important"
                        checked={formData.liquidityImportance === "very_important"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">חשובה מאוד</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="liquidityImportance"
                        value="moderate"
                        checked={formData.liquidityImportance === "moderate"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">בינונית</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="liquidityImportance"
                        value="not_important"
                        checked={formData.liquidityImportance === "not_important"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">לא חשובה</span>
                    </label>
                  </div>
                </div>

                {/* Preferred Regions */}
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    באילו איזורים בארץ היית מעוניין שנבחן פרוייקטים?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="preferredRegions"
                        value="center"
                        checked={formData.preferredRegions.includes("center")}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">מרכז</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="preferredRegions"
                        value="north"
                        checked={formData.preferredRegions.includes("north")}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">צפון</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="preferredRegions"
                        value="south"
                        checked={formData.preferredRegions.includes("south")}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">דרום</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="preferredRegions"
                        value="no_preference"
                        checked={formData.preferredRegions.includes("no_preference")}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500"
                      />
                      <span className="mr-3 text-white">אין העדפה</span>
                    </label>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    איזה סוג פרויקט מדבר אליך יותר? <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="projectType"
                        value="luxury"
                        checked={formData.projectType === "luxury"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500 mt-1"
                      />
                      <span className="mr-3 text-white">פרוייקט יוקרתי - דגש על איכות, מיקום מרכזי, מותג חזק וסטנדרט גבוה</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="projectType"
                        value="standard"
                        checked={formData.projectType === "standard"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500 mt-1"
                      />
                      <span className="mr-3 text-white">פרוייקט סטנדרטי - יציבות, ביקוש גבוה, מחיר נגיש</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="projectType"
                        value="seaside"
                        checked={formData.projectType === "seaside"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500 mt-1"
                      />
                      <span className="mr-3 text-white">פרוייקט ליד הים - נכס עם ערך מוסף ויתרון לוקיישן</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="projectType"
                        value="early_stage"
                        checked={formData.projectType === "early_stage"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500 mt-1"
                      />
                      <span className="mr-3 text-white">פרוייקט יזמי בשלב מוקדם - כניסה לפני כולם בשלב הראשוני עם פוטנציאל עליית ערך משמעותי לאורך זמן</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-red-900 to-red-950 text-white px-16 py-6 text-xl font-luxury-accent hover:from-red-950 hover:to-red-900 transition-all duration-300 shadow-2xl shadow-red-900/25"
              >
                שלח טופס הרשמה
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
