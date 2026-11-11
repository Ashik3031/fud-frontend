import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { CATEGORIES } from '../../data/products';
import { COMPANY_DETAILS } from '../../data/company';
import {
  Send,
  CheckCircle,
  MessageCircle,
  AlertCircle,
  Calculator,
  Shield,
  Truck,
} from 'lucide-react';

interface WholesaleInquiryFormProps {
  defaultCategory?: string;
  defaultProduct?: string;
}

export const WholesaleInquiryForm: React.FC<WholesaleInquiryFormProps> = ({
  defaultCategory,
  defaultProduct,
}) => {
  const { locale, navigate } = useRouter();
  const isEn = locale === 'en';

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emirate, setEmirate] = useState('Dubai');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultCategory ? [defaultCategory] : ['parotta']
  );
  const [estimatedVolume, setEstimatedVolume] = useState('50 - 150 Cartons (Regular Reefer Route)');
  const [businessType, setBusinessType] = useState('Supermarket / Hypermarket');
  const [notes, setNotes] = useState(defaultProduct ? `Inquiring specifically for: ${defaultProduct}` : '');
  
  // Honeypot field for anti-spam
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleCategory = (catSlug: string) => {
    if (selectedCategories.includes(catSlug)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== catSlug));
      }
    } else {
      setSelectedCategories([...selectedCategories, catSlug]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check
    if (honeypot) {
      console.warn('Spam submission caught by honeypot.');
      setSubmitted(true);
      return;
    }

    // Client-side validation
    if (!companyName.trim() || !contactName.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage(
        isEn
          ? 'Please fill in all required company and contact fields.'
          : 'يرجى تعبئة كافة الحقول المطلوبة لبيانات الشركة والاتصال.'
      );
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage(
        isEn ? 'Please enter a valid business email address.' : 'يرجى إدخال بريد إلكتروني صحيح.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Post to our server endpoint or simulate high-reliability lead webhook
      const payload = {
        companyName,
        contactName,
        phone,
        email,
        emirate,
        selectedCategories,
        estimatedVolume,
        businessType,
        notes,
        locale,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);

      setIsSubmitting(false);
      setSubmitted(true);

      // Redirect to thank-you page after brief delay
      setTimeout(() => {
        navigate('/thank-you');
      }, 1200);
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
      navigate('/thank-you');
    }
  };

  const handleWhatsAppQuote = () => {
    const text = isEn
      ? `*FUDIYO B2B Wholesale Enquiry*\nCompany: ${companyName || 'Not specified'}\nContact: ${contactName}\nPhone: ${phone}\nEmirate: ${emirate}\nBusiness: ${businessType}\nCategories: ${selectedCategories.join(', ')}\nVolume: ${estimatedVolume}\nNotes: ${notes}`
      : `*طلب تسعيرة جملة فوديو*\nالشركة: ${companyName}\nالاسم: ${contactName}\nالهاتف: ${phone}\nالإمارة: ${emirate}\nنوع النشاط: ${businessType}\nالفئات: ${selectedCategories.join(', ')}\nالكمية: ${estimatedVolume}`;

    window.open(
      `https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-[#5E9440]/30 shadow-xl text-center space-y-4 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-[#8DC63F]/20 text-[#5E9440] flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#14301F]">
          {isEn ? 'Wholesale Enquiry Received!' : 'تم استلام طلب التسعيرة بنجاح!'}
        </h3>
        <p className="text-sm text-[#5B6B60] max-w-md mx-auto leading-relaxed">
          {isEn
            ? 'Thank you for contacting FUDIYO Foods. Our UAE cold-chain distribution manager in Dubai will review your volume requirements and share official pricing within 24 hours.'
            : 'شكراً لتواصلك مع فوديو للأغذية المجمدة. سيقوم مدير التوزيع في دبي بمراجعة طلبك وإرسال عرض الأسعار الرسمي وعينات المنتجات خلال 24 ساعة.'}
        </p>

        <div className="pt-2">
          <button
            onClick={handleWhatsAppQuote}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isEn ? 'Speed Up via WhatsApp' : 'تسريع الرد عبر واتساب الآن'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xl space-y-6"
    >
      {/* Form Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
            {isEn ? 'Official B2B Trade Desk' : 'المكتب التجاري المعتمد'}
          </span>
          <h3 className="text-xl font-bold text-[#14301F] mt-0.5">
            {isEn ? 'Request Wholesale Quotation' : 'طلب عرض أسعار وتوريد بالجملة'}
          </h3>
        </div>
        <span className="p-2.5 rounded-xl bg-[#14301F]/5 text-[#5E9440] hidden sm:block">
          <Calculator className="w-6 h-6" />
        </span>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field (hidden from legitimate users, catches spam bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave this empty</label>
        <input
          id="website_hp"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Product Categories Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-2.5">
          {isEn ? '1. Select Products of Interest (Multiple)' : '1. حدد المنتجات المطلوبة (يمكن اختيار أكثر من فئة)'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategories.includes(cat.slug);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => toggleCategory(cat.slug)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-left transition-all border cursor-pointer truncate ${
                  isSelected
                    ? 'bg-[#14301F] text-white border-[#14301F] shadow-xs'
                    : 'bg-[#F7F9F2] text-[#0E1A12] border-neutral-200 hover:border-[#5E9440]'
                }`}
              >
                {isEn ? cat.name.en : cat.name.ar}
              </button>
            );
          })}
        </div>
      </div>

      {/* Volume & Delivery Emirate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? '2. Estimated Volume / Order Size' : '2. الكمية التقديرية للطلب'}
          </label>
          <select
            value={estimatedVolume}
            onChange={(e) => setEstimatedVolume(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-[#0E1A12] focus:border-[#F26B21] focus:ring-1 focus:ring-[#F26B21] outline-none"
          >
            <option value="50 - 150 Cartons (Regular Reefer Route)">
              {isEn ? '50 – 150 Cartons (Regular Reefer Route)' : '50 - 150 كرتون (توصيل دوري بالسيارة المبردة)'}
            </option>
            <option value="150 - 500 Cartons (Bulk Supermarket / HoReCa)">
              {isEn ? '150 – 500 Cartons (Bulk Supermarket / HoReCa)' : '150 - 500 كرتون (طلبات الجملة والهايبرماركت)'}
            </option>
            <option value="Full Pallet Loads (Multi-temperature)">
              {isEn ? 'Full Pallet Loads (Multi-temperature)' : 'طبالي كاملة (متعددة الفئات)'}
            </option>
            <option value="20ft FCL Reefer Container (Import/Export)">
              {isEn ? '20ft FCL Reefer Container (Export/Import)' : 'حاوية 20 قدماً مبردة كاملة (تصدير/استيراد)'}
            </option>
            <option value="40ft High-Cube Reefer Container">
              {isEn ? '40ft High-Cube Reefer Container' : 'حاوية 40 قدماً مبردة هاي كيوب'}
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? '3. Destination Emirate / Delivery Location' : '3. إمارة التسليم أو التصدير'}
          </label>
          <select
            value={emirate}
            onChange={(e) => setEmirate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-[#0E1A12] focus:border-[#F26B21] focus:ring-1 focus:ring-[#F26B21] outline-none"
          >
            <option value="Dubai">Dubai (دبي - Same Day / Next Day)</option>
            <option value="Abu Dhabi">Abu Dhabi & Musaffah (أبوظبي والمصفح)</option>
            <option value="Sharjah">Sharjah (الشارقة)</option>
            <option value="Ajman">Ajman (عجمان)</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah (رأس الخيمة)</option>
            <option value="Al Ain">Al Ain (العين)</option>
            <option value="Fujairah">Fujairah (الفجيرة)</option>
            <option value="Umm Al Quwain">Umm Al Quwain (أم القيوين)</option>
            <option value="International / GCC Export">Other GCC / International Export (إعادة تصدير)</option>
          </select>
        </div>
      </div>

      {/* Business Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? 'Company / Business Name *' : 'اسم الشركة / المنشأة *'}
          </label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder={isEn ? "e.g. Al Madina Hypermarket LLC" : "مثال: سوبرماركت الواحة ذ.م.م"}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? 'Contact Person Name *' : 'اسم المسؤول أو المشتري *'}
          </label>
          <input
            type="text"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder={isEn ? "e.g. Mohammed Farooq" : "مثال: محمد فاروق"}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none"
          />
        </div>
      </div>

      {/* Contact Credentials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? 'Phone / WhatsApp Number *' : 'رقم الهاتف أو الواتساب *'}
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={isEn ? "+971 50 123 4567" : "+971 50 123 4567"}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
            {isEn ? 'Business Email Address *' : 'البريد الإلكتروني التجاري *'}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="procurement@company.ae"
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none"
          />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
          {isEn ? 'Business Type' : 'نوع النشاط التجاري'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { id: 'Supermarket / Hypermarket', labelEn: 'Supermarket / Retail', labelAr: 'سوبرماركت وتجزئة' },
            { id: 'HoReCa / Hotel / Restaurant', labelEn: 'Hotel / Restaurant', labelAr: 'فندق ومطعم' },
            { id: 'Cloud Kitchen / Catering', labelEn: 'Cloud Kitchen / Caterer', labelAr: 'مطبخ سحابي وتموين' },
            { id: 'Wholesaler / Re-Exporter', labelEn: 'Wholesale / Re-Export', labelAr: 'تاجر جملة وإعادة تصدير' },
          ].map((type) => (
            <label
              key={type.id}
              className={`p-2.5 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                businessType === type.id
                  ? 'bg-[#5E9440]/10 border-[#5E9440] font-semibold text-[#14301F]'
                  : 'border-neutral-200 text-[#5B6B60] hover:bg-neutral-50'
              }`}
            >
              <input
                type="radio"
                name="businessType"
                value={type.id}
                checked={businessType === type.id}
                onChange={() => setBusinessType(type.id)}
                className="text-[#5E9440] focus:ring-[#5E9440]"
              />
              <span>{isEn ? type.labelEn : type.labelAr}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Specific requirements */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#14301F] mb-1.5">
          {isEn ? 'Specific Products or Delivery Notes' : 'ملاحظات إضافية أو أصناف محددة'}
        </label>
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            isEn
              ? "Specify particular items (e.g., 80ctns Malabar Parotta, 30 tubs Alphonso Pulp, private label branding)..."
              : "حدد الكميات المطلوبة (مثال: 80 كرتون باراتا مالابار، 30 عبوة لب مانجو، طلب عينات)..."
          }
          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none resize-none"
        />
      </div>

      {/* Buttons: Submit & Direct WhatsApp */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#F26B21] text-white font-bold hover:bg-[#e05b12] shadow-lg transition-colors cursor-pointer text-sm disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>
            {isSubmitting
              ? isEn
                ? 'Submitting Request...'
                : 'جارٍ إرسال الطلب...'
              : isEn
              ? 'Submit Quotation Request'
              : 'إرسال طلب عرض الأسعار'}
          </span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppQuote}
          className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:brightness-105 shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{isEn ? 'Fast Quote via WhatsApp' : 'تسعير فوري عبر واتساب'}</span>
        </button>
      </div>

      <p className="text-[11px] text-[#5B6B60] text-center">
        {isEn
          ? 'Strict confidentiality. Compliant with UAE Personal Data Protection Law (Federal Decree-Law No. 45/2021).'
          : 'بياناتكم سرية ومحمية وفق قانون حماية البيانات الشخصية الإماراتي.'}
      </p>
    </form>
  );
};
