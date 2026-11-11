export interface RouteSEOConfig {
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  h1: {
    en: string;
    ar: string;
  };
  keywords: {
    en: string[];
    ar: string[];
  };
  noIndex?: boolean;
}

export const SEO_CONFIG: Record<string, RouteSEOConfig> = {
  '/': {
    title: {
      en: 'FUDIYO Frozen Food UAE | Kerala Parotta, Snacks & Fruit Pulp Supplier',
      ar: 'فوديو للأغذية المجمدة الإمارات | مورد باراتا كيرالا ولب الفواكه',
    },
    description: {
      en: 'FUDIYO™ by Eranad Exports: Authentic Kerala Malabar parotta, snacks, fresh-cut vegetables, instant gravy mixes, halal chicken & 100% natural fruit pulp in UAE.',
      ar: 'أغذية فوديو™ من إراناد إكسبورتس: باراتا مالابار الكيرالية، وجبات خفيفة، خضار مقطعة، خلطات كاري، دجاج حلال ولب فواكه طبيعي 100% بالإمارات.',
    },
    h1: {
      en: "Authentic Kerala Frozen Foods & Malabar Parotta for the UAE",
      ar: 'أشهى الأغذية الكيرالية المجمدة وباراتا مالابار في دولة الإمارات',
    },
    keywords: {
      en: [
        'frozen food supplier UAE',
        'frozen Kerala parotta Dubai',
        'Indian frozen food wholesale UAE',
        'halal frozen chicken Dubai',
        'frozen fruit pulp supplier UAE',
        'Malabar parotta UAE',
        'Kerala snacks frozen UAE',
      ],
      ar: [
        'مورد أغذية مجمدة في الإمارات',
        'باراتا كيرالا مجمدة دبي',
        'لب فواكه مجمد الإمارات',
        'دجاج مجمد حلال دبي',
        'أطعمة هندية مجمدة بالجملة',
      ],
    },
  },
  '/about': {
    title: {
      en: 'About FUDIYO™ & Eranad Exports | Kerala Heritage Frozen Foods',
      ar: 'عن فوديو™ وإراناد إكسبورتس | أصالة المطبخ الكيرالي المجمد',
    },
    description: {
      en: 'Learn about FUDIYO Foods & Eranad Exports Pvt Ltd (CIN: U47590KL2024PTC090591). Bringing authentic Kerala flavours, hygienic IQF processing & export excellence to UAE.',
      ar: 'تعرف على فوديو وشركة إراناد إكسبورتس (CIN: U47590KL2024PTC090591). نقدم نكهات كيرالا الأصيلة بأحدث تقنيات التجميد والتصدير إلى الإمارات.',
    },
    h1: {
      en: 'Bringing Authentic Taste Closer to Home Worldwide',
      ar: 'نقدم المذاق الكيرالي الأصيل إلى كل مائدة حول العالم',
    },
    keywords: {
      en: ['Eranad Exports Pvt Ltd', 'FUDIYO brand', 'Kerala food exporter India', 'FSSAI certified exporter'],
      ar: ['شركة إراناد إكسبورتس', 'علامة فوديو', 'مصدر أغذية كيرالا', 'أغذية هندية معتمدة'],
    },
  },
  '/products': {
    title: {
      en: 'Frozen Food Products Hub UAE | Parotta, Curries & Fruit Pulp',
      ar: 'كتالوج المنتجات المجمدة الإمارات | باراتا، كاري ولب الفواكه',
    },
    description: {
      en: 'Explore over 45 authentic FUDIYO frozen products: flaky Malabar parotta, steamed puttu & idli, tea-time snacks, fresh vegetables, gravies, and 100% natural fruit pulps.',
      ar: 'تصفح أكثر من 45 منتجاً مجمداً من فوديو: باراتا مالابار، بوتو، إدلي، مقبلات شاي كيرالا، خضار طازجة مقطعة، ولب فواكه طبيعي 100%.',
    },
    h1: {
      en: 'Complete FUDIYO International Product Catalogue',
      ar: 'كتالوج منتجات فوديو الدولية الكامل للأغذية المجمدة',
    },
    keywords: {
      en: ['frozen food catalogue UAE', 'buy Kerala food Dubai', 'frozen food wholesale list', 'FUDIYO products'],
      ar: ['كتالوج أغذية مجمدة الإمارات', 'شراء أطعمة كيرالا دبي', 'قائمة الجملة للمنتجات المجمدة'],
    },
  },
  '/frozen-food-supplier-uae': {
    title: {
      en: 'Frozen Food Supplier UAE | B2B Wholesale Dubai & Abu Dhabi',
      ar: 'مورد أغذية مجمدة في الإمارات | جملة وتوزيع دبي وأبوظبي',
    },
    description: {
      en: 'Premier frozen food supplier in the UAE. Reliable -18°C cold-chain supply for supermarkets, hotels, cloud kitchens, and caterers across Dubai, Abu Dhabi, and Sharjah.',
      ar: 'المورد الرائد للأغذية المجمدة في دولة الإمارات. إمداد مبرد موثوق بدرجة -18 مئوية للسوبرماركت والفنادق والمطاعم في دبي وأبوظبي والشارقة.',
    },
    h1: {
      en: 'Leading B2B Frozen Food Supplier & Distributor Across the UAE',
      ar: 'المورد والموزع الرائد للأغذية المجمدة بالجملة في كافة إمارات الدولة',
    },
    keywords: {
      en: ['frozen food supplier UAE', 'Indian frozen food wholesale Dubai', 'frozen food distributor Abu Dhabi', 'HoReCa frozen food Dubai'],
      ar: ['مورد أغذية مجمدة في الإمارات', 'أطعمة هندية مجمدة بالجملة دبي', 'موزع أغذية مجمدة أبوظبي'],
    },
  },
  '/frozen-kerala-parotta-dubai': {
    title: {
      en: 'Frozen Kerala Parotta Dubai | Wholesale Malabar Flatbread UAE',
      ar: 'باراتا كيرالا مجمدة دبي | خبز مالابار المورق بالجملة الإمارات',
    },
    description: {
      en: 'Source authentic frozen Kerala Malabar parotta in Dubai. Multi-layered, flaky, heat-and-eat in 2 minutes. Bulk supply for supermarkets, cafeterias, and restaurants.',
      ar: 'احصل على باراتا مالابار الكيرالية الأصلية في دبي. طبقات مورقة مقرمشة تسخن في دقيقتين. توريد جملة للسوبرماركت والكافتيريات والمطاعم.',
    },
    h1: {
      en: 'Authentic Frozen Kerala Malabar Parotta Wholesale in Dubai',
      ar: 'توريد خبز باراتا مالابار الكيرالي المورق بالجملة في دبي',
    },
    keywords: {
      en: ['frozen Kerala parotta Dubai', 'Malabar parotta UAE', 'buy frozen parotta online UAE', 'layered flatbread Dubai'],
      ar: ['باراتا كيرالا مجمدة دبي', 'خبز باراتا مالابار الإمارات', 'شراء باراتا مجمدة دبي'],
    },
  },
  '/halal-frozen-chicken-uae': {
    title: {
      en: 'Halal Frozen Chicken Supplier Dubai & UAE | A-Grade Poultry',
      ar: 'مورد دجاج مجمد حلال دبي والإمارات | دواجن درجة أولى',
    },
    description: {
      en: 'Certified 100% Halal whole griller chicken, chicken legs, skinless breast fillets, and samosa pastry sheets. Reliable UAE wholesale supply.',
      ar: 'دجاج شواء كامل حلال معتمد، صدور دجاج وأفخاذ كاملة مع رقائق السمبوسة. توريد مبرد موثوق بالجملة في الإمارات.',
    },
    h1: {
      en: 'Certified Halal Frozen Poultry & Samosa Pastry Supplier UAE',
      ar: 'مورد دواجن مجمدة معتمدة حلال ورقائق معجنات السمبوسة في الإمارات',
    },
    keywords: {
      en: ['halal frozen chicken supplier Dubai', 'halal griller chicken UAE', 'frozen chicken breast Dubai', 'samosa pastry sheets UAE'],
      ar: ['دجاج مجمد حلال دبي', 'مورد دجاج شواء حلال الإمارات', 'رقائق سمبوسة الإمارات'],
    },
  },
  '/fruit-pulp-supplier-uae': {
    title: {
      en: 'Frozen Fruit Pulp Supplier UAE | 100% Natural Alphonso & Guava',
      ar: 'مورد لب فواكه مجمد الإمارات | مانجو ألفونسو وجوافة طبيعية 100%',
    },
    description: {
      en: 'Wholesale 100% natural frozen fruit pulp in Dubai: Alphonso Mango, Tender Coconut, White & Pink Guava, Custard Apple, Chickoo. Zero added sugar or preservatives.',
      ar: 'توريد لب فواكه طبيعي مجمد 100% في دبي: مانجو ألفونسو، لحم جوز الهند، جوافة بيضاء ووردية، وتفاح القشطة بدون سكر مضاف أو مواد حافظة.',
    },
    h1: {
      en: '100% Natural Frozen Fruit Pulp Wholesale Supplier in the UAE',
      ar: 'المورد المعتمد للب الفواكه الطبيعي المجمد 100% بالجملة في الإمارات',
    },
    keywords: {
      en: ['frozen fruit pulp supplier UAE', 'Alphonso mango pulp UAE', 'tender coconut pulp Dubai', 'natural fruit purees GCC'],
      ar: ['لب فواكه مجمد الإمارات', 'لب مانجو ألفونسو الإمارات', 'لب جوز هند طري دبي'],
    },
  },
  '/wholesale-distributor-enquiry': {
    title: {
      en: 'Wholesale & Distributor Enquiry UAE | Request Quote FUDIYO',
      ar: 'طلب توريد وتوزيع بالجملة في الإمارات | طلب تسعيرة فوديو',
    },
    description: {
      en: 'Partner with FUDIYO & Eranad Exports. Request wholesale pricing, pallet specifications, and distributor terms for supermarkets, caterers, and food businesses.',
      ar: 'كن شريكاً وموزعاً لمنتجات فوديو وإراناد إكسبورتس. اطلب قائمة أسعار الجملة ومواصفات الطبالي المبردة لمتاجرك ومطاعمك في الإمارات.',
    },
    h1: {
      en: 'Wholesale Distribution & Commercial Enquiry for the UAE & GCC',
      ar: 'طلب التوزيع التجاري والتوريد بالجملة في الإمارات ودول الخليج',
    },
    keywords: {
      en: ['frozen food distributor enquiry', 'wholesale food quote Dubai', 'import Indian food UAE', 'B2B food contract'],
      ar: ['طلب توزيع أغذية مجمدة', 'تسعيرة أغذية بالجملة دبي', 'عقود توريد مطاعم الإمارات'],
    },
  },
  '/private-label-export': {
    title: {
      en: 'Private Label & White Label Frozen Foods | Eranad Exports',
      ar: 'تصنيع العلامات الخاصة والتصدير | إراناد إكسبورتس',
    },
    description: {
      en: 'Contract manufacturing and private label frozen food services for GCC supermarket chains. Custom recipes, bilingual packaging, and reefer container shipments.',
      ar: 'خدمات التصنيع التعاقدي والعلامات التجارية الخاصة لسلاسل السوبرماركت بالخليج. وصفات مخصصة وتغليف ثنائي اللغة وشحن بحري مبرد.',
    },
    h1: {
      en: 'Private Label & Contract Food Manufacturing for GCC Brands',
      ar: 'خدمات تصنيع العلامات الخاصة وتصدير الأغذية لأسواق الخليج',
    },
    keywords: {
      en: ['private label frozen food GCC', 'white label parotta manufacturer', 'OEM food exporter India', 'contract food packing'],
      ar: ['تصنيع علامة خاصة أغذية مجمدة', 'مصنع باراتا تعاقدي', 'تصدير أغذية بعلامة المشتري'],
    },
  },
  '/quality-certifications': {
    title: {
      en: 'Quality & Food Safety Certifications | FSSAI, APEDA, Halal',
      ar: 'شهادات الجودة وسلامة الغذاء | ترخيص FSSAI، APEDA والحلال',
    },
    description: {
      en: 'Verified food safety credentials of Eranad Exports Pvt Ltd (CIN: U47590KL2024PTC090591, FSSAI: 11215332000549), APEDA export registration, and 100% Halal certification.',
      ar: 'شهادات واعتمادات سلامة الغذاء الرسمية لشركة إراناد إكسبورتس: ترخيص FSSAI، تسجيل APEDA، شهادات الحلال المعتمدة، وتدقيق الجودة التام.',
    },
    h1: {
      en: 'International Quality Standards & Food Safety Certifications',
      ar: 'المعايير الدولية للجودة وشهادات سلامة الغذاء الرسمية',
    },
    keywords: {
      en: ['FSSAI 11215332000549', 'APEDA registered exporter', 'Halal certified frozen food', 'Dubai Municipality compliant'],
      ar: ['ترخيص هيئة سلامة الغذاء', 'مصدر معتمد رسمياً', 'أغذية حلال معتمدة', 'مطابق لمواصفات الإمارات'],
    },
  },
  '/blog': {
    title: {
      en: 'FUDIYO Food Blog | Kerala Culinary Insights & UAE B2B Trends',
      ar: 'مدونة فوديو للأغذية | أسرار الطهي الكيرالي واتجاهات السوق الإماراتي',
    },
    description: {
      en: 'In-depth culinary guides, commercial cloud kitchen tips, Halal compliance insights, and cooking secrets for authentic Kerala frozen foods.',
      ar: 'مقالات متخصصة في فنون الطهي الكيرالي، إدارة المطابخ السحابية، معايير الذبح الحلال، وأسرار تقديم الأطباق التراثية.',
    },
    h1: {
      en: 'FUDIYO Culinary Blog & Foodservice Intelligence Hub',
      ar: 'مدونة فوديو للمعلومات الغذائية وأسرار فنون الطهي الكيرالي',
    },
    keywords: {
      en: ['Kerala food blog UAE', 'frozen parotta cooking tips', 'cloud kitchen food supply', 'Dubai restaurant trends'],
      ar: ['مدونة طعام كيرالا', 'طريقة طهي الباراتا المجمدة', 'توريد مطاعم دبي'],
    },
  },
  '/faq': {
    title: {
      en: 'Frequently Asked Questions | FUDIYO Frozen Foods UAE',
      ar: 'الأسئلة الشائعة | فوديو للأغذية المجمدة الإمارات',
    },
    description: {
      en: 'Answers to common questions regarding FUDIYO product cooking instructions, Halal certifications, wholesale MOQs, reefer logistics, and shelf-life.',
      ar: 'إجابات شاملة لجميع التساؤلات حول طهي منتجات فوديو، شهادات الحلال، الحد الأدنى للطلب، سلاسل التبريد والصلاحية.',
    },
    h1: {
      en: 'Frequently Asked Questions (FAQ)',
      ar: 'الأسئلة المتكررة والشائعة',
    },
    keywords: {
      en: ['frozen food FAQ', 'how to cook parotta', 'FUDIYO minimum order', 'halal certification FAQ'],
      ar: ['أسئلة الأغذية المجمدة', 'طريقة طهي الباراتا', 'حد الطلب الأدنى فوديو'],
    },
  },
  '/contact': {
    title: {
      en: 'Contact FUDIYO UAE & Eranad Exports | Dubai & Kerala Offices',
      ar: 'اتصل بفوديو الإمارات وإراناد إكسبورتس | مكاتب دبي وكيرالا',
    },
    description: {
      en: 'Get in touch with FUDIYO Foods. Head office in Kerala (India) and regional UAE cold-chain distribution center in Dubai. Phone, WhatsApp, email & location map.',
      ar: 'تواصل مع فوديو للأغذية. المقر الرئيسي في كيرالا ومستودعات التوزيع المبردة في دبي. أرقام الهاتف، واتساب، البريد وخريطة الموقع.',
    },
    h1: {
      en: 'Contact Our Regional & Global Distribution Teams',
      ar: 'تواصل مع فرق التوزيع الإقليمي والدولي في الإمارات والهند',
    },
    keywords: {
      en: ['contact FUDIYO Dubai', 'Eranad Exports phone', 'frozen food distributor contact', 'Kerala food wholesale enquiry'],
      ar: ['اتصال فوديو دبي', 'هاتف إراناد إكسبورتس', 'موزع أغذية مجمدة الإمارات'],
    },
  },
  '/privacy-policy': {
    title: {
      en: 'Privacy Policy | FUDIYO Foods & Eranad Exports UAE',
      ar: 'سياسة الخصوصية | أطعمة فوديو وإراناد إكسبورتس الإمارات',
    },
    description: {
      en: 'Privacy policy compliant with UAE Federal Decree-Law No. 45/2021 regarding personal data protection (PDPL). Learn how your business inquiry data is secured.',
      ar: 'سياسة الخصوصية المتوافقة مع المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية في دولة الإمارات.',
    },
    h1: {
      en: 'Privacy Policy & Data Protection (UAE PDPL Compliant)',
      ar: 'سياسة الخصوصية وحماية البيانات الشخصية (وفق قوانين الإمارات)',
    },
    keywords: {
      en: ['privacy policy', 'UAE PDPL', 'data protection'],
      ar: ['سياسة الخصوصية', 'حماية البيانات الإمارات'],
    },
  },
  '/terms': {
    title: {
      en: 'Terms & Conditions | FUDIYO Foods Commercial Supply',
      ar: 'الشروط والأحكام | توريد أغذية فوديو التجارية',
    },
    description: {
      en: 'Terms and conditions governing website use, wholesale quotations, reefer delivery, and export orders with Eranad Exports Pvt Ltd.',
      ar: 'الشروط والأحكام المنظمة لاستخدام الموقع وطلبات عروض أسعار الجملة والتوريد المبرد مع شركة إراناد إكسبورتس.',
    },
    h1: {
      en: 'Terms & Conditions of Commercial Supply',
      ar: 'الشروط والأحكام العامة للتوريد والتعامل التجاري',
    },
    keywords: {
      en: ['terms of supply', 'wholesale terms', 'Eranad Exports conditions'],
      ar: ['شروط التوريد', 'أحكام التجارة بالجملة'],
    },
  },
  '/thank-you': {
    title: {
      en: 'Enquiry Received | Thank You | FUDIYO Foods UAE',
      ar: 'تم استلام طلبك | شكراً لك | فوديو للأغذية الإمارات',
    },
    description: {
      en: 'Your commercial inquiry has been received. Our Dubai wholesale representative will contact you with wholesale pricing and sample details within 24 hours.',
      ar: 'تم استلام طلبك التجاري بنجاح. سيتواصل معك ممثل التوزيع في دبي خلال 24 ساعة.',
    },
    h1: {
      en: 'Thank You! Your Wholesale Enquiry Has Been Received',
      ar: 'شكراً لك! تم استلام طلب عرض الأسعار بنجاح',
    },
    keywords: {
      en: ['thank you', 'quote received'],
      ar: ['شكراً لك'],
    },
    noIndex: true,
  },
};
