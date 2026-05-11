/* ══════════════════════════════════════════
   SunExpress Holidays — i18n Translation System
   Languages: TR (default) · DE · EN
   ══════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ─── GLOBAL NAV / FOOTER ─── */
  'nav.holidays':       { tr: 'Tatiller',        de: 'Urlaub',          en: 'Holidays' },
  'nav.search':         { tr: 'Arama',           de: 'Suche',           en: 'Search' },
  'nav.destinations':   { tr: 'Destinasyonlar',  de: 'Reiseziele',      en: 'Destinations' },
  'nav.booking':        { tr: 'Rezervasyon',      de: 'Buchung',         en: 'Booking' },
  'nav.login':          { tr: 'Giriş Yap',        de: 'Anmelden',        en: 'Log In' },
  'nav.book_now':       { tr: 'Rezervasyon Yap',  de: 'Jetzt buchen',    en: 'Book Now' },

  'footer.destinations':{ tr: 'Destinasyonlar',  de: 'Reiseziele',      en: 'Destinations' },
  'footer.help':        { tr: 'Yardım',           de: 'Hilfe',           en: 'Help' },
  'footer.company':     { tr: 'Şirket',           de: 'Unternehmen',     en: 'Company' },
  'footer.faq':         { tr: 'SSS',              de: 'FAQ',             en: 'FAQ' },
  'footer.cancel':      { tr: 'İptal Koşulları',  de: 'Stornierung',     en: 'Cancellation' },
  'footer.payment':     { tr: 'Ödeme',            de: 'Zahlung',         en: 'Payment' },
  'footer.contact':     { tr: 'İletişim',         de: 'Kontakt',         en: 'Contact' },
  'footer.about':       { tr: 'Hakkımızda',       de: 'Über uns',        en: 'About Us' },
  'footer.career':      { tr: 'Kariyer',          de: 'Karriere',        en: 'Careers' },
  'footer.kvkk':        { tr: 'KVKK',             de: 'Datenschutz',     en: 'Privacy' },
  'footer.privacy':     { tr: 'Gizlilik',         de: 'Datenschutz',     en: 'Privacy Policy' },
  'footer.tagline':     {
    tr: 'Güneş Ekspres Havacılık A.Ş. bünyesinde faaliyet gösteren tatil platformu. Akdeniz\'in en güzel destinasyonlarına uçuş + otel paketleri.',
    de: 'Reiseplattform von Güneş Ekspres Havacılık A.Ş. Flug + Hotel Pakete zu den schönsten Mittelmeerzielen.',
    en: 'Holiday platform by Güneş Ekspres Havacılık A.Ş. Flight + hotel packages to the finest Mediterranean destinations.'
  },
  'footer.copyright':   {
    tr: '© 2025 SunExpress Holidays · Güneş Ekspres Havacılık A.Ş.',
    de: '© 2025 SunExpress Holidays · Güneş Ekspres Havacılık A.Ş.',
    en: '© 2025 SunExpress Holidays · Güneş Ekspres Havacılık A.Ş.'
  },

  /* ─── SEARCH BAR ─── */
  'search.from':        { tr: 'Nereden',          de: 'Von',             en: 'From' },
  'search.to':          { tr: 'Nereye',           de: 'Wohin',           en: 'To' },
  'search.depart':      { tr: 'Gidiş',            de: 'Hinflug',         en: 'Departure' },
  'search.return':      { tr: 'Dönüş',            de: 'Rückflug',        en: 'Return' },
  'search.guests':      { tr: 'Kişi',             de: 'Personen',        en: 'Guests' },
  'search.nights7':     { tr: '7 gece',           de: '7 Nächte',        en: '7 nights' },
  'search.adults2':     { tr: '2 Yetişkin',       de: '2 Erwachsene',    en: '2 Adults' },
  'search.children0':   { tr: '0 Çocuk',          de: '0 Kinder',        en: '0 Children' },
  'search.allDest':     { tr: 'Tüm destinasyonlar', de: 'Alle Reiseziele', en: 'All destinations' },
  'search.btn':         { tr: 'Ara →',            de: 'Suchen →',        en: 'Search →' },

  /* ─── INDEX PAGE ─── */
  'home.eyebrow':       {
    tr: '✈ Antalya · Bodrum · İzmir · Dalaman · Hurghada',
    de: '✈ Antalya · Bodrum · İzmir · Dalaman · Hurghada',
    en: '✈ Antalya · Bodrum · İzmir · Dalaman · Hurghada'
  },
  'home.title1':        { tr: 'Hayalinizin',      de: 'Ihr Traumurlaub',  en: 'Your dream' },
  'home.title2':        { tr: 'tatili',           de: 'beginnt',          en: 'holiday' },
  'home.title3':        { tr: 'burada.',          de: 'hier.',            en: 'starts here.' },
  'home.subtitle':      {
    tr: 'Uçuş + otel paketleri, özel fiyatlarla. SunExpress güvencesiyle Akdeniz\'in en gözde destinasyonlarına.',
    de: 'Flug + Hotel Pakete zu Sonderpreisen. Mit SunExpress zu den beliebtesten Mittelmeerzielen.',
    en: 'Flight + hotel packages at exclusive prices. To the most popular Mediterranean destinations with SunExpress.'
  },
  'home.explore_pkgs':  { tr: 'Paketleri keşfet →', de: 'Pakete entdecken →', en: 'Explore packages →' },
  'home.destinations':  { tr: 'Destinasyonlar',   de: 'Reiseziele',       en: 'Destinations' },
  'home.pop_dest':      { tr: 'Popüler destinasyonlar', de: 'Beliebte Reiseziele', en: 'Popular destinations' },
  'home.see_all':       { tr: 'Tümünü gör →',     de: 'Alle anzeigen →',  en: 'See all →' },
  'home.deals':         { tr: 'Bu haftanın fırsatları', de: 'Angebote dieser Woche', en: 'This week\'s deals' },
  'home.why':           { tr: 'Neden SunExpress Holidays?', de: 'Warum SunExpress Holidays?', en: 'Why SunExpress Holidays?' },
  'home.promo_eyebrow': { tr: 'Özel kampanya',    de: 'Sonderaktion',     en: 'Special offer' },
  'home.promo_title':   {
    tr: 'Erken rezervasyona özel %15 indirim',
    de: '15% Rabatt bei Frühbuchung',
    en: '15% off for early booking'
  },
  'home.promo_sub':     {
    tr: '31 Temmuz 2025 tarihine kadar yapılan tüm rezervasyonlarda geçerlidir.',
    de: 'Gültig für alle Buchungen bis zum 31. Juli 2025.',
    en: 'Valid for all bookings made before July 31, 2025.'
  },
  'home.promo_btn':     { tr: 'Kampanyayı keşfet →', de: 'Angebot entdecken →', en: 'Explore offer →' },

  /* ─── PERKS ─── */
  'perk.secure_pay':    { tr: 'Güvenli ödeme',    de: 'Sichere Zahlung',  en: 'Secure payment' },
  'perk.secure_text':   {
    tr: 'Datatrans altyapısıyla 3D Secure korumalı ödeme. Kartınız her zaman güvende.',
    de: 'Zahlung mit 3D-Secure über Datatrans. Ihre Karte ist immer sicher.',
    en: 'Payment secured with 3D Secure via Datatrans. Your card is always protected.'
  },
  'perk.package':       { tr: 'Paket kolaylığı',  de: 'Paketkomfort',    en: 'Package convenience' },
  'perk.package_text':  {
    tr: 'Uçuş + otel + transfer tek rezervasyonda. Karmaşıklık yok, ekstra maliyet yok.',
    de: 'Flug + Hotel + Transfer in einer Buchung. Kein Aufwand, keine Zusatzkosten.',
    en: 'Flight + hotel + transfer in one booking. No hassle, no extra cost.'
  },
  'perk.support':       { tr: '7/24 Türkçe destek', de: '24/7 Support',  en: '24/7 Support' },
  'perk.support_text':  {
    tr: 'Tatil öncesi ve sırasında her sorunuza Türkçe yanıt veriyoruz. SLA garantisi ile.',
    de: 'Wir sind vor und während Ihres Urlaubs für Sie da. Mit SLA-Garantie.',
    en: 'We\'re here before and during your holiday. With SLA guarantee.'
  },
  'perk.sx_trust':      { tr: 'SunExpress güvencesi', de: 'SunExpress Qualität', en: 'SunExpress quality' },
  'perk.sx_text':       {
    tr: '30 yılı aşkın Lufthansa–THY ortak havacılık deneyimiyle tatil planlamanız emin ellerde.',
    de: 'Mit über 30 Jahren Lufthansa–THY Erfahrung ist Ihre Urlaubsplanung in besten Händen.',
    en: 'With 30+ years of Lufthansa–THY aviation experience, your holiday planning is in the best hands.'
  },
  'perk.hotels':        { tr: 'Özenle seçilmiş oteller', de: 'Sorgfältig ausgewählte Hotels', en: 'Carefully selected hotels' },
  'perk.hotels_text':   {
    tr: 'GIATA & TrustYou verileriyle doğrulanmış gerçek yorumlara dayalı otel seçimi.',
    de: 'Hotelauswahl basierend auf verifizierten GIATA & TrustYou-Bewertungen.',
    en: 'Hotel selection based on verified GIATA & TrustYou reviews.'
  },
  'perk.flexible':      { tr: 'Esnek iptaller',   de: 'Flexible Stornierung', en: 'Flexible cancellation' },
  'perk.flexible_text': {
    tr: 'Değişen planlarınıza uyum sağlayan esnek rezervasyon koşulları ve ücretsiz iptal.',
    de: 'Flexible Buchungsbedingungen und kostenlose Stornierung für Ihre geänderten Pläne.',
    en: 'Flexible booking conditions and free cancellation to adapt to your changing plans.'
  },

  /* ─── SEARCH RESULTS PAGE ─── */
  'sr.title':           { tr: 'Antalya tatil paketleri', de: 'Antalya Urlaubspakete', en: 'Antalya holiday packages' },
  'sr.found':           { tr: 'tesis bulundu',      de: 'Unterkünfte gefunden', en: 'properties found' },
  'sr.sort':            { tr: 'Önerilen sıralama',  de: 'Empfohlene Sortierung', en: 'Recommended' },
  'sr.sort_low':        { tr: 'Fiyat: Düşükten yükseğe', de: 'Preis: aufsteigend', en: 'Price: Low to High' },
  'sr.sort_high':       { tr: 'Fiyat: Yüksekten düşüğe', de: 'Preis: absteigend', en: 'Price: High to Low' },
  'sr.sort_score':      { tr: 'TrustYou puanına göre', de: 'Nach TrustYou-Bewertung', en: 'By TrustYou score' },
  'sr.filters':         { tr: 'Filtreler',          de: 'Filter',           en: 'Filters' },
  'sr.clear':           { tr: 'Temizle',            de: 'Löschen',          en: 'Clear' },
  'sr.stars':           { tr: 'Yıldız',             de: 'Sterne',           en: 'Stars' },
  'sr.board':           { tr: 'Pansiyon Tipi',      de: 'Verpflegung',      en: 'Board Type' },
  'sr.all_inc':         { tr: 'Her şey dahil',      de: 'All Inclusive',    en: 'All Inclusive' },
  'sr.ultra_ai':        { tr: 'Ultra her şey dahil', de: 'Ultra All Inclusive', en: 'Ultra All Inclusive' },
  'sr.half_board':      { tr: 'Yarım pansiyon',     de: 'Halbpension',      en: 'Half Board' },
  'sr.bb':              { tr: 'Oda kahvaltı',       de: 'Übernachtung/Frühstück', en: 'Bed & Breakfast' },
  'sr.room_only':       { tr: 'Sadece oda',         de: 'Nur Übernachtung', en: 'Room Only' },
  'sr.amenities':       { tr: 'Olanaklar',          de: 'Ausstattung',      en: 'Amenities' },
  'sr.pool':            { tr: 'Havuz',              de: 'Pool',             en: 'Pool' },
  'sr.beach':           { tr: 'Plaj erişimi',       de: 'Strandzugang',     en: 'Beach access' },
  'sr.spa':             { tr: 'Spa & Wellness',     de: 'Spa & Wellness',   en: 'Spa & Wellness' },
  'sr.kids_club':       { tr: 'Çocuk kulübü',       de: 'Kinderclub',       en: 'Kids club' },
  'sr.wifi':            { tr: 'Ücretsiz Wi-Fi',     de: 'Kostenloses WLAN', en: 'Free Wi-Fi' },
  'sr.sports':          { tr: 'Spor alanları',      de: 'Sportanlagen',     en: 'Sports facilities' },
  'sr.per_person':      { tr: 'kişi başı',          de: 'pro Person',       en: 'per person' },
  'sr.incl_flight':     { tr: 'uçak dahil',         de: 'inkl. Flug',       en: 'incl. flight' },
  'sr.details':         { tr: 'İncele →',           de: 'Details →',        en: 'Details →' },
  'sr.excellent':       { tr: 'Mükemmel',           de: 'Ausgezeichnet',    en: 'Excellent' },
  'sr.superb':          { tr: 'Olağanüstü',         de: 'Hervorragend',     en: 'Superb' },
  'sr.great':           { tr: 'Harika',             de: 'Sehr gut',         en: 'Wonderful' },
  'sr.good':            { tr: 'Çok iyi',            de: 'Gut',              en: 'Very good' },
  'sr.reviews':         { tr: 'yorum',              de: 'Bewertungen',      en: 'reviews' },
  'sr.early_badge':     { tr: 'Erken rezervasyon',  de: 'Frühbucher',       en: 'Early booking' },
  'sr.last_min':        { tr: 'Son dakika',         de: 'Last Minute',      en: 'Last minute' },
  'sr.popular':         { tr: 'Popüler',            de: 'Beliebt',          en: 'Popular' },
  'sr.new_dest':        { tr: 'Yeni destinasyon',   de: 'Neues Reiseziel',  en: 'New destination' },
  'sr.promo_text':      {
    tr: '🎉 Erken rezervasyon: Bu haftaya özel seçili otellerde %15 indirim!',
    de: '🎉 Frühbucher: Diese Woche 15% Rabatt auf ausgewählte Hotels!',
    en: '🎉 Early booking: 15% off selected hotels this week!'
  },
  'sr.promo_link':      { tr: 'Fırsatları gör', de: 'Angebote anzeigen', en: 'See offers' },

  /* ─── HOTEL DETAIL ─── */
  'hotel.all_photos':   { tr: 'Tüm fotoğraflar', de: 'Alle Fotos', en: 'All photos' },
  'hotel.excellent':    { tr: 'Mükemmel',         de: 'Ausgezeichnet', en: 'Excellent' },
  'hotel.reviews':      { tr: 'TrustYou değerlendirmesi', de: 'TrustYou-Bewertungen', en: 'TrustYou reviews' },
  'hotel.cleanliness':  { tr: 'Temizlik',         de: 'Sauberkeit',   en: 'Cleanliness' },
  'hotel.location':     { tr: 'Konum',            de: 'Lage',         en: 'Location' },
  'hotel.food':         { tr: 'Yemek',            de: 'Essen',        en: 'Food' },
  'hotel.staff':        { tr: 'Personel',         de: 'Personal',     en: 'Staff' },
  'hotel.value':        { tr: 'Değer/Para',       de: 'Preis/Leistung', en: 'Value for money' },
  'hotel.general':      { tr: 'Genel Bilgi',      de: 'Allgemein',    en: 'Overview' },
  'hotel.rooms':        { tr: 'Odalar',           de: 'Zimmer',       en: 'Rooms' },
  'hotel.amenities':    { tr: 'Olanaklar',        de: 'Ausstattung',  en: 'Amenities' },
  'hotel.reviews_tab':  { tr: 'Değerlendirmeler', de: 'Bewertungen',  en: 'Reviews' },
  'hotel.map':          { tr: 'Konum',            de: 'Karte',        en: 'Map' },
  'hotel.per_person':   { tr: 'kişi başı',        de: 'pro Person',   en: 'per person' },
  'hotel.incl_flight':  { tr: 'uçak dahil',       de: 'inkl. Flug',   en: 'incl. flight' },
  'hotel.select':       { tr: 'Seç →',            de: 'Wählen →',     en: 'Select →' },
  'hotel.book':         { tr: 'Rezervasyon Yap →', de: 'Jetzt buchen →', en: 'Book Now →' },
  'hotel.secure':       { tr: 'Datatrans güvenli ödeme · Ücretsiz iptal', de: 'Sichere Zahlung via Datatrans · Kostenlose Stornierung', en: 'Datatrans secure payment · Free cancellation' },
  'hotel.nights_label': { tr: 'gece · uçak dahil', de: 'Nächte · inkl. Flug', en: 'nights · incl. flight' },
  'hotel.adults':       { tr: 'Yetişkin',         de: 'Erwachsene',   en: 'Adults' },
  'hotel.children':     { tr: 'Çocuk (2–12 yaş)', de: 'Kinder (2–12 J.)', en: 'Children (2–12)' },
  'hotel.room_type':    { tr: 'Oda Tipi',         de: 'Zimmertyp',    en: 'Room Type' },
  'hotel.breakdown':    { tr: '2 kişi oda',       de: '2 Pers. Zimmer', en: '2 persons room' },
  'hotel.flight2':      { tr: '2 × uçak (SAW–AYT)', de: '2 × Flug (SAW–AYT)', en: '2 × flight (SAW–AYT)' },
  'hotel.transfer':     { tr: 'Havalimanı transferi', de: 'Flughafentransfer', en: 'Airport transfer' },
  'hotel.early_disc':   { tr: 'Erken rezervasyon indirimi', de: 'Frühbucher-Rabatt', en: 'Early booking discount' },
  'hotel.total':        { tr: 'Toplam (2 kişi)',  de: 'Gesamt (2 Pers.)', en: 'Total (2 persons)' },
  'hotel.amenity_pools':{ tr: '5 açık havuz',     de: '5 Außenpools',   en: '5 outdoor pools' },
  'hotel.amenity_beach':{ tr: '650m özel plaj',   de: '650m Privatstrand', en: '650m private beach' },

  /* ─── BOOKING PAGE ─── */
  'book.title':         { tr: 'Rezervasyon bilgileri', de: 'Buchungsdetails', en: 'Booking details' },
  'book.step1':         { tr: 'Otel seçimi',       de: 'Hotelauswahl',   en: 'Hotel selection' },
  'book.step2':         { tr: 'Uçuş seçimi',       de: 'Flugauswahl',    en: 'Flight selection' },
  'book.step3':         { tr: 'Yolcu bilgileri',   de: 'Passagiere',     en: 'Passenger info' },
  'book.step4':         { tr: 'Ödeme',             de: 'Zahlung',        en: 'Payment' },
  'book.step5':         { tr: 'Onay',              de: 'Bestätigung',    en: 'Confirmation' },
  'book.contact_title': { tr: 'İletişim bilgileri', de: 'Kontaktdaten',  en: 'Contact information' },
  'book.contact_sub':   { tr: 'Rezervasyon onayı bu adrese gönderilecek', de: 'Buchungsbestätigung wird an diese Adresse gesendet', en: 'Booking confirmation will be sent to this address' },
  'book.email':         { tr: 'E-posta',           de: 'E-Mail',         en: 'Email' },
  'book.phone':         { tr: 'Telefon',           de: 'Telefon',        en: 'Phone' },
  'book.lang':          { tr: 'Tercih edilen iletişim dili', de: 'Bevorzugte Sprache', en: 'Preferred language' },
  'book.pax_title':     { tr: 'Yolcu bilgileri',   de: 'Passagierdaten', en: 'Passenger information' },
  'book.pax_sub':       { tr: 'Pasaportunuzdaki bilgilerle aynı olmalıdır', de: 'Muss mit dem Reisepass übereinstimmen', en: 'Must match your passport exactly' },
  'book.title_mr':      { tr: 'Bay',               de: 'Herr',           en: 'Mr.' },
  'book.title_ms':      { tr: 'Bayan',             de: 'Frau',           en: 'Ms.' },
  'book.honorific':     { tr: 'Unvan',             de: 'Anrede',         en: 'Title' },
  'book.firstname':     { tr: 'Ad',                de: 'Vorname',        en: 'First Name' },
  'book.lastname':      { tr: 'Soyad',             de: 'Nachname',       en: 'Last Name' },
  'book.birthdate':     { tr: 'Doğum tarihi',      de: 'Geburtsdatum',   en: 'Date of Birth' },
  'book.nationality':   { tr: 'Uyruk',             de: 'Staatsangehörigkeit', en: 'Nationality' },
  'book.passport':      { tr: 'Pasaport / TC Kimlik No', de: 'Reisepass-Nr. / Ausweis-Nr.', en: 'Passport / ID Number' },
  'book.passport_exp':  { tr: 'Pasaport geçerlilik tarihi', de: 'Reisepass-Ablaufdatum', en: 'Passport expiry date' },
  'book.passport_hint': { tr: 'Dönüş tarihinden en az 6 ay sonrası olmalı', de: 'Mindestens 6 Monate nach Rückflug gültig', en: 'Must be valid at least 6 months after return' },
  'book.flight_title':  { tr: 'Uçuş seçimi',       de: 'Flugauswahl',    en: 'Flight selection' },
  'book.extras_title':  { tr: 'Ekstra hizmetler',  de: 'Zusatzleistungen', en: 'Extra services' },
  'book.extras_sub':    { tr: 'İsteğe bağlı eklemeler', de: 'Optionale Extras', en: 'Optional add-ons' },
  'book.transfer_name': { tr: '🚐 Havalimanı transferi (2 yön)', de: '🚐 Flughafentransfer (Hin & Rück)', en: '🚐 Airport transfer (2 ways)' },
  'book.transfer_desc': { tr: 'AYT havalimanı ↔ Rixos Premium Belek · Özel araç', de: 'AYT Flughafen ↔ Rixos Premium Belek · Privattransfer', en: 'AYT airport ↔ Rixos Premium Belek · Private vehicle' },
  'book.baggage_name':  { tr: '🧳 Ekstra bagaj (1 adet, 23kg)', de: '🧳 Zusatzgepäck (1 Stück, 23kg)', en: '🧳 Extra baggage (1 piece, 23kg)' },
  'book.baggage_desc':  { tr: 'Kişi başı ek bagaj hakkı, her iki yön için', de: 'Pro Person, für beide Richtungen', en: 'Per person, both directions' },
  'book.insurance_name':{ tr: '🛡 Seyahat sigortası', de: '🛡 Reiseversicherung', en: '🛡 Travel insurance' },
  'book.insurance_desc':{ tr: 'İptal, sağlık ve bagaj güvencesi · Europäische Reiseversicherung', de: 'Stornierung, Gesundheit & Gepäck · Europäische Reiseversicherung', en: 'Cancellation, health & baggage · Europäische Reiseversicherung' },
  'book.romantic_name': { tr: '🌹 Romantik paket', de: '🌹 Romantikpaket', en: '🌹 Romantic package' },
  'book.romantic_desc': { tr: 'Odada çiçek, şampanya ve özel süsleme · Odaya teslim', de: 'Blumen, Champagner und Dekoration im Zimmer', en: 'Flowers, champagne and special decoration in room' },
  'book.special_title': { tr: 'Özel istekler',     de: 'Sonderwünsche',  en: 'Special requests' },
  'book.special_sub':   { tr: 'Garanti edilemez, ancak iletilecektir', de: 'Nicht garantiert, wird aber weitergeleitet', en: 'Not guaranteed but will be forwarded' },
  'book.diet':          { tr: 'Diyet / Alerji bilgisi', de: 'Diät / Allergie', en: 'Diet / Allergy' },
  'book.diet_none':     { tr: 'Yok',               de: 'Keine',          en: 'None' },
  'book.vegetarian':    { tr: 'Vejetaryen',         de: 'Vegetarisch',    en: 'Vegetarian' },
  'book.vegan':         { tr: 'Vegan',              de: 'Vegan',          en: 'Vegan' },
  'book.glutenfree':    { tr: 'Glutensiz',          de: 'Glutenfrei',     en: 'Gluten-free' },
  'book.halal':         { tr: 'Helal',              de: 'Halal',          en: 'Halal' },
  'book.notes':         { tr: 'Özel notlar',        de: 'Besondere Hinweise', en: 'Special notes' },
  'book.notes_ph':      { tr: 'Balayı kutlaması, engelli erişimi, yüksek kat tercihi...', de: 'Flitterwochen, Barrierefreiheit, hohe Etage...', en: 'Honeymoon celebration, accessible room, high floor...' },
  'book.terms1':        { tr: 'Rezervasyon koşullarını ve gizlilik politikasını okudum, kabul ediyorum.', de: 'Ich akzeptiere die Buchungsbedingungen und Datenschutzrichtlinien.', en: 'I have read and accept the booking conditions and privacy policy.' },
  'book.terms2':        { tr: 'Kampanya ve duyurulardan haberdar olmak istiyorum (isteğe bağlı).', de: 'Ich möchte über Angebote und Neuigkeiten informiert werden (optional).', en: 'I would like to receive offers and updates (optional).' },
  'book.terms3':        { tr: 'KVKK kapsamında kişisel verilerimin işlenmesine onay veriyorum.', de: 'Ich stimme der Verarbeitung meiner persönlichen Daten zu.', en: 'I consent to the processing of my personal data.' },
  'book.next_payment':  { tr: 'Ödeme adımına geç →', de: 'Zur Zahlung →',  en: 'Proceed to payment →' },
  'book.trust':         { tr: 'SSL korumalı · Datatrans güvenli ödeme · Ücretsiz iptal (48 saate kadar)', de: 'SSL-gesichert · Datatrans sichere Zahlung · Kostenlose Stornierung (bis 48 Std.)', en: 'SSL secured · Datatrans secure payment · Free cancellation (up to 48h)' },
  'book.summary_hotel': { tr: 'Rixos Premium Belek', de: 'Rixos Premium Belek', en: 'Rixos Premium Belek' },
  'book.checkin':       { tr: '📅 Giriş',           de: '📅 Check-in',     en: '📅 Check-in' },
  'book.checkout':      { tr: '📅 Çıkış',           de: '📅 Check-out',    en: '📅 Check-out' },
  'book.nights':        { tr: '🌙 Gece',             de: '🌙 Nächte',       en: '🌙 Nights' },
  'book.persons':       { tr: '👥 Kişi',             de: '👥 Personen',     en: '👥 Persons' },
  'book.room':          { tr: '🛏 Oda',              de: '🛏 Zimmer',       en: '🛏 Room' },
  'book.flight_s':      { tr: '✈ Uçuş',             de: '✈ Flug',          en: '✈ Flight' },
  'book.transfer_s':    { tr: '🚐 Transfer',         de: '🚐 Transfer',      en: '🚐 Transfer' },
  'book.included':      { tr: 'Dahil',               de: 'Inklusive',       en: 'Included' },
  'book.saving':        { tr: '€195 tasarruf ettiniz!', de: 'Sie sparen €195!', en: 'You saved €195!' },
  'book.adult1':        { tr: 'Yetişkin 1 (Lider)',  de: 'Erwachsener 1 (Hauptreisender)', en: 'Adult 1 (Lead passenger)' },
  'book.adult2':        { tr: 'Yetişkin 2',          de: 'Erwachsener 2',  en: 'Adult 2' },
  'book.pax_per_person':{ tr: 'kişi',                de: 'Pers.',           en: 'per person' },
  'book.total_2':       { tr: 'Toplam (2 kişi)',     de: 'Gesamt (2 Pers.)',en: 'Total (2 persons)' },

  /* ─── DESTINATION PAGES ─── */
  'dest.search_btn':    { tr: 'Ara →',              de: 'Suchen →',       en: 'Search →' },
  'dest.practical':     { tr: 'Pratik bilgiler',    de: 'Praktische Informationen', en: 'Practical information' },
  'dest.hotels_region': { tr: 'Bölgeye göre oteller', de: 'Hotels nach Region', en: 'Hotels by region' },
  'dest.see_pkgs':      { tr: 'Paketleri gör →',   de: 'Pakete anzeigen →', en: 'See packages →' },
  'dest.other_dest':    { tr: 'Diğer destinasyonlar', de: 'Andere Reiseziele', en: 'Other destinations' },
  'dest.look_bodrum':   { tr: 'Bodrum\'a bak',      de: 'Bodrum ansehen', en: 'Check out Bodrum' },
  'dest.look_antalya':  { tr: 'Antalya\'ya bak',    de: 'Antalya ansehen', en: 'Check out Antalya' },
  'dest.detail_btn':    { tr: 'İncele',             de: 'Details',        en: 'Details' },
  'dest.from':          { tr: 'den',                de: 'ab',             en: 'from' },
  'dest.nights_short':  { tr: 'gece',               de: 'Nächte',         en: 'nights' },
  'dest.explore':       { tr: 'keşfedin',           de: 'entdecken',      en: 'explore' },
  'dest.discover':      { tr: 'Keşfet',             de: 'Entdecken',      en: 'Discover' },

  /* ─── ANTALYA ─── */
  'antalya.eyebrow':    { tr: '✈ İstanbul\'dan direkt · 1s 25dk', de: '✈ Direktflug ab Istanbul · 1Std 25Min', en: '✈ Direct from Istanbul · 1h 25min' },
  'antalya.title1':     { tr: 'Antalya', de: 'Antalya', en: 'Antalya' },
  'antalya.title2':     { tr: 'Turquoise Coast', de: 'Türkische Riviera', en: 'Turquoise Coast' },
  'antalya.subtitle':   { tr: 'Torosların gölgesinde turkuaz deniz. Dünya\'nın en uzun tatil sahili, antik kentler ve 300 güneşli günüyle Antalya sizi bekliyor.', de: 'Türkisblaues Meer im Schatten der Taurus-Berge. Mit der längsten Ferienküste der Welt, antiken Städten und 300 Sonnentagen erwartet Sie Antalya.', en: 'Turquoise sea in the shadow of the Taurus Mountains. Antalya awaits you with the world\'s longest holiday coast, ancient cities, and 300 sunny days.' },
  'antalya.stat1':      { tr: '300+', de: '300+', en: '300+' },
  'antalya.stat1l':     { tr: 'Güneşli gün / yıl', de: 'Sonnentage/Jahr', en: 'Sunny days/year' },
  'antalya.stat2l':     { tr: 'Yaz ortalaması', de: 'Ø Sommertemperatur', en: 'Summer average' },
  'antalya.stat3l':     { tr: 'Mavi bayraklı plaj', de: 'Blaue-Flagge-Strände', en: 'Blue flag beaches' },
  'antalya.stat4l':     { tr: 'Kişi başı / 7 gece', de: 'Pro Person / 7 Nächte', en: 'Per person / 7 nights' },
  'antalya.btn':        { tr: 'Antalya paketlerini gör →', de: 'Antalya Pakete anzeigen →', en: 'See Antalya packages →' },
  'antalya.weather_h':  { tr: 'Hava durumu', de: 'Wetter', en: 'Weather' },
  'antalya.weather_sub':{ tr: 'Antalya — Temmuz 2025', de: 'Antalya — Juli 2025', en: 'Antalya — July 2025' },
  'antalya.explore_h':  { tr: 'Antalya\'yı keşfedin', de: 'Antalya entdecken', en: 'Explore Antalya' },
  'antalya.cta_title':  { tr: 'Antalya\'yı hemen planla', de: 'Jetzt Antalya planen', en: 'Plan your Antalya trip now' },
  'antalya.cta_sub':    { tr: 'Erken rezervasyona özel %15 indirim · 31 Temmuz\'a kadar geçerli', de: '15% Frühbucher-Rabatt · Gültig bis 31. Juli', en: '15% early booking discount · Valid until July 31' },

  /* ─── BODRUM ─── */
  'bodrum.eyebrow':     { tr: '✈ İstanbul\'dan direkt · 1s 10dk', de: '✈ Direktflug ab Istanbul · 1Std 10Min', en: '✈ Direct from Istanbul · 1h 10min' },
  'bodrum.title1':      { tr: 'Bodrum', de: 'Bodrum', en: 'Bodrum' },
  'bodrum.title2':      { tr: 'Ege\'nin incisi', de: 'Perle der Ägäis', en: 'Pearl of the Aegean' },
  'bodrum.subtitle':    { tr: 'Antik Halikarnassos\'un üzerinde yükselen modern Bodrum. Kristal berraklığında koylar, efsanevi gece hayatı ve Egeli yaşam tarzı.', de: 'Das moderne Bodrum über dem antiken Halikarnassos. Kristallklare Buchten, legendäres Nachtleben und ägäisches Lebensgefühl.', en: 'Modern Bodrum rising above ancient Halicarnassus. Crystal-clear bays, legendary nightlife, and the Aegean way of life.' },
  'bodrum.btn':         { tr: 'Bodrum paketlerini gör →', de: 'Bodrum Pakete anzeigen →', en: 'See Bodrum packages →' },
  'bodrum.cta_title':   { tr: 'Bodrum\'u hemen planla', de: 'Jetzt Bodrum planen', en: 'Plan your Bodrum trip now' },
  'bodrum.cta_sub':     { tr: 'Bu yaz Ege\'nin incisinde unutulmaz bir tatil yaşayın', de: 'Erleben Sie diesen Sommer einen unvergesslichen Urlaub in der Perle der Ägäis', en: 'Enjoy an unforgettable holiday in the Pearl of the Aegean this summer' },

  /* ─── HURGHADA ─── */
  'hrg.eyebrow':        { tr: '✈ İstanbul\'dan direkt · 2s 30dk', de: '✈ Direktflug ab Istanbul · 2Std 30Min', en: '✈ Direct from Istanbul · 2h 30min' },
  'hrg.title1':         { tr: 'Hurghada', de: 'Hurghada', en: 'Hurghada' },
  'hrg.title2':         { tr: 'Kızıldeniz\'in kalbi', de: 'Herz des Roten Meeres', en: 'Heart of the Red Sea' },
  'hrg.subtitle':       { tr: 'Renk cümbüşü mercan resifleri, yılın 365 günü güneş ve her şey dahil lüks tatil köyleriyle Hurghada, Akdeniz alternatifinin ötesine geçiyor.', de: 'Farbenprächtige Korallenriffe, Sonne an 365 Tagen im Jahr und luxuriöse All-Inclusive-Resorts: Hurghada übertrifft jede Mittelmeer-Alternative.', en: 'Colorful coral reefs, sunshine 365 days a year and luxury all-inclusive resorts: Hurghada goes beyond any Mediterranean alternative.' },
  'hrg.new_badge':      { tr: '✨ Yeni destinasyon 2025', de: '✨ Neues Reiseziel 2025', en: '✨ New destination 2025' },
  'hrg.btn':            { tr: 'Hurghada paketlerini gör →', de: 'Hurghada Pakete anzeigen →', en: 'See Hurghada packages →' },
  'hrg.cta_title':      { tr: 'Kızıldeniz\'i keşfetmeye hazır mısın?', de: 'Bereit, das Rote Meer zu entdecken?', en: 'Ready to discover the Red Sea?' },
  'hrg.cta_sub':        { tr: '2025 yeni destinasyonu — erken rezervasyonda özel fiyatlar', de: 'Neues Reiseziel 2025 — Sonderpreise bei Frühbuchung', en: '2025 new destination — special prices for early booking' },
  'hrg.intro':          { tr: 'SunExpress Holidays\'in yeni destinasyonu Hurghada! 2025 yaz sezonuyla birlikte İstanbul Sabiha Gökçen\'den Hurghada\'ya direkt charter uçuşlarla Kızıldeniz\'in muhteşem tatil cennetine erişim sunuyoruz.', de: 'Hurghada — das neue Reiseziel von SunExpress Holidays! Ab Sommer 2025 bieten wir Direktcharterflüge von Istanbul Sabiha Gökçen nach Hurghada an.', en: 'Hurghada — the new destination from SunExpress Holidays! From summer 2025, we offer direct charter flights from Istanbul Sabiha Gökçen to Hurghada.' },
};

/* ════════════════════════════════════════════
   LANGUAGE SWITCHER ENGINE
   ════════════════════════════════════════════ */

const I18N = {
  current: 'tr',

  init() {
    // Restore saved language
    const saved = localStorage.getItem('sxh_lang') || 'tr';
    this.current = saved;
    this.apply();
    this.renderSwitcher();
  },

  t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.current] || entry['tr'] || key;
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('sxh_lang', lang);
    this.apply();
    this.updateSwitcherUI();
    // Update html lang attribute
    document.documentElement.lang = lang;
  },

  apply() {
    // Replace all data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const text = this.t(key);
      if (attr) {
        el.setAttribute(attr, text);
      } else {
        el.textContent = text;
      }
    });

    // data-i18n-html for innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key);
    });
  },

  renderSwitcher() {
    // Insert language switcher into nav
    const nav = document.querySelector('.sx-nav .nav-actions');
    if (!nav) return;

    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn ${this.current === 'tr' ? 'active' : ''}" data-lang="tr">TR</button>
      <button class="lang-btn ${this.current === 'de' ? 'active' : ''}" data-lang="de">DE</button>
      <button class="lang-btn ${this.current === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;

    // Insert before the first button in nav-actions
    nav.insertBefore(switcher, nav.firstChild);

    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  },

  updateSwitcherUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  }
};

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => I18N.init());
