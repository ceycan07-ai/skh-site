/**
 * SunExpress Holidays — components.js v4
 * Full i18n · Fixed dropdown positions · Localized regions · localStorage image cache
 */

/* ══ DACH AIRPORTS ══ */
const DACH_AIRPORTS = [
  {code:'FRA',name:'Frankfurt'},{code:'MUC',name:'München'},{code:'BER',name:'Berlin'},
  {code:'DUS',name:'Düsseldorf'},{code:'HAM',name:'Hamburg'},{code:'STR',name:'Stuttgart'},
  {code:'CGN',name:'Köln / Bonn'},{code:'NUE',name:'Nürnberg'},{code:'HAJ',name:'Hannover'},
  {code:'LEJ',name:'Leipzig'},{code:'DRS',name:'Dresden'},{code:'BRE',name:'Bremen'},
  {code:'FMM',name:'Memmingen'},{code:'FMO',name:'Münster/Osnabrück'},{code:'ERF',name:'Erfurt'},
  {code:'PAD',name:'Paderborn'},{code:'SCN',name:'Saarbrücken'},
  {code:'MLH',name:'Basel / Mulhouse'},{code:'ZRH',name:'Zürich'},{code:'GVA',name:'Genf'},
  {code:'VIE',name:'Wien'},{code:'GRZ',name:'Graz'},
];

/* Destinations without hardcoded region strings — region resolved via i18n at runtime */
const DESTINATIONS_SUNBEACH = [
  {code:'AYT',name:'Antalya',  regionKey:'turkey', flag:'🇹🇷'},
  {code:'DLM',name:'Dalaman',  regionKey:'turkey', flag:'🇹🇷'},
  {code:'BJV',name:'Bodrum',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'HRG',name:'Hurghada', regionKey:'egypt',  flag:'🇪🇬'},
  {code:'RMF',name:'Marsa Alam',regionKey:'egypt', flag:'🇪🇬'},
];
const DESTINATIONS_OWN = [
  {code:'AYT',name:'Antalya',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'DLM',name:'Dalaman',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'BJV',name:'Bodrum',    regionKey:'turkey', flag:'🇹🇷'},
  {code:'ADB',name:'İzmir',     regionKey:'turkey', flag:'🇹🇷'},
  {code:'ESB',name:'Ankara',    regionKey:'turkey', flag:'🇹🇷'},
  {code:'ASR',name:'Kayseri',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'GZT',name:'Gaziantep', regionKey:'turkey', flag:'🇹🇷'},
  {code:'SZF',name:'Samsun',    regionKey:'turkey', flag:'🇹🇷'},
  {code:'DIY',name:'Diyarbakır',regionKey:'turkey', flag:'🇹🇷'},
  {code:'TZX',name:'Trabzon',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'HTY',name:'Hatay',     regionKey:'turkey', flag:'🇹🇷'},
  {code:'MLX',name:'Malatya',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'ERZ',name:'Erzurum',   regionKey:'turkey', flag:'🇹🇷'},
  {code:'KYA',name:'Konya',     regionKey:'turkey', flag:'🇹🇷'},
  {code:'COV',name:'Çukurova',  regionKey:'turkey', flag:'🇹🇷'},
  {code:'HRG',name:'Hurghada',  regionKey:'egypt',  flag:'🇪🇬'},
  {code:'RMF',name:'Marsa Alam',regionKey:'egypt',  flag:'🇪🇬'},
];

/* ══ i18n ══ */
const I18N = {
  de:{
    nav:{home:'Startseite',offers:'Angebote',dest:'Ziele',hotels:'Hotels',help:'Hilfe'},
    header:{contact:'Kontakt',favorites:'Merkliste'},
    tabs:{sunbeach:'Sonne & Strand',own:'Pauschalreise',flights:'Nur Flug'},
    regions:{turkey:'Türkei',egypt:'Ägypten'},
    search:{
      dest:'Reiseziel',airport:'Abflughafen',dates:'Reisedaten',travelers:'Reisende',btn:'Suchen',
      nights:'Nächte',nights_s:'Nacht',adults:'Erwachsene',adultsAge:'Ab 18 Jahren',
      children:'Kinder',childrenAge:'Unter 18 Jahren',childAge:'Alter Kind',apply:'Übernehmen',
      destPh:'Antalya, Türkei',airportPh:'Frankfurt (FRA)',datesVal:'15. Jul — 22. Jul',
      searchDest:'Reiseziel suchen…',searchAirport:'Flughafen suchen…',
      checkIn:'Anreise',checkOut:'Abreise',hotelFlight:'Hotel + Flug',
    },
    usp:['Bestpreisgarantie','Direktflüge mit SunExpress','ATOL gesichert','24/7 Kundenservice','Flexible Zahlung'],
    footer:{
      tagline:'Ihr Spezialist für Sonnenurlaub. Ein Unternehmen von Turkish Airlines & Lufthansa.',
      dest:'Reiseziele',service:'Service',company:'Unternehmen',
      links_dest:['Antalya','Bodrum','İzmir','Dalaman','Hurghada','Marsa Alam'],
      links_service:['Buchungsmanager','Online Check-in','Gepäckinfo','Transfers','FAQ'],
      links_company:['Über uns','Presse','Karriere','AGB','Datenschutz'],
    },
    home:{
      heroBadge:'Sommer 2026 — Jetzt buchen',
      heroTitle:'Relaxed in den <em>Urlaub</em>',
      heroSub:'Mehr Komfort für weniger! Direktflüge aus DACH — inkl. Hotel, Transfer und mehr.',
      destTitle:'Beliebte Reiseziele',destSub:'Direktflüge in Top-Urlaubsdestinationen',destAll:'Alle Ziele',
      offersTitle:'Top-Angebote der Woche',offersSub:'Flug, Hotel & Transfer inklusive',offersAll:'Alle Angebote',
      promoLabel:'Frühbucher 2026',promoTitle:'Bis zu 20% Rabatt sichern',
      promoText:'Buchen Sie Ihren Sommerurlaub jetzt und sparen Sie mit unseren exklusiven Frühbucherrabatten.',
      promoBtn:'Jetzt entdecken',
      whyTitle:'Warum SunExpress Holidays?',whySub:'Ihr vertrauensvoller Partner für Sonnenurlaub seit 1989',
      why:['Direktflüge','Reiseabsicherung','Kuratierte Hotels','24/7 Support'],
      whyDesc:['Non-Stop aus über 30 DACH-Abflughäfen.','Vollständig insolvenzversichert.','TrustYou-verifizierte Unterkünfte.','Rund um die Uhr für Sie da.'],
      slides:[
        {badge:'Frühbucher 2026',title:'Bis zu 20% Rabatt',sub:'Sichern Sie sich jetzt die besten Preise für Ihren Sommerurlaub 2026.',btn:'Jetzt buchen',color:'var(--orange)'},
        {badge:'All-Inclusive',title:'Traumurlaub in Antalya',sub:'7 Nächte ab € 449 p.P. — Direktflug, Hotel & Transfer inklusive.',btn:'Angebote ansehen',color:'var(--blue-mid)'},
        {badge:'Neu: Hurghada',title:'Ägypten entdecken',sub:'Tauchen Sie ein in die Unterwasserwelt des Roten Meeres. Ab € 589 p.P.',btn:'Mehr erfahren',color:'#0e9f6e'},
      ],
    },
    sp:{
      filterTitle:'Filter',clearAll:'Alle zurücksetzen',
      verpflegung:'Verpflegung',ausstattung:'Ausstattung',kategorie:'Hotelkategorie',preis:'Preis p.P.',ziel:'Reiseziel',
      vp:{'all-inclusive':'All-Inclusive',halbpension:'Halbpension',fruehstueck:'Übernachtung + Frühstück','nur-ub':'Nur Übernachtung'},
      aus:{pool:'Pool',spa:'Spa & Wellness',strand:'Strand direkt',wasserpark:'Wasserpark',kinderclub:'Kinderclub',fitness:'Fitnessraum'},
      sort:{emp:'Empfehlung','price-asc':'Preis ↑','price-desc':'Preis ↓',rating:'Bewertung',stars:'Kategorie'},
      resultCount:'{{n}} Angebote',resultFor:'für Antalya, 15.–22. Juli',
      nights:'Nächte',direct:'Direktflug inkl.',transfer:'Transfer inkl.',
      perPerson:'pro Person',bookNow:'Jetzt buchen',details:'Details ansehen',
      noResults:'Keine Treffer',noResultsSub:'Filter anpassen.',resetFilters:'Filter zurücksetzen',
      onlyLeft:'Nur noch {{n}} Zimmer!',priceTo:'bis € {{n}}',page:'Seite',
    },
    hotel:{
      overview:'Übersicht',rooms:'Zimmer',facilities:'Ausstattung',reviews:'Bewertungen',location:'Lage',
      aboutHotel:'Über das Hotel',privateBeach:'Privatstrand',pools:'Pools',spa:'Spa & Wellness',
      kidsClub:'Kinderclub',restaurants:'Restaurants & Bars',gym:'Fitnessraum',wifi:'Gratis WLAN',shuttle:'Shuttleservice',
      concierge:'Concierge 24/7',bookNow:'Jetzt buchen',from:'Ab',perPerson:'pro Person',nights:'Nächte',
      roomsLeft:'Nur noch {{n}} Zimmer frei!',noFee:'Keine Buchungsgebühr',freeCancel:'Kostenlose Stornierung bis 30 Tage vor Reise',
      bestPrice:'Bestpreisgarantie',atol:'ATOL gesichert',support:'24/7 Support inklusive',
      travelPeriod:'Reisezeitraum',travelers:'Reisende',board:'Verpflegung',room:'Zimmer',
      flight:'Flug',transfer:'Transfer',included:'Inklusive',totalPrice:'Gesamtpreis',
      selectRoom:'Auswählen',adults:'Erw.',child:'Kind',children:'Kinder',
      reviewsTitle:'Bewertungen',location_label:'Lage',cleanliness:'Sauberkeit',service:'Service',food:'Verpflegung',
      airport:'Flughafen',cityCenter:'Stadtzentrum',nearestBeach:'Nächster Strand',directlyAtHotel:'Direkt am Hotel',
    },
    booking:{
      title:'Buchung abschließen',step1:'Reisende',step2:'Kontakt',step3:'Zahlung',step4:'Bestätigung',
      traveler:'Reisender',adult:'Erwachsener',child:'Kind',mainBooker:'Hauptbuchender',
      salutation:'Anrede',titleField:'Titel',mr:'Herr',ms:'Frau',diverse:'Divers',
      firstName:'Vorname',lastName:'Nachname',dob:'Geburtsdatum',nationality:'Nationalität',passport:'Reisepassnummer',
      email:'E-Mail-Adresse',phone:'Telefonnummer',street:'Straße und Hausnummer',
      zip:'Postleitzahl',city:'Stadt',country:'Land',
      wishes:'Besondere Wünsche',wishesPlaceholder:'z.B. Zimmer im höheren Stockwerk, Allergien, etc.',
      arrivalTime:'Ankunftszeit im Hotel',roomPref:'Zimmertyp-Präferenz',
      noPreference:'Keine Angabe',highFloor:'Hohe Etage',quiet:'Ruhige Lage',nearPool:'Pool-Nähe',nearBeach:'Strand-Nähe',
      paymentMethod:'Zahlungsmethode',creditcard:'Kreditkarte',paypal:'PayPal',bankTransfer:'Überweisung',
      cardNumber:'Kartennummer',expiry:'Gültig bis',cvv:'CVV',cardName:'Name auf der Karte',
      securePayment:'Sicher bezahlen mit SSL-Verschlüsselung. Ihre Zahlungsdaten werden verschlüsselt übertragen und nicht gespeichert.',
      summary:'Buchungsübersicht',totalPrice:'Gesamtpreis',allTaxes:'inkl. aller Steuern & Gebühren',
      submit:'Jetzt buchen & bezahlen',
      terms:'Ich akzeptiere die AGB und Datenschutzerklärung von SunExpress Holidays.',
      cancelTerms:'Ich habe die Stornierungsbedingungen gelesen und akzeptiere diese.',
      newsletter:'Ich möchte Angebote per E-Mail erhalten. (Optional)',
      req:'*',back:'← Zurück',next:'Weiter',
      bookingConfirmation:'Buchungsbestätigung',
      successTitle:'Buchung erfolgreich!',
      successText:'Vielen Dank für Ihre Buchung. Eine Bestätigungs-E-Mail wurde an Ihre Adresse gesendet.',
      bookingRef:'Buchungsnummer',backHome:'Zurück zur Startseite',print:'Buchung drucken',
      travelDates:'Reisedaten',nights:'Nächte',travelers:'Reisende',room:'Zimmer',flight:'Flug',transfer:'Transfer',included:'Inklusive',
      bestPrice:'Bestpreisgarantie',atol:'ATOL gesichert',freeCancel:'Kostenlose Stornierung (bis 30 Tage)',support:'24/7 Kundenservice',
      contactData:'Kontaktdaten',specialWishes:'Besondere Wünsche',
      de:'Deutschland',at:'Österreich',ch:'Schweiz',tr:'Türkei',other:'Andere',
    },
    badges:{beliebt:'Beliebt',neu:'Neu',angebot:'Angebot',premium:'Premium',luxus:'Luxus',bestseller:'Bestseller',guenstig:'Günstig'},
  },
  en:{
    nav:{home:'Home',offers:'Offers',dest:'Destinations',hotels:'Hotels',help:'Help'},
    header:{contact:'Contact',favorites:'Favorites'},
    tabs:{sunbeach:'Sun & Beach',own:'Create Your Own',flights:'Flights'},
    regions:{turkey:'Turkey',egypt:'Egypt'},
    search:{
      dest:'Destination',airport:'Departure Airport',dates:'Travel Dates',travelers:'Travelers',btn:'Search',
      nights:'Nights',nights_s:'Night',adults:'Adults',adultsAge:'18 years and over',
      children:'Children',childrenAge:'Under 18 years',childAge:'Child age',apply:'Apply',
      destPh:'Antalya, Turkey',airportPh:'Frankfurt (FRA)',datesVal:'15 Jul — 22 Jul',
      searchDest:'Search destination…',searchAirport:'Search airport…',
      checkIn:'Check-in',checkOut:'Check-out',hotelFlight:'Hotel + Flight',
    },
    usp:['Best Price Guarantee','Direct flights with SunExpress','ATOL protected','24/7 Customer Service','Flexible Payment'],
    footer:{
      tagline:'Your sun holiday specialist. A joint venture of Turkish Airlines & Lufthansa.',
      dest:'Destinations',service:'Service',company:'Company',
      links_dest:['Antalya','Bodrum','İzmir','Dalaman','Hurghada','Marsa Alam'],
      links_service:['Booking Manager','Online Check-in','Baggage Info','Transfers','FAQ'],
      links_company:['About Us','Press','Careers','T&C','Privacy'],
    },
    home:{
      heroBadge:'Summer 2026 — Book now',
      heroTitle:'Relax into your <em>holidays</em>',
      heroSub:'More comfort for less! Direct flights from DACH — incl. hotel, transfer and more.',
      destTitle:'Popular Destinations',destSub:'Direct flights to top holiday destinations',destAll:'All Destinations',
      offersTitle:'Top Deals of the Week',offersSub:'Flight, hotel & transfer included',offersAll:'All Offers',
      promoLabel:'Early Bird 2026',promoTitle:'Save up to 20%',
      promoText:'Book your summer holiday now and save with our exclusive early bird discounts.',
      promoBtn:'Discover now',
      whyTitle:'Why SunExpress Holidays?',whySub:'Your trusted partner for sun holidays since 1989',
      why:['Direct Flights','Travel Protection','Curated Hotels','24/7 Support'],
      whyDesc:['Non-stop from 30+ DACH airports.','Fully insolvency-protected.','TrustYou-verified accommodations.','Around the clock for you.'],
      slides:[
        {badge:'Early Bird 2026',title:'Save up to 20%',sub:'Book now and get the best prices for your summer holiday 2026.',btn:'Book now',color:'var(--orange)'},
        {badge:'All-Inclusive',title:'Dream Holiday in Antalya',sub:'7 nights from € 449 p.p. — direct flight, hotel & transfer included.',btn:'View offers',color:'var(--blue-mid)'},
        {badge:'New: Hurghada',title:'Discover Egypt',sub:'Dive into the underwater world of the Red Sea. From € 589 p.p.',btn:'Learn more',color:'#0e9f6e'},
      ],
    },
    sp:{
      filterTitle:'Filters',clearAll:'Clear all',
      verpflegung:'Board',ausstattung:'Facilities',kategorie:'Hotel Category',preis:'Price p.p.',ziel:'Destination',
      vp:{'all-inclusive':'All-Inclusive',halbpension:'Half Board',fruehstueck:'B&B','nur-ub':'Room Only'},
      aus:{pool:'Pool',spa:'Spa & Wellness',strand:'Beach front',wasserpark:'Water Park',kinderclub:'Kids Club',fitness:'Gym'},
      sort:{emp:'Recommended','price-asc':'Price ↑','price-desc':'Price ↓',rating:'Rating',stars:'Category'},
      resultCount:'{{n}} offers',resultFor:'for Antalya, 15–22 Jul',
      nights:'nights',direct:'Direct flight incl.',transfer:'Transfer incl.',
      perPerson:'per person',bookNow:'Book now',details:'View details',
      noResults:'No results',noResultsSub:'Adjust filters.',resetFilters:'Reset filters',
      onlyLeft:'Only {{n}} rooms left!',priceTo:'up to € {{n}}',page:'Page',
    },
    hotel:{
      overview:'Overview',rooms:'Rooms',facilities:'Facilities',reviews:'Reviews',location:'Location',
      aboutHotel:'About the Hotel',privateBeach:'Private Beach',pools:'Pools',spa:'Spa & Wellness',
      kidsClub:'Kids Club',restaurants:'Restaurants & Bars',gym:'Gym',wifi:'Free WiFi',shuttle:'Shuttle Service',
      concierge:'Concierge 24/7',bookNow:'Book now',from:'From',perPerson:'per person',nights:'nights',
      roomsLeft:'Only {{n}} rooms left!',noFee:'No booking fee',freeCancel:'Free cancellation up to 30 days before travel',
      bestPrice:'Best price guarantee',atol:'ATOL protected',support:'24/7 support included',
      travelPeriod:'Travel period',travelers:'Travelers',board:'Board',room:'Room',
      flight:'Flight',transfer:'Transfer',included:'Included',totalPrice:'Total price',
      selectRoom:'Select',adults:'adults',child:'Child',children:'Children',
      reviewsTitle:'Reviews',location_label:'Location',cleanliness:'Cleanliness',service:'Service',food:'Food',
      airport:'Airport',cityCenter:'City center',nearestBeach:'Nearest beach',directlyAtHotel:'Directly at hotel',
    },
    booking:{
      title:'Complete Booking',step1:'Travellers',step2:'Contact',step3:'Payment',step4:'Confirmation',
      traveler:'Traveller',adult:'Adult',child:'Child',mainBooker:'Lead passenger',
      salutation:'Title',titleField:'Honorific',mr:'Mr',ms:'Ms',diverse:'Other',
      firstName:'First name',lastName:'Last name',dob:'Date of birth',nationality:'Nationality',passport:'Passport number',
      email:'Email address',phone:'Phone number',street:'Street address',
      zip:'Postcode',city:'City',country:'Country',
      wishes:'Special requests',wishesPlaceholder:'e.g. high floor, allergies, etc.',
      arrivalTime:'Estimated arrival',roomPref:'Room preference',
      noPreference:'No preference',highFloor:'High floor',quiet:'Quiet location',nearPool:'Near pool',nearBeach:'Near beach',
      paymentMethod:'Payment method',creditcard:'Credit card',paypal:'PayPal',bankTransfer:'Bank transfer',
      cardNumber:'Card number',expiry:'Expiry',cvv:'CVV',cardName:'Name on card',
      securePayment:'Secure payment with SSL encryption. Your payment data is encrypted and not stored.',
      summary:'Booking summary',totalPrice:'Total price',allTaxes:'incl. all taxes & fees',
      submit:'Book & pay now',
      terms:'I accept the Terms & Conditions and Privacy Policy of SunExpress Holidays.',
      cancelTerms:'I have read and accept the cancellation policy.',
      newsletter:'I would like to receive offers by email. (Optional)',
      req:'*',back:'← Back',next:'Continue',
      bookingConfirmation:'Booking Confirmation',
      successTitle:'Booking confirmed!',
      successText:'Thank you for your booking. A confirmation email has been sent to your address.',
      bookingRef:'Booking reference',backHome:'Back to home',print:'Print booking',
      travelDates:'Travel dates',nights:'Nights',travelers:'Travelers',room:'Room',flight:'Flight',transfer:'Transfer',included:'Included',
      bestPrice:'Best price guarantee',atol:'ATOL protected',freeCancel:'Free cancellation (up to 30 days)',support:'24/7 customer service',
      contactData:'Contact Details',specialWishes:'Special Requests',
      de:'Germany',at:'Austria',ch:'Switzerland',tr:'Turkey',other:'Other',
    },
    badges:{beliebt:'Popular',neu:'New',angebot:'Deal',premium:'Premium',luxus:'Luxury',bestseller:'Bestseller',guenstig:'Budget'},
  },
  tr:{
    nav:{home:'Ana Sayfa',offers:'Teklifler',dest:'Destinasyonlar',hotels:'Oteller',help:'Yardım'},
    header:{contact:'İletişim',favorites:'Favoriler'},
    tabs:{sunbeach:'Güneş & Plaj',own:'Kendin Oluştur',flights:'Uçuşlar'},
    regions:{turkey:'Türkiye',egypt:'Mısır'},
    search:{
      dest:'Destinasyon',airport:'Kalkış Havalimanı',dates:'Seyahat Tarihi',travelers:'Yolcular',btn:'Ara',
      nights:'Gece',nights_s:'Gece',adults:'Yetişkin',adultsAge:'18 yaş ve üzeri',
      children:'Çocuk',childrenAge:'18 yaşın altında',childAge:'Çocuk Yaşı',apply:'Uygula',
      destPh:'Antalya, Türkiye',airportPh:'Frankfurt (FRA)',datesVal:'15 Tem — 22 Tem',
      searchDest:'Destinasyon ara…',searchAirport:'Havalimanı ara…',
      checkIn:'Giriş',checkOut:'Çıkış',hotelFlight:'Otel + Uçuş',
    },
    usp:['En İyi Fiyat Garantisi','SunExpress ile Direkt Uçuş','ATOL güvenceli','7/24 Müşteri Hizmetleri','Esnek Ödeme'],
    footer:{
      tagline:'Güneş tatili uzmanınız. Turkish Airlines ve Lufthansa ortak girişimi.',
      dest:'Destinasyonlar',service:'Servis',company:'Şirket',
      links_dest:['Antalya','Bodrum','İzmir','Dalaman','Hurghada','Marsa Alam'],
      links_service:['Rezervasyon Yöneticisi','Online Check-in','Bagaj Bilgisi','Transferler','SSS'],
      links_company:['Hakkımızda','Basın','Kariyer','Şartlar','Gizlilik'],
    },
    home:{
      heroBadge:'Yaz 2026 — Şimdi rezervasyon yap',
      heroTitle:'Tatile <em>rahat</em> girin',
      heroSub:'Daha az fiyata daha fazla konfor! DACH\'tan direkt uçuşlar — otel, transfer ve daha fazlası dahil.',
      destTitle:'Popüler Destinasyonlar',destSub:'Tatil destinasyonlarına direkt uçuşlar',destAll:'Tüm Destinasyonlar',
      offersTitle:'Haftanın En İyi Teklifleri',offersSub:'Uçuş, otel ve transfer dahil',offersAll:'Tüm Teklifler',
      promoLabel:'Erken Rezervasyon 2026',promoTitle:'%20\'ye Kadar İndirim',
      promoText:'Yaz tatilinizi şimdi rezervasyon yapın ve özel erken rezervasyon indirimlerimizden yararlanın.',
      promoBtn:'Şimdi keşfet',
      whyTitle:'Neden SunExpress Holidays?',whySub:'1989\'dan beri güneş tatili uzmanınız',
      why:['Direkt Uçuşlar','Seyahat Güvencesi','Seçkin Oteller','7/24 Destek'],
      whyDesc:['DACH\'tan 30+ havalimanında direkt.','Tam iflas koruması.','TrustYou onaylı konaklamalar.','7/24 hizmetinizdeyiz.'],
      slides:[
        {badge:'Erken Rezervasyon 2026',title:'%20\'ye Kadar İndirim',sub:'Yaz tatili 2026 için en iyi fiyatları şimdi yakalayın.',btn:'Şimdi rezervasyon yap',color:'var(--orange)'},
        {badge:'Her Şey Dahil',title:'Antalya\'da Rüya Tatil',sub:'7 gece kişi başı € 449\'dan — direkt uçuş, otel ve transfer dahil.',btn:'Teklifleri gör',color:'var(--blue-mid)'},
        {badge:'Yeni: Hurghada',title:'Mısır\'ı Keşfet',sub:'Kızıl Deniz\'in su altı dünyasına dalın. Kişi başı € 589\'dan.',btn:'Daha fazla',color:'#0e9f6e'},
      ],
    },
    sp:{
      filterTitle:'Filtre',clearAll:'Tümünü Sıfırla',
      verpflegung:'Yemek Planı',ausstattung:'Olanaklar',kategorie:'Otel Kategorisi',preis:'Fiyat (kişi başı)',ziel:'Destinasyon',
      vp:{'all-inclusive':'Her Şey Dahil',halbpension:'Yarım Pansiyon',fruehstueck:'Oda + Kahvaltı','nur-ub':'Sadece Oda'},
      aus:{pool:'Havuz',spa:'Spa & Wellness',strand:'Plaj Cephesi',wasserpark:'Su Parkı',kinderclub:'Çocuk Kulübü',fitness:'Fitness'},
      sort:{emp:'Önerilen','price-asc':'Fiyat ↑','price-desc':'Fiyat ↓',rating:'Puan',stars:'Kategori'},
      resultCount:'{{n}} teklif',resultFor:'Antalya, 15–22 Tem',
      nights:'gece',direct:'Direkt uçuş dahil',transfer:'Transfer dahil',
      perPerson:'kişi başı',bookNow:'Şimdi Rezervasyon',details:'Detayları Gör',
      noResults:'Sonuç yok',noResultsSub:'Filtreleri ayarlayın.',resetFilters:'Filtreleri sıfırla',
      onlyLeft:'Sadece {{n}} oda kaldı!',priceTo:'€ {{n}}\'a kadar',page:'Sayfa',
    },
    hotel:{
      overview:'Genel Bakış',rooms:'Odalar',facilities:'Olanaklar',reviews:'Değerlendirmeler',location:'Konum',
      aboutHotel:'Otel Hakkında',privateBeach:'Özel Plaj',pools:'Havuzlar',spa:'Spa & Wellness',
      kidsClub:'Çocuk Kulübü',restaurants:'Restoranlar & Barlar',gym:'Fitness Salonu',wifi:'Ücretsiz WiFi',shuttle:'Servis',
      concierge:'7/24 Concierge',bookNow:'Şimdi Rezervasyon',from:'\'dan',perPerson:'kişi başına',nights:'gece',
      roomsLeft:'Sadece {{n}} oda kaldı!',noFee:'Rezervasyon ücreti yok',freeCancel:'Seyahatten 30 gün önceye kadar ücretsiz iptal',
      bestPrice:'En iyi fiyat garantisi',atol:'ATOL güvenceli',support:'7/24 destek dahil',
      travelPeriod:'Seyahat Dönemi',travelers:'Yolcular',board:'Yemek Planı',room:'Oda',
      flight:'Uçuş',transfer:'Transfer',included:'Dahil',totalPrice:'Toplam Fiyat',
      selectRoom:'Seç',adults:'yet.',child:'Çocuk',children:'Çocuk',
      reviewsTitle:'Değerlendirmeler',location_label:'Konum',cleanliness:'Temizlik',service:'Servis',food:'Yemek',
      airport:'Havalimanı',cityCenter:'Şehir Merkezi',nearestBeach:'En Yakın Plaj',directlyAtHotel:'Otelde',
    },
    booking:{
      title:'Rezervasyonu Tamamla',step1:'Yolcular',step2:'İletişim',step3:'Ödeme',step4:'Onay',
      traveler:'Yolcu',adult:'Yetişkin',child:'Çocuk',mainBooker:'Baş Yolcu',
      salutation:'Hitap',titleField:'Unvan',mr:'Bay',ms:'Bayan',diverse:'Diğer',
      firstName:'Ad',lastName:'Soyad',dob:'Doğum Tarihi',nationality:'Uyruk',passport:'Pasaport Numarası',
      email:'E-posta Adresi',phone:'Telefon Numarası',street:'Sokak Adresi',
      zip:'Posta Kodu',city:'Şehir',country:'Ülke',
      wishes:'Özel İstekler',wishesPlaceholder:'Örn. yüksek kat, alerji, vb.',
      arrivalTime:'Tahmini Varış',roomPref:'Oda Tercihi',
      noPreference:'Tercih yok',highFloor:'Yüksek kat',quiet:'Sakin konum',nearPool:'Havuz yakını',nearBeach:'Plaj yakını',
      paymentMethod:'Ödeme Yöntemi',creditcard:'Kredi Kartı',paypal:'PayPal',bankTransfer:'Banka Havalesi',
      cardNumber:'Kart Numarası',expiry:'Son Kullanma',cvv:'CVV',cardName:'Kart Üzerindeki Ad',
      securePayment:'SSL şifrelemesi ile güvenli ödeme. Ödeme bilgileriniz şifreli olarak iletilir ve saklanmaz.',
      summary:'Rezervasyon Özeti',totalPrice:'Toplam Fiyat',allTaxes:'tüm vergiler dahil',
      submit:'Şimdi Rezervasyon Yap ve Öde',
      terms:'SunExpress Holidays\'ın Şartlar ve Koşullarını ve Gizlilik Politikasını kabul ediyorum.',
      cancelTerms:'İptal politikasını okudum ve kabul ediyorum.',
      newsletter:'E-posta ile teklif almak istiyorum. (İsteğe bağlı)',
      req:'*',back:'← Geri',next:'Devam',
      bookingConfirmation:'Rezervasyon Onayı',
      successTitle:'Rezervasyon Onaylandı!',
      successText:'Rezervasyonunuz için teşekkürler. Onay e-postası adresinize gönderildi.',
      bookingRef:'Rezervasyon Numarası',backHome:'Ana Sayfaya Dön',print:'Rezervasyonu Yazdır',
      travelDates:'Seyahat Tarihleri',nights:'Gece',travelers:'Yolcular',room:'Oda',flight:'Uçuş',transfer:'Transfer',included:'Dahil',
      bestPrice:'En iyi fiyat garantisi',atol:'ATOL güvenceli',freeCancel:'Ücretsiz iptal (30 güne kadar)',support:'7/24 müşteri hizmetleri',
      contactData:'İletişim Bilgileri',specialWishes:'Özel İstekler',
      de:'Almanya',at:'Avusturya',ch:'İsviçre',tr:'Türkiye',other:'Diğer',
    },
    badges:{beliebt:'Popüler',neu:'Yeni',angebot:'Fırsat',premium:'Premium',luxus:'Lüks',bestseller:'Çok Satan',guenstig:'Ekonomik'},
  },
};

/* ══ STATE ══ */
let currentLang = localStorage.getItem('sxh-lang') || 'de';
let activeTab   = localStorage.getItem('sxh-tab')  || 'sunbeach';
const searchState = {adults:2,children:0,childAges:[],dest:null,airport:DACH_AIRPORTS[0],checkIn:null,checkOut:null};

function t(sec,key){ return I18N[currentLang]?.[sec]?.[key] ?? I18N.de[sec]?.[key] ?? key; }
function tArr(sec,key){ return I18N[currentLang]?.[sec]?.[key] ?? I18N.de[sec]?.[key] ?? []; }
function tObj(sec){ return {...(I18N.de[sec]||{}), ...(I18N[currentLang]?.[sec]||{})}; }
function region(key){ return t('regions',key); }
function setLang(lang){ currentLang=lang; localStorage.setItem('sxh-lang',lang); location.reload(); }

/* ══ UNSPLASH ══ */
const UNSPLASH_KEY='i2yfxF4kYEr9M2VD_gPcxVA7vW6VHQlP6cuFipkMneM';
const imgCache={};
try{ const s=localStorage.getItem('sxh-imgs'); if(s) Object.assign(imgCache,JSON.parse(s)); }catch(e){}
async function fetchUnsplashImg(query,id){
  const el=document.getElementById(id); if(!el) return;
  if(imgCache[query]){el.style.backgroundImage=`url(${imgCache[query]})`;el.style.backgroundSize='cover';el.style.backgroundPosition='center';return;}
  try{
    const r=await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_KEY}`);
    const d=await r.json();
    if(d?.urls?.regular){
      imgCache[query]=d.urls.regular;
      try{localStorage.setItem('sxh-imgs',JSON.stringify(imgCache));}catch(e){}
      el.style.backgroundImage=`url(${d.urls.regular})`;el.style.backgroundSize='cover';el.style.backgroundPosition='center';
    }
  }catch(e){}
}

/* ══ HEADER ══ */
function renderHeader(activePage){
  const nav=[
    {id:'home',href:'index.html',key:'home'},
    {id:'search',href:'search.html',key:'offers'},
    {id:'dest',href:'destinations.html',key:'dest'},
    {id:'hotels',href:'hotels.html',key:'hotels'},
    {id:'help',href:'#',key:'help'},
  ];
  return `<header class="site-header">
    <a class="header-logo" href="index.html"><img src="logo.svg" alt="SunExpress Holidays" style="height:44px;width:auto"/></a>
    <nav class="header-nav">${nav.map(n=>`<a href="${n.href}" class="${n.id===activePage?'active':''}">${t('nav',n.key)}</a>`).join('')}</nav>
    <div class="header-actions">
      <div class="lang-selector">${['de','en','tr'].map(l=>`<button class="lang-btn ${l===currentLang?'active':''}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`).join('')}</div>
      <button class="btn btn-outline btn-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg> ${t('header','contact')}</button>
      <button class="btn btn-primary btn-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> ${t('header','favorites')}</button>
    </div>
  </header>`;
}

/* ══ FOOTER ══ */
function renderFooter(){
  const fo=tObj('footer');
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand"><img src="logo.svg" alt="SunExpress Holidays" class="footer-logo"/><p>${fo.tagline||''}</p></div>
      <div class="footer-col"><h5>${fo.dest||''}</h5>${(fo.links_dest||[]).map(l=>`<a href="#">${l}</a>`).join('')}</div>
      <div class="footer-col"><h5>${fo.service||''}</h5>${(fo.links_service||[]).map(l=>`<a href="#">${l}</a>`).join('')}</div>
      <div class="footer-col"><h5>${fo.company||''}</h5>${(fo.links_company||[]).map(l=>`<a href="#">${l}</a>`).join('')}</div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 SunExpress Holidays — Güneş Ekspres Havacılık A.Ş., Antalya</p>
      <div class="footer-chips"><span class="footer-chip">Turkish Airlines</span><span class="footer-chip">Lufthansa</span><span class="footer-chip">Star Alliance</span></div>
    </div>
  </footer>`;
}

/* ══ SEARCH MASK ══ */
function guestsLabel(){
  let l=`${searchState.adults} ${t('search','adults')}`;
  if(searchState.children>0) l+=`, ${searchState.children} ${t('search','children')}`;
  return l;
}
function fmtDate(d){
  if(!d) return '';
  const m={de:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],tr:['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara']};
  return `${d.getDate()}. ${(m[currentLang]||m.de)[d.getMonth()]}`;
}
function datesLabel(){
  if(searchState.checkIn&&searchState.checkOut) return `${fmtDate(searchState.checkIn)} — ${fmtDate(searchState.checkOut)}`;
  return t('search','datesVal');
}
function nightsCount(){
  if(searchState.checkIn&&searchState.checkOut) return Math.round((searchState.checkOut-searchState.checkIn)/86400000);
  return 7;
}

function renderSearchMask(containerId){
  const el=document.getElementById(containerId); if(!el) return;
  const dests=activeTab==='own'?DESTINATIONS_OWN:DESTINATIONS_SUNBEACH;
  const sd=searchState.dest||dests[0];
  const reg=region(sd.regionKey);
  el.innerHTML=`<div class="search-wrap">
    <div class="search-tabs">
      <button class="search-tab ${activeTab==='sunbeach'?'active':''}" onclick="switchTab('sunbeach')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
        ${t('tabs','sunbeach')}
      </button>
      <button class="search-tab ${activeTab==='own'?'active':''}" onclick="switchTab('own')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        ${t('tabs','own')}
      </button>
      <button class="search-tab" onclick="window.open('https://www.sunexpress.com','_blank')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
        ${t('tabs','flights')} <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:.7"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </button>
    </div>
    <div class="search-box">
      <div class="search-field sf-rel" style="flex:1.4">
        <label>${t('search','dest')}</label>
        <div class="search-field-inner" id="dest-trigger">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div><div class="val" id="dest-val">${sd.name}, ${reg}</div><div class="val-sub" id="dest-code">${sd.code}</div></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;color:var(--grey-3)"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="search-dropdown" id="dest-dd">
          <div class="sd-search-wrap"><input class="sd-search" id="dest-q" placeholder="${t('search','searchDest')}" oninput="filterDests(this.value)"/></div>
          <div class="sd-list" id="dest-list"></div>
        </div>
      </div>
      <div class="search-field sf-rel">
        <label>${t('search','airport')}</label>
        <div class="search-field-inner" id="airport-trigger">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          <div><div class="val" id="airport-val">${searchState.airport.name} (${searchState.airport.code})</div></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;color:var(--grey-3)"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="search-dropdown" id="airport-dd">
          <div class="sd-search-wrap"><input class="sd-search" id="airport-q" placeholder="${t('search','searchAirport')}" oninput="filterAirports(this.value)"/></div>
          <div class="sd-list" id="airport-list"></div>
        </div>
      </div>
      <div class="search-field sf-rel">
        <label>${t('search','dates')}</label>
        <div class="search-field-inner" id="dates-trigger">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div><div class="val" id="dates-val">${datesLabel()}</div><div class="val-sub" id="nights-sub">${nightsCount()} ${t('search','nights')}</div></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;color:var(--grey-3)"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="search-dropdown search-cal-dd" id="dates-dd"></div>
      </div>
      <div class="search-field sf-rel" style="flex:0.85;min-width:160px">
        <label>${t('search','travelers')}</label>
        <div class="search-field-inner" id="guests-trigger">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          <div><div class="val" id="guests-lbl">${guestsLabel()}</div></div>
          <svg id="g-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;color:var(--grey-3);transition:transform .2s"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="guests-dd" id="guests-dd"></div>
      </div>
      <button class="search-btn" onclick="doSearch()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        ${t('search','btn')}
      </button>
    </div>
  </div>`;
  _initDropdowns();
}

function switchTab(tab){
  activeTab=tab; localStorage.setItem('sxh-tab',tab);
  searchState.dest=null;
  renderSearchMask('search-mask');
}

/* dest list */
function renderDestList(q){
  const list=document.getElementById('dest-list'); if(!list) return;
  const all=activeTab==='own'?DESTINATIONS_OWN:DESTINATIONS_SUNBEACH;
  const f=(q||'').toLowerCase();
  const items=all.filter(d=>!f||d.name.toLowerCase().includes(f)||d.code.toLowerCase().includes(f));
  list.innerHTML=items.map(d=>`<div class="sd-item" onclick="pickDest('${d.code}','${d.name}','${d.regionKey}')">
    <span style="font-size:20px">${d.flag}</span>
    <div><div class="sd-name">${d.name}</div><div class="sd-sub">${d.code} · ${region(d.regionKey)}</div></div>
  </div>`).join('');
}
function filterDests(q){renderDestList(q);}
function pickDest(code,name,regionKey){
  const reg=region(regionKey);
  searchState.dest={code,name,regionKey};
  const v=document.getElementById('dest-val'); if(v) v.textContent=`${name}, ${reg}`;
  const c=document.getElementById('dest-code'); if(c) c.textContent=code;
  closeAll();
}

/* airport list */
function renderAirportList(q){
  const list=document.getElementById('airport-list'); if(!list) return;
  const f=(q||'').toLowerCase();
  const items=DACH_AIRPORTS.filter(a=>!f||a.name.toLowerCase().includes(f)||a.code.toLowerCase().includes(f));
  list.innerHTML=items.map(a=>`<div class="sd-item" onclick="pickAirport('${a.code}','${a.name}')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--blue);flex-shrink:0"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    <div><div class="sd-name">${a.name}</div><div class="sd-sub">${a.code}</div></div>
  </div>`).join('');
}
function filterAirports(q){renderAirportList(q);}
function pickAirport(code,name){
  searchState.airport={code,name};
  const v=document.getElementById('airport-val'); if(v) v.textContent=`${name} (${code})`;
  closeAll();
}

/* calendar */
const calS={year:new Date().getFullYear(),month:new Date().getMonth(),phase:'in'};
function renderCal(){
  const dd=document.getElementById('dates-dd'); if(!dd) return;
  const {year,month}=calS;
  const today=new Date(); today.setHours(0,0,0,0);
  const first=new Date(year,month,1); const days=new Date(year,month+1,0).getDate(); const sw=(first.getDay()+6)%7;
  const MN={de:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],en:['January','February','March','April','May','June','July','August','September','October','November','December'],tr:['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']};
  const DN={de:['Mo','Di','Mi','Do','Fr','Sa','So'],en:['Mo','Tu','We','Th','Fr','Sa','Su'],tr:['Pt','Sa','Ça','Pe','Cu','Ct','Pz']};
  const mn=MN[currentLang]||MN.de; const dn=DN[currentLang]||DN.de;
  let cells='';
  for(let i=0;i<sw;i++) cells+=`<div class="cal-cell cal-empty"></div>`;
  for(let d=1;d<=days;d++){
    const dt=new Date(year,month,d); const past=dt<today;
    const isIn=searchState.checkIn&&dt.getTime()===searchState.checkIn.getTime();
    const isOut=searchState.checkOut&&dt.getTime()===searchState.checkOut.getTime();
    const inR=searchState.checkIn&&searchState.checkOut&&dt>searchState.checkIn&&dt<searchState.checkOut;
    let cls='cal-cell'+(past?' cal-past':'')+(isIn?' cal-in':'')+(isOut?' cal-out':'')+(inR?' cal-range':'');
    cells+=`<div class="${cls}" ${past?'':'onclick="calPick('+year+','+month+','+d+')"'}>${d}</div>`;
  }
  const n=nightsCount();
  const inL=searchState.checkIn?fmtDate(searchState.checkIn):t('search','checkIn');
  const outL=searchState.checkOut?fmtDate(searchState.checkOut):t('search','checkOut');
  dd.innerHTML=`<div class="cal-wrap">
    <div class="cal-sel-row">
      <div class="cal-sel-item ${calS.phase==='in'?'active':''}"><div class="cal-sel-label">${t('search','checkIn')}</div><div class="cal-sel-date">${inL}</div></div>
      <div style="color:var(--grey-3);font-size:18px;padding:0 4px">→</div>
      <div class="cal-sel-item ${calS.phase==='out'||calS.phase==='done'?'active':''}"><div class="cal-sel-label">${t('search','checkOut')}</div><div class="cal-sel-date">${outL}</div></div>
      ${searchState.checkIn&&searchState.checkOut?`<div class="cal-nights-badge">${n} ${t('search','nights')}</div>`:''}
    </div>
    <div class="cal-head"><button class="cal-nav" onclick="calMove(-1)">‹</button><span class="cal-month">${mn[month]} ${year}</span><button class="cal-nav" onclick="calMove(1)">›</button></div>
    <div class="cal-days-hdr">${dn.map(d=>`<div>${d}</div>`).join('')}</div>
    <div class="cal-grid">${cells}</div>
    ${searchState.checkIn&&searchState.checkOut?`<div class="cal-foot"><button class="btn btn-primary" style="width:100%" onclick="applyDates()">${t('search','apply')}</button></div>`:''}
  </div>`;
}
function calPick(y,m,d){
  const dt=new Date(y,m,d);
  if(calS.phase==='in'||(searchState.checkIn&&dt<=searchState.checkIn)){searchState.checkIn=dt;searchState.checkOut=null;calS.phase='out';}
  else{searchState.checkOut=dt;calS.phase='done';}
  renderCal();
}
function calMove(dir){calS.month+=dir;if(calS.month>11){calS.month=0;calS.year++;}if(calS.month<0){calS.month=11;calS.year--;}renderCal();}
function applyDates(){
  const dv=document.getElementById('dates-val'); if(dv) dv.textContent=datesLabel();
  const ns=document.getElementById('nights-sub'); if(ns) ns.textContent=`${nightsCount()} ${t('search','nights')}`;
  closeAll();
}

/* guests */
function renderGuests(){
  const dd=document.getElementById('guests-dd'); if(!dd) return;
  const s=searchState;
  let ages='';
  if(s.children>0){
    ages=`<div class="child-ages-section"><div class="child-ages-title">${t('search','childAge')}</div><div class="child-ages-grid">${
      s.childAges.map((a,i)=>`<div class="child-age-item"><label>${t('search','childAge')} ${i+1}</label><select onchange="setCA(${i},this.value)">${Array.from({length:18},(_,y)=>`<option value="${y}" ${a==y?'selected':''}>${y===0?'<1':y}</option>`).join('')}</select></div>`).join('')
    }</div></div>`;
  }
  dd.innerHTML=`
    <div class="guests-row"><div><div class="guests-label">${t('search','adults')}</div><div class="guests-label-sub">${t('search','adultsAge')}</div></div>
    <div class="guests-counter"><button class="g-btn" onclick="chG('adults',-1)" ${s.adults<=1?'disabled':''}>−</button><span class="g-count">${s.adults}</span><button class="g-btn" onclick="chG('adults',1)" ${s.adults>=9?'disabled':''}>+</button></div></div>
    <div class="guests-row"><div><div class="guests-label">${t('search','children')}</div><div class="guests-label-sub">${t('search','childrenAge')}</div></div>
    <div class="guests-counter"><button class="g-btn" onclick="chG('children',-1)" ${s.children<=0?'disabled':''}>−</button><span class="g-count">${s.children}</span><button class="g-btn" onclick="chG('children',1)" ${s.children>=6?'disabled':''}>+</button></div></div>
    ${ages}
    <button class="btn btn-primary guests-apply-btn" onclick="closeAll()">${t('search','apply')}</button>`;
}
function chG(type,delta){
  if(type==='adults'){searchState.adults=Math.max(1,Math.min(9,searchState.adults+delta));}
  else{const p=searchState.children;searchState.children=Math.max(0,Math.min(6,searchState.children+delta));if(searchState.children>p)searchState.childAges.push(8);else searchState.childAges.pop();}
  renderGuests();
  const l=document.getElementById('guests-lbl'); if(l) l.textContent=guestsLabel();
}
function setCA(i,v){searchState.childAges[i]=parseInt(v);}

/* dropdown init — KEY FIX: each dropdown is INSIDE its .sf-rel parent so position:absolute is relative to it */
function _initDropdowns(){
  _bind('dest-trigger','dest-dd',()=>{renderDestList('');setTimeout(()=>document.getElementById('dest-q')?.focus(),40);});
  _bind('airport-trigger','airport-dd',()=>{renderAirportList('');setTimeout(()=>document.getElementById('airport-q')?.focus(),40);});
  _bind('dates-trigger','dates-dd',()=>{calS.phase='in';renderCal();});
  _bind('guests-trigger','guests-dd',()=>{renderGuests();const c=document.getElementById('g-chev');if(c)c.style.transform='rotate(180deg)';},()=>{const c=document.getElementById('g-chev');if(c)c.style.transform='';});
  document.addEventListener('click',e=>{
    if(!e.target.closest('.search-field')&&!e.target.closest('.guests-dd')) closeAll();
  },true);
}
function _bind(tid,did,onOpen,onClose){
  const tr=document.getElementById(tid); const dd=document.getElementById(did); if(!tr||!dd) return;
  tr.addEventListener('click',e=>{
    e.stopPropagation();
    const was=dd.classList.contains('open');
    closeAll();
    if(!was){dd.classList.add('open');if(onOpen)onOpen();}
    else{if(onClose)onClose();}
  });
}
function closeAll(){
  document.querySelectorAll('.search-dropdown,.guests-dd').forEach(d=>d.classList.remove('open'));
  const c=document.getElementById('g-chev');if(c)c.style.transform='';
}
function doSearch(){window.location.href='search.html';}

/* ══ AUTO-INIT ══ */
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('site-header');
  if(h){const p=h.dataset.page||'home';h.outerHTML=renderHeader(p);}
  const f=document.getElementById('site-footer');
  if(f) f.outerHTML=renderFooter();
  const sm=document.getElementById('search-mask');
  if(sm) renderSearchMask('search-mask');
});
