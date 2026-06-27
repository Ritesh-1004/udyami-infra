"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "hi";

// Comprehensive Hindi dictionary
const dict: Record<string, string> = {
  // Header / Nav
  "Home": "होम",
  "Projects": "प्रोजेक्ट्स",
  "About": "हमारे बारे में",
  "Gallery": "गैलरी",
  "Contact": "संपर्क करें",
  "Enquire Now": "पूछताछ करें",

  // Hero
  "Est. by Umesh Daphal · Pune, Maharashtra": "उमेश दफाळ द्वारा स्थापित · पुणे, महाराष्ट्र",
  "Building Trust.": "विश्वास का निर्माण।",
  "Creating Landmarks.": "लैंडमार्क का निर्माण।",
  "Premium plots, flats & investment opportunities across Pune — backed by clear titles, transparent documentation, and two decades of disciplined development.":
    "पुणे भर में प्रीमियम प्लॉट, फ्लैट और निवेश के अवसर — स्पष्ट दस्तावेज़, पारदर्शी कागज़ी कार्रवाई और दो दशकों के अनुशासित विकास के साथ।",
  "Clear Title Guaranteed": "स्पष्ट टाइटल की गारंटी",
  "10+ Years Trusted": "10+ वर्षों का विश्वास",
  "3200+ Families": "3200+ परिवार",
  "served across Pune": "पुणे भर में सेवा प्राप्त",
  "Explore Projects": "प्रोजेक्ट्स देखें",
  "Book Site Visit": "साइट विज़िट बुक करें",
  "Scroll": "स्क्रॉल करें",
  "Search by area or project name...": "क्षेत्र या प्रोजेक्ट नाम से खोजें...",
  "Search": "खोजें",

  // Section headings
  "Ready to Move": "तुरंत रहने के लिए तैयार",
  "Landmarks Ready to Move In": "तुरंत रहने के लिए तैयार लैंडमार्क",
  "A curated selection of our completed, possession-ready plots and residences across Pune's high-growth corridors.":
    "पुणे के तेज़ी से बढ़ते इलाकों में हमारे पूर्ण और कब्ज़े के लिए तैयार प्लॉट व आवासों का चयन।",
  "Projects Possession-Ready Today": "प्रोजेक्ट्स आज ही कब्ज़े के लिए तैयार",
  "View All Projects": "सभी प्रोजेक्ट्स देखें",

  // Testimonials
  "Customer Reviews": "ग्राहक प्रतिक्रिया",
  "What Our Buyers Say": "हमारे ग्राहक क्या कहते हैं",
  "Verified feedback from families and investors who've built their futures with Udyami Infra Foundation.":
    "उद्यमी इंफ्रा फाउंडेशन के साथ अपना भविष्य बनाने वाले परिवारों और निवेशकों की सत्यापित प्रतिक्रिया।",
  "Verified Buyer": "सत्यापित खरीदार",

  // Stats
  "Acres Developed": "एकड़ विकसित",
  "Families Served": "परिवारों की सेवा",
  "Projects Completed": "प्रोजेक्ट्स पूर्ण",
  "Years of Trust": "वर्षों का विश्वास",

  // Why Choose Us
  "Why Udyami": "उद्यमी क्यों?",
  "Why Families Choose Udyami Infra": "परिवार उद्यमी इंफ्रा क्यों चुनते हैं",
  "Because trust is built long before a property is registered.": "क्योंकि विश्वास प्रॉपर्टी रजिस्ट्रेशन से बहुत पहले बनता है।",
  "Clear Titles": "स्पष्ट टाइटल",
  "Every plot and flat comes with verified 7/12 extracts, NA orders and RERA registration.":
    "हर प्लॉट और फ्लैट सत्यापित 7/12 उतारे, NA ऑर्डर और RERA पंजीकरण के साथ आता है।",
  "On-Time Possession": "समय पर कब्ज़ा",
  "We have never delayed a single handover. Your possession date is our commitment.":
    "हमने कभी कोई हस्तांतरण देरी से नहीं किया। आपकी कब्ज़े की तारीख हमारी प्रतिबद्धता है।",
  "Transparent Pricing": "पारदर्शी कीमत",
  "No hidden charges. The price you see at booking is exactly what you pay at registration.":
    "कोई छिपे हुए शुल्क नहीं। बुकिंग में जो कीमत देखते हैं, रजिस्ट्रेशन में वही देते हैं।",
  "Founder-Led Trust": "संस्थापक-नेतृत्व विश्वास",
  "Umesh Daphal personally oversees every project — from land title to final handover.":
    "उमेश दफाळ व्यक्तिगत रूप से हर प्रोजेक्ट की देखरेख करते हैं — भूमि टाइटल से लेकर अंतिम हस्तांतरण तक।",

  // Contact CTA
  "Ready When You Are": "जब आप तैयार हों",
  "Your Landmark Investment Starts With": "आपका लैंडमार्क निवेश यहाँ से शुरू होता है",
  "One Conversation.": "एक बातचीत से।",
  "Speak directly with our team — get site visit dates, pricing, and documentation clarity within 24 hours.":
    "हमारी टीम से सीधे बात करें — 24 घंटों के भीतर साइट विज़िट की तारीख़, कीमत और दस्तावेज़ संबंधी स्पष्टता पाएं।",
  "Talk to Us": "हमसे बात करें",

  // Footer
  "Navigate": "नेविगेट करें",
  "Properties": "प्रॉपर्टीज़",
  "Residential Plots": "आवासीय प्लॉट",
  "Premium Flats": "प्रीमियम फ्लैट",
  "Luxury Villas": "लग्ज़री विला",
  "Commercial Spaces": "कमर्शियल स्पेस",
  "Privacy Policy": "प्राइवेसी पॉलिसी",
  "Terms of Service": "नियम व शर्तें",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "RERA Registered Developer": "RERA पंजीकृत डेवलपर",

  // About page
  "Our Story": "हमारी कहानी",
  "Building Maharashtra, One Landmark at a Time": "महाराष्ट्र का निर्माण, एक लैंडमार्क एक बार में",
  "Our Foundation": "हमारी नींव",
  "Trusted Real Estate Since 2006": "2006 से विश्वसनीय रियल एस्टेट",
  "Meet The Founder": "संस्थापक से मिलें",
  "A Promise Kept by Its Founder": "संस्थापक द्वारा पूरा किया गया वादा",
  "Our Promise": "हमारा वादा",
  "What Sets Us Apart": "हम क्या अलग करते हैं",
  "On-Time Delivery": "समय पर डिलीवरी",
  "We have never delayed a possession date. Your schedule is our commitment.":
    "हमने कभी कब्ज़े की तारीख नहीं टाली। आपका शेड्यूल हमारी प्रतिबद्धता है।",
  "No hidden charges. What you see at booking is exactly what you pay at registration.":
    "कोई छिपे हुए शुल्क नहीं। बुकिंग में जो देखते हैं, रजिस्ट्रेशन में वही देते हैं।",
  "Every property comes with verified 7/12 extracts and NA orders. No disputes, ever.":
    "हर प्रॉपर्टी सत्यापित 7/12 उतारे और NA ऑर्डर के साथ आती है। कभी कोई विवाद नहीं।",
  "View Our Projects": "हमारे प्रोजेक्ट्स देखें",
  "Founder & Managing Director": "संस्थापक और प्रबंध निदेशक",
  "Founder & President": "संस्थापक और अध्यक्ष",

  // Projects page
  "Our Portfolio": "हमारा पोर्टफोलियो",
  "All Projects": "सभी प्रोजेक्ट्स",
  "Explore our complete portfolio of residential and commercial properties across Pune and PCMC.":
    "पुणे और PCMC में आवासीय और व्यावसायिक प्रॉपर्टीज़ का हमारा पूरा पोर्टफोलियो देखें।",
  "All Types": "सभी प्रकार",
  "Plot": "प्लॉट",
  "Flat": "फ्लैट",
  "Villa": "विला",
  "Commercial": "कमर्शियल",
  "Ready to Move Status": "तुरंत तैयार",
  "Under Construction": "निर्माणाधीन",
  "Upcoming": "आगामी",
  "View Details": "विवरण देखें",
  "Enquire": "पूछताछ करें",
  "No projects match your filters.": "आपके फ़िल्टर से कोई प्रोजेक्ट मेल नहीं खाता।",
  "Try clearing the search or changing the type filter.": "खोज साफ़ करें या प्रकार फ़िल्टर बदलें।",

  // Project detail
  "Back to Projects": "प्रोजेक्ट्स पर वापस जाएं",
  "Request a Callback": "कॉलबैक के लिए अनुरोध करें",
  "Project Gallery": "प्रोजेक्ट गैलरी",
  "About This Project": "इस प्रोजेक्ट के बारे में",
  "Amenities": "सुविधाएं",
  "Nearby Landmarks": "आस-पास के लैंडमार्क",
  "Possession": "कब्ज़ा",
  "Status": "स्थिति",
  "Area": "क्षेत्रफल",
  "Price": "कीमत",
  "Location": "स्थान",
  "Immediate": "तत्काल",
  "Book a Free Site Visit": "मुफ़्त साइट विज़िट बुक करें",
  "Get Pricing Details": "कीमत की जानकारी पाएं",

  // Gallery page
  "Our Work": "हमारा काम",
  "Real progress from our active development sites across Pune.": "पुणे भर में हमारे सक्रिय विकास स्थलों से वास्तविक प्रगति।",
  "On the Ground": "ज़मीन पर",
  "Running Projects Gallery": "चल रहे प्रोजेक्ट्स की गैलरी",
  "Real progress across our active developments — updated as our teams break ground, lay roads, and hand over keys.":
    "हमारे सक्रिय विकास में वास्तविक प्रगति — जैसे हमारी टीमें ज़मीन तोड़ती हैं, सड़कें बिछाती हैं और चाबियाँ सौंपती हैं।",
  "All": "सभी",
  "Construction": "निर्माण",
  "Sites": "साइट्स",
  "Aerial": "हवाई दृश्य",
  "Completed": "पूर्ण",

  // Contact page
  "Get In Touch": "संपर्क में रहें",
  "Contact Us": "संपर्क करें",
  "Have a question about a project? Want to schedule a site visit? We're here to help.":
    "किसी प्रोजेक्ट के बारे में प्रश्न है? साइट विज़िट शेड्यूल करना चाहते हैं? हम मदद के लिए यहाँ हैं।",
  "Send Us an Enquiry": "हमें पूछताछ भेजें",
  "Fill in the form below and we'll get back to you within 24 hours.":
    "नीचे दिया गया फ़ॉर्म भरें और हम 24 घंटों के भीतर आपसे संपर्क करेंगे।",
  "Phone": "फ़ोन",
  "Email": "ईमेल",
  "Office Address": "कार्यालय का पता",
  "Working Hours": "कार्य समय",
  "Find Our Office": "हमारा कार्यालय खोजें",
  "Open in Google Maps →": "Google Maps में खोलें →",

  // Form fields
  "Full Name *": "पूरा नाम *",
  "Mobile Number *": "मोबाइल नंबर *",
  "Email Address *": "ईमेल पता *",
  "Project Interest": "प्रोजेक्ट रुचि",
  "Message *": "संदेश *",
  "Send Enquiry": "पूछताछ भेजें",
  "Sending Enquiry...": "पूछताछ भेजी जा रही है...",
  "Your full name": "आपका पूरा नाम",
  "10-digit mobile": "10 अंकों का मोबाइल",
  "you@email.com": "you@email.com",
  "e.g. 2BHK Flat, Plot in Wagholi": "जैसे 2BHK फ्लैट, वाघोली में प्लॉट",
  "Tell us what you're looking for...": "हमें बताएं आप क्या ढूंढ रहे हैं...",
  "Enquiry Received!": "पूछताछ प्राप्त हुई!",
  "Our team will contact you within 24 hours.": "हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी।",
  "Something went wrong. Please call us directly or try again.":
    "कुछ गड़बड़ हो गई। कृपया हमें सीधे कॉल करें या पुनः प्रयास करें।",
  "Missing required fields": "आवश्यक फ़ील्ड अनुपस्थित हैं",
  "Enquire Now Modal": "अभी पूछताछ करें",
  "Our team will call you within 24 hours.": "हमारी टीम 24 घंटों के भीतर आपको कॉल करेगी।",
  "Interested in": "रुचि है",

  // Running sites / Gallery
  "Running": "चालू",
  "Green Valley – Foundation Work": "ग्रीन वैली – नींव का काम",
  "Landmark Heights – Structure Progress": "लैंडमार्क हाइट्स – संरचना प्रगति",

  // Area search
  "Wagholi": "वाघोली",
  "Hinjewadi": "हिंजेवाडी",
  "Talegaon": "तालेगाव",
  "Ravet": "रावेत",
  "Chakan": "चाकण",
  "Pimpri": "पिंपरी",
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("udyami-lang") : null;
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("udyami-lang", l);
  }

  function toggle() {
    setLang(lang === "en" ? "hi" : "en");
  }

  function t(text: string) {
    if (lang === "hi" && dict[text]) return dict[text];
    return text;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: "en" as Lang, setLang: () => {}, toggle: () => {}, t: (s: string) => s };
  }
  return ctx;
}
