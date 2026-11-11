import { UAECityInfo } from '../types';

export const UAE_CITIES: UAECityInfo[] = [
  {
    id: 'dubai',
    name: {
      en: 'Dubai',
      ar: 'دبي',
    },
    coverageTag: {
      en: 'Central Reefer Logistics Hub (Same-Day / Next-Day Delivery)',
      ar: 'مركز التوزيع المبرد الرئيسي (توصيل في نفس اليوم / اليوم التالي)',
    },
    deliveryFrequency: {
      en: 'Daily refrigerated dispatch to supermarkets, hotels, cloud kitchens, and caterers.',
      ar: 'شحن يومي مبرد للسوبرماركت، الفنادق، المطابخ السحابية والمطاعم.',
    },
    hubLocation: {
      en: 'Al Quoz Industrial Area 4 & Dubai South Logistics Corridor',
      ar: 'منطقة القوز الصناعية 4 ومجمع دبي اللوجستي الجنوبي',
    },
    description: {
      en: 'FUDIYO supplies over 180 supermarkets, Indian groceries, and HoReCa partners across Karama, Bur Dubai, Deira, Al Nahda, Business Bay, and JLT. Our certified -18°C temperature-monitored refrigerated trucks guarantee unbroken cold-chain integrity from Port Jebel Ali to your freezer.',
      ar: 'توفر فوديو منتجاتها لأكثر من 180 سوبرماركت ومتجر تجزئة ومطاعم كبرى في الكرامة، بر دبي، ديرة، النهدة والخليج التجاري مع شاحنات مجهزة بحرارة -18 درجة مئوية.',
    },
    popularProducts: ['malabar-parotta', 'beef-fry', 'alphonso-mango', 'chemba-puttu', 'kozhukkatta'],
  },
  {
    id: 'abu-dhabi',
    name: {
      en: 'Abu Dhabi & Musaffah',
      ar: 'أبوظبي والمصفح',
    },
    coverageTag: {
      en: 'Major Institutional & Hypermarket Route (6 Days / Week)',
      ar: 'خط توزيع التموين والهايبرماركت الرئيسي (6 أيام أسبوعياً)',
    },
    deliveryFrequency: {
      en: '6 days per week scheduled delivery across Abu Dhabi city, Musaffah, and Khalifa City.',
      ar: 'توصيل م جدول 6 أيام في الأسبوع في مدينة أبوظبي، المصفح ومدينة خليفة.',
    },
    hubLocation: {
      en: 'Musaffah Industrial Sector M-14 & Mina Cold Chain Terminal',
      ar: 'منطقة المصفح الصناعية M-14 وميناء أبوظبي المبرد',
    },
    description: {
      en: 'High-volume wholesale supply tailored for industrial catering camps, hospital food services, luxury hotels, and premier hypermarkets. Dedicated bulk pallet fulfillment for 100% natural Alphonso mango pulp, Malabar parotta, and halal poultry.',
      ar: 'توريد جملة ضخم مخصص لشركات التموين الصناعي، الفنادق الفاخرة وكبرى سلاسل الهايبرماركت. تسليم طبالي مبردة لباراتا مالابار ولب المانجو والدجاج الحلال.',
    },
    popularProducts: ['malabar-parotta', 'chicken-griller', 'tapioca-drum-cuts', 'alphonso-mango', 'butter-chicken'],
  },
  {
    id: 'sharjah',
    name: {
      en: 'Sharjah',
      ar: 'الشارقة',
    },
    coverageTag: {
      en: 'Family Grocery & High-Density Retail Distribution (Daily)',
      ar: 'توزيع التجزئة والمتاجر العائلية اليومي',
    },
    deliveryFrequency: {
      en: 'Twice daily routes across Rolla, Muweilah, Al Majaz, and Industrial Areas 1–17.',
      ar: 'رحلتان يومياً تغطي الرولة، مويلح، المجاز والمناطق الصناعية 1-17.',
    },
    hubLocation: {
      en: 'Sharjah Industrial Area 13 Distribution Center',
      ar: 'مركز توزيع المنطقة الصناعية 13 بالشارقة',
    },
    description: {
      en: 'Serving the vibrant Kerala and South Asian families of Sharjah. High turnover of traditional breakfast packs (Puttu, Idiyappam, Idli) and tea-time snacks (Elayada, Sughiyaan, Pazham Pori) across independent neighborhood supermarkets.',
      ar: 'نلبي احتياجات مئات الآلاف من العائلات في الشارقة مع إقبال قياسي على وجبات الفطور الأصيلة مثل البوتو والإديابام ومقرمشات الشاي في البقالات ومتاجر التجزئة.',
    },
    popularProducts: ['chemba-puttu', 'banana-fry', 'elayada-jaggery', 'whole-wheat-parotta', 'sambar-mix'],
  },
  {
    id: 'ajman',
    name: {
      en: 'Ajman',
      ar: 'عجمان',
    },
    coverageTag: {
      en: 'Fast Regional Grocery & Café Delivery (4 Days / Week)',
      ar: 'توصيل سريع للمتاجر والمقاهي (4 أيام أسبوعياً)',
    },
    deliveryFrequency: {
      en: 'Tuesday, Thursday, Friday, and Sunday delivery runs.',
      ar: 'رحلات توصيل مبردة أيام الثلاثاء والخميس والجمعة والأحد.',
    },
    hubLocation: {
      en: 'Ajman New Industrial Area Hub',
      ar: 'مركز عجمان الصناعي الجديد',
    },
    description: {
      en: 'Prompt delivery to growing retail centers, cafeteria chains, and catering kitchens in Al Jurf, Al Rashidiya, and Nuaimiya. Flexible Minimum Order Quantities (MOQ) for medium-sized outlets.',
      ar: 'توصيل مرن وسريع لسلاسل الكافتيريا والمتاجر في الجرف، الراشدية والنعيمية مع حد أدنى ميسر للطلبات المتوسطة.',
    },
    popularProducts: ['malabar-parotta', 'kothu-parotta', 'uzhunnu-vada', 'tender-coconut', 'beef-fry'],
  },
  {
    id: 'rak',
    name: {
      en: 'Ras Al Khaimah',
      ar: 'رأس الخيمة',
    },
    coverageTag: {
      en: 'Northern Emirates Commercial & Resort Channel',
      ar: 'تغطية منتجعات ومتاجر الإمارات الشمالية',
    },
    deliveryFrequency: {
      en: 'Bi-weekly scheduled bulk temperature-controlled shipments.',
      ar: 'شحنات أسبوعية مجدولة مبردة بكميات تجارية.',
    },
    hubLocation: {
      en: 'Al Hamra & Nakheel Logistics Junction',
      ar: 'محور لوجستيات الحمراء والنخيل',
    },
    description: {
      en: 'Supplying leading beachfront resorts, dining facilities, and food markets across Ras Al Khaimah with premium 100% natural fruit pulps, crispy samosa sheets, and export-grade frozen vegetables.',
      ar: 'تزويد أفخم المنتجعات الشاطئية والمطاعم ومتاجر الأغذية في رأس الخيمة بأجود أنواع لب الفواكه الاستوائية ورقائق السمبوسة والخضار.',
    },
    popularProducts: ['alphonso-mango', 'pink-guava', 'samosa-patti-sheets', 'chicken-breasts', 'drumstick'],
  },
  {
    id: 'al-ain',
    name: {
      en: 'Al Ain',
      ar: 'العين',
    },
    coverageTag: {
      en: 'Eastern Region Cold-Chain Hub',
      ar: 'مركز التوزيع المبرد للمنطقة الشرقية',
    },
    deliveryFrequency: {
      en: '3 times per week direct reefer dispatch from Dubai hub.',
      ar: '3 رحلات أسبوعية مباشرة بشاحنات مبردة من مركز دبي.',
    },
    hubLocation: {
      en: 'Sanaiya Industrial Zone, Al Ain',
      ar: 'المنطقة الصناعية (الصناعية)، العين',
    },
    description: {
      en: 'Bringing authentic taste to families and university campuses in the Garden City of Al Ain. Comprehensive availability of traditional foods, frozen coconut, and instant Kerala curries.',
      ar: 'نقدم المذاق الأصيل لعائلات مدينة العين والجامعات والمطاعم مع توافر كامل لمنتجات الفطور وجوز الهند المبشور وإدامات كيرالا الشهية.',
    },
    popularProducts: ['grated-coconut', 'puttu-white', 'malabar-parotta', 'parippu-vada', 'tender-jackfruit-cutlet'],
  },
];
