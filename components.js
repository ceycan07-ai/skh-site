/**
 * SunExpress Holidays — Shared Components
 * Header • Footer • Search Mask • i18n (DE/EN/TR)
 */

/* ══════════════════════════════════════════
   LOGO SVG (inline)
══════════════════════════════════════════ */
const SXS_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.463 86.814" style="height:40px;width:auto" aria-label="SunExpress Holidays">
  <defs><style>.l1{fill:#00428f}.l2{fill:#ec6602}</style></defs>
  <path class="l1" d="M114.834,34.653c1.095.799,2.189,1.389,3.368,1.852,1.178.421,2.399.673,3.746.673,1.473,0,2.568-.294,3.367-.883.801-.589,1.179-1.389,1.179-2.4,0-.631-.084-1.178-.253-1.641-.167-.464-.463-.884-.841-1.263-.379-.379-.926-.758-1.558-1.094-.631-.337-1.431-.716-2.315-1.137-1.052-.463-1.978-.968-2.778-1.473-.842-.506-1.516-1.052-2.104-1.684-.59-.632-1.012-1.347-1.348-2.231-.294-.842-.463-1.852-.463-3.031,0-1.221.211-2.315.674-3.326.463-.967,1.052-1.809,1.851-2.441.801-.673,1.769-1.179,2.906-1.515,1.136-.337,2.357-.547,3.746-.547s2.694.168,3.914.547c1.221.336,2.231.799,3.073,1.346l-.926,4.632c-.799-.632-1.684-1.179-2.694-1.6-1.01-.422-2.105-.632-3.283-.632s-2.147.295-2.905.842c-.758.547-1.136,1.305-1.136,2.273,0,.589.084,1.053.295,1.473.168.421.463.759.799,1.095.337.336.8.631,1.347.926s1.179.589,1.895.926c1.052.463,2.02.968,2.903,1.432.927.463,1.685,1.052,2.358,1.683.674.631,1.179,1.389,1.6,2.231.378.842.589,1.894.589,3.157,0,2.736-.884,4.883-2.694,6.356-1.81,1.516-4.293,2.231-7.493,2.231-1.557,0-2.946-.21-4.209-.631s-2.316-.884-3.199-1.474l.589-4.672Z"/>
  <path class="l1" d="M133.945,20.72h4.925v13.512c0,1.052.21,1.852.59,2.4.379.547,1.01.841,1.894.841.758,0,1.388-.252,1.894-.715.505-.463.968-1.137,1.389-1.936v-14.102h4.841v20.248h-4.715v-2.442c-.21.295-.421.631-.715.968-.295.337-.631.673-1.01.926-.379.295-.843.548-1.348.716-.505.21-1.094.294-1.725.294-1.095,0-2.021-.168-2.778-.504-.759-.338-1.389-.801-1.853-1.432-.463-.631-.842-1.347-1.053-2.231-.21-.884-.336-1.852-.336-2.905v-13.638Z"/>
  <path class="l1" d="M152.55,20.594h4.715v2.441c.169-.294.421-.63.716-.968.294-.336.631-.673,1.052-.926.378-.295.841-.547,1.347-.715.505-.21,1.094-.295,1.726-.295,2.189,0,3.704.632,4.63,1.894.926,1.263,1.389,2.989,1.389,5.136v13.765h-4.925v-13.555c0-1.052-.211-1.852-.589-2.399-.378-.589-1.01-.842-1.894-.842-.758,0-1.39.253-1.895.716-.504.463-.967,1.136-1.388,1.936v14.186h-4.842v-20.374h-.042Z"/>
  <polygon class="l1" points="171.324 12.849 186.562 12.849 186.352 17.185 176.502 17.185 176.502 24.173 184.542 24.173 184.542 28.508 176.502 28.508 176.502 36.548 187.025 36.548 187.025 40.926 171.324 40.926 171.324 12.849"/>
  <path class="l1" d="M188.457,40.925c.547-.968,1.052-1.894,1.557-2.736.506-.884,1.01-1.768,1.557-2.652.505-.799,1.011-1.642,1.516-2.484.547-.842,1.053-1.641,1.557-2.441-.547-.842-1.052-1.684-1.557-2.526-.505-.841-1.011-1.725-1.516-2.525-.505-.8-.968-1.642-1.388-2.442-.463-.842-.927-1.641-1.39-2.442h5.515l1.22,2.4c.253.463.548,1.011.842,1.642.337.59.674,1.178,1.011,1.726.337-.506.674-1.095,1.052-1.726.378-.673.758-1.221,1.052-1.726.211-.337.421-.716.632-1.094.21-.379.42-.759.631-1.179h5.178c-.505.842-.968,1.684-1.431,2.442-.463.799-.927,1.599-1.432,2.441-.462.8-.968,1.599-1.473,2.399-.505.8-1.01,1.599-1.516,2.316.506.799,1.011,1.683,1.558,2.567.548.926,1.095,1.811,1.557,2.694.505.884,1.01,1.768,1.516,2.652.505.884,1.01,1.811,1.558,2.778h-5.515l-1.557-2.862-1.979-3.451-1.979,3.283c-.294.463-.547.926-.84,1.431-.296.505-.59,1.01-.885,1.557h-5.051v-.042Z"/>
  <path class="l1" d="M208.114,20.594h4.841v1.474c.463-.548,1.011-1.01,1.727-1.39.714-.378,1.515-.547,2.483-.547,2.273,0,4.041.885,5.346,2.61,1.305,1.768,1.936,4.378,1.936,7.83,0,3.62-.631,6.356-1.936,8.124-1.305,1.768-3.031,2.652-5.178,2.652-.631,0-1.179-.085-1.684-.21-.463-.169-.883-.338-1.262-.548-.337-.21-.631-.463-.884-.716-.252-.252-.421-.504-.59-.757v11.06h-4.883v-29.582h.084Z"/>
  <path class="l1" d="M226.637,20.594h4.714v3.157c.211-.463.505-.884.801-1.304.294-.422.672-.8,1.051-1.095.421-.295.884-.589,1.431-.758.548-.168,1.18-.294,1.895-.294.504,0,.926.041,1.304.126l-.463,4.167c-.168-.042-.337-.084-.546-.126-.169-.042-.421-.042-.674-.042-1.052,0-1.979.252-2.737.715-.756.464-1.43,1.263-1.978,2.4v13.344h-4.841v-20.29h.043Z"/>
  <path class="l1" d="M253.073,39.495c-.632.546-1.475,1.01-2.442,1.346-.968.337-2.232.505-3.79.505-1.346,0-2.567-.253-3.662-.758-1.093-.504-2.062-1.22-2.861-2.146-.801-.926-1.39-2.063-1.811-3.367-.42-1.306-.673-2.737-.673-4.294,0-3.368.715-6.02,2.146-7.872,1.433-1.852,3.368-2.82,5.852-2.82s4.336.8,5.556,2.399c1.263,1.6,1.852,3.747,1.852,6.482,0,.464,0,.927-.042,1.39-.042.463-.042.842-.125,1.137h-10.399c.042.841.169,1.641.463,2.357.295.715.674,1.305,1.179,1.852.463.505,1.011.926,1.643,1.22.63.295,1.262.422,1.977.422,1.853,0,3.452-.632,4.757-1.853l.38,4Z"/>
  <path class="l1" d="M255.64,35.495c.716.547,1.557,1.01,2.482,1.473.969.421,1.938.674,2.948.674.337,0,.632-.042.968-.084s.631-.169.883-.337c.253-.168.464-.379.632-.631.169-.253.253-.59.253-1.011,0-.757-.295-1.347-.885-1.81-.589-.463-1.346-.841-2.272-1.22-.716-.295-1.347-.632-1.979-1.011-.632-.378-1.178-.799-1.641-1.305-.463-.505-.842-1.052-1.137-1.726-.295-.673-.421-1.473-.421-2.356,0-.927.211-1.769.589-2.527.379-.757.927-1.389,1.558-1.894.631-.505,1.389-.925,2.231-1.178.842-.295,1.726-.421,2.652-.421,1.179,0,2.231.126,3.115.378.883.254,1.684.548,2.4.927l-.632,3.914c-.632-.42-1.348-.799-2.146-1.136-.801-.337-1.643-.506-2.611-.506-.589,0-1.136.169-1.683.506-.505.337-.758.842-.758,1.473,0,.337.084.631.168.884.127.253.337.506.59.716.294.21.631.463,1.094.673.463.211,1.01.463,1.642.758.631.295,1.262.59,1.852.926.588.336,1.136.758,1.599,1.263.463.463.842,1.052,1.095,1.683.295.674.421,1.432.421,2.316,0,2.062-.674,3.62-1.979,4.714-1.346,1.095-3.115,1.684-5.388,1.684-1.262,0-2.357-.126-3.325-.378-.968-.253-1.895-.632-2.821-1.095l.506-4.336Z"/>
  <path class="l1" d="M270.414,35.495c.716.547,1.558,1.01,2.483,1.473.968.421,1.937.674,2.948.674.336,0,.631-.042.967-.084.337-.042.632-.169.884-.337.253-.168.463-.379.632-.631.169-.253.253-.59.253-1.011,0-.757-.295-1.347-.885-1.81-.589-.463-1.346-.841-2.272-1.22-.716-.295-1.348-.632-1.979-1.011-.632-.378-1.179-.799-1.642-1.305-.463-.505-.841-1.052-1.094-1.726-.295-.673-.421-1.473-.421-2.356,0-.927.211-1.769.589-2.527.379-.757.926-1.389,1.558-1.894.631-.505,1.389-.925,2.231-1.178.842-.295,1.726-.421,2.651-.421,1.18,0,2.232.126,3.116.378.883.254,1.683.548,2.399.927l-.631,3.914c-.632-.42-1.348-.799-2.147-1.136-.8-.337-1.642-.506-2.61-.506-.59,0-1.136.169-1.683.506-.506.337-.759.842-.759,1.473,0,.337.043.631.169.884.127.253.337.506.59.716.252.21.631.463,1.093.673.421.211.969.463,1.643.758.631.295,1.262.59,1.852.926.588.336,1.136.758,1.599,1.263.463.463.8,1.052,1.094,1.683.254.674.421,1.432.421,2.316,0,2.062-.673,3.62-2.021,4.714-1.345,1.095-3.114,1.684-5.345,1.684-1.263,0-2.357-.126-3.326-.378-.968-.253-1.894-.632-2.82-1.095l.463-4.336Z"/>
  <path class="l1" d="M19.516,7.376c-.261-.065-.522,0-.784.13-.782.523-1.566,1.11-2.349,1.763-.392.326-.522.849-.261,1.24l7.376,12.794.391.522-.522-.392-12.859-7.376c-.392-.261-.979-.13-1.305.261-.588.784-1.176,1.567-1.763,2.35-.131.262-.196.522-.131.783.066.262.262.523.457.654l21.868,12.597c.13.066.326.131.522.131.26,0,.522-.131.718-.326.521-.588,1.044-1.11,1.566-1.567.327-.326.457-.849.196-1.24L20.169,7.833c-.131-.261-.392-.392-.653-.457"/>
  <path class="l1" d="M54.764,58.877c-14.947,1.11-35.64,4.374-50.457,3.59,1.567,3.199,3.525,6.136,5.81,8.878,1.305,1.501,2.676,2.937,4.178,4.307,8.093,7.181,18.472,11.162,29.242,11.162,10.836,0,21.214-3.916,29.178-11.031,3.328-2.937,6.005-6.071,8.094-9.53,1.435-2.35,2.61-4.831,3.59-7.506-6.397-1.24-17.298-.784-29.635.13"/>
  <path class="l1" d="M79.568,19.451c.065-.261,0-.522-.13-.784-.523-.783-1.11-1.566-1.763-2.349-.326-.391-.849-.457-1.24-.261l-12.859,7.441-.523.391.392-.521,7.376-12.794c.262-.392.131-.979-.26-1.241-.784-.587-1.567-1.175-2.351-1.762-.195-.13-.521-.195-.783-.13-.261.065-.522.26-.652.456l-12.664,21.867c-.065.131-.13.327-.13.522,0,.261.13.523.326.719.588.456,1.11,1.044,1.567,1.566.326.327.848.457,1.24.196l21.866-12.598c.393-.196.523-.457.588-.718"/>
  <path class="l1" d="M62.793,4.634c-.065-.261-.261-.457-.521-.587-.85-.392-1.763-.783-2.677-1.176-.457-.195-.979,0-1.24.393l-7.376,12.793-.261.587.065-.652V1.305c0-.522-.392-.914-.849-.979-.979-.13-1.958-.261-2.872-.326-.261,0-.522.065-.718.261s-.326.456-.326.718v25.26c0,.197.065.328.13.523.13.261.392.392.653.457.719.13,1.436.327,2.154.587.457.131.914-.065,1.175-.457l12.663-21.866c0-.261.065-.588,0-.849"/>
  <path class="l1" d="M86.748,40.665c.196-.195.261-.457.261-.783-.065-.98-.196-1.959-.326-2.872-.065-.457-.456-.848-.979-.848h-14.817l-.654.065.588-.261,12.859-7.376c.458-.262.588-.784.458-1.241-.328-.913-.784-1.827-1.176-2.676-.131-.261-.326-.457-.587-.523-.261-.065-.523-.065-.784.066l-21.867,12.598c-.13.065-.261.196-.391.327-.13.26-.196.522-.065.782.261.719.456,1.437.587,2.155.066.457.522.783.98.783h25.26c.196.13.457,0,.653-.196"/>
  <path class="l1" d="M4.699,24.151c-.261.065-.457.261-.588.522-.391.849-.783,1.763-1.175,2.676-.195.457,0,.98.458,1.24l12.793,7.376.587.261-.652-.065H1.305c-.523,0-.914.327-.979.849-.131.979-.261,1.958-.326,2.872,0,.261.065.522.261.718.195.196.456.326.717.326h25.261c.197,0,.327-.065.522-.13.262-.13.392-.392.458-.653.13-.718.326-1.436.587-2.154.131-.457,0-.914-.457-1.175L5.483,24.216c-.262-.13-.523-.13-.784-.065"/>
  <path class="l1" d="M40.796.261c-.196-.196-.457-.261-.784-.261-.979.065-1.958.196-2.871.326-.523.065-.849.457-.849.979v14.817l.066.654-.262-.588-7.376-12.794c-.261-.391-.783-.588-1.24-.391-.913.326-1.828.782-2.676,1.175-.261.13-.458.326-.523.586-.065.262-.065.523.065.784l12.663,21.867c.066.131.197.261.393.391.261.131.521.196.849.066.717-.261,1.435-.457,2.153-.588.457-.065.783-.522.783-.979V1.044c-.13-.392-.196-.653-.391-.783"/>
  <path class="l2" d="M84.268,46.475c-9.139,0-16.122,2.219-34.269,6.071-25.653,5.417-43.864.979-48.042.391-.652-.065-1.044.261-.848.914.457,2.089,2.023,6.527,3.133,8.551,14.882.783,35.509-2.48,50.457-3.59,12.337-.914,23.237-1.371,29.634-.065,1.045-2.938,1.829-6.005,2.285-9.334.392-1.894.195-2.938-2.35-2.938"/>
  <path class="l2" d="M.848,49.543c.849.326,12.729,4.373,31.135,4.634,5.222.065,11.881-.717,15.862-1.566-2.089.326-6.527.979-12.01.979-10.574-.065-26.697-3.721-34.334-7.18-.327-.131-.653-.065-.979.13-.262.196-.458.523-.392.914.065.457.065.98.13,1.436.066.262.131.457.588.653"/>
  <path class="l1" d="M131.271,72.305h-3.36v-10.464h-9.344v10.464h-3.36v-22.848h3.36v9.472h9.344v-9.472h3.36v22.848Z"/>
  <path class="l1" d="M150.215,63.633c0,2.795-.641,4.992-1.92,6.592-1.281,1.6-3.104,2.4-5.473,2.4-1.472,0-2.752-.362-3.84-1.088-1.088-.725-1.931-1.76-2.528-3.104-.598-1.344-.896-2.944-.896-4.8,0-2.816.634-5.002,1.904-6.56,1.269-1.557,3.088-2.336,5.456-2.336,2.175,0,3.935.768,5.279,2.304,1.344,1.536,2.018,3.734,2.018,6.592Z"/>
  <path class="l1" d="M157.446,72.305h-3.296v-24.32h3.296v24.32Z"/>
  <path class="l1" d="M163.91,48.465c.532,0,.976.16,1.327.48.353.32.528.821.528,1.504,0,.662-.176,1.157-.528,1.488-.352.331-.795.496-1.327.496s-.977-.165-1.328-.496c-.353-.331-.528-.826-.528-1.488,0-.683.176-1.184.528-1.504.352-.32.794-.48,1.328-.48ZM165.542,55.057v17.248h-3.296v-17.248h3.296Z"/>
  <path class="l1" d="M175.718,72.624c-1.941,0-3.468-.757-4.576-2.272-1.109-1.514-1.664-3.733-1.664-6.656s.56-5.146,1.68-6.672,2.641-2.288,4.561-2.288c1.108,0,2.053.235,2.832.704.778.469,1.402,1.077,1.872,1.824h.159v-6.56h3.264v24.32h-2.592l-.512-2.208h-.16c-.491.747-1.109,1.355-1.856,1.824-.747.469-1.686.704-2.815.704Z"/>
  <path class="l1" d="M194.597,54.737c3.883,0,5.824,1.973,5.824,5.92v11.648h-2.4l-.576-2.4h-.096c-.661.917-1.371,1.6-2.128,2.048-.758.448-1.766.672-3.024.672-1.493,0-2.677-.458-3.552-1.376-.875-.917-1.312-2.197-1.312-3.84,0-3.499,2.41-5.344,7.231-5.536l2.624-.096v-.96c0-1.259-.251-2.155-.752-2.688s-1.222-.8-2.16-.8c-.747,0-1.478.118-2.191.352-.715.235-1.414.523-2.097.864l-1.023-2.368c.768-.427,1.637-.773,2.607-1.04.971-.267,1.979-.4,3.024-.4Z"/>
  <path class="l1" d="M202.789,55.057h3.487l3.072,9.6c.234.704.437,1.392.608,2.064.17.672.309,1.328.416,1.968h.128c.106-.533.25-1.152.432-1.856.181-.704.389-1.429.624-2.176l2.944-9.6h3.456l-6.528,19.584c-.598,1.749-1.365,3.077-2.304,3.984-.939.907-2.166,1.36-3.681,1.36-.427,0-.815-.027-1.168-.08-.352-.054-.667-.112-.943-.176v-2.688c.234.042.495.085.783.128s.581.064.881.064c.853,0,1.524-.262,2.016-.784.49-.523.906-1.296,1.248-2.32l.607-1.856-6.079-17.216Z"/>
  <path class="l1" d="M230.692,67.473c0,1.686-.555,2.965-1.664,3.84-1.109.875-2.656,1.312-4.64,1.312-1.046,0-1.974-.085-2.784-.256s-1.547-.426-2.208-.768v-3.008c.661.363,1.44.683,2.336.96.896.277,1.781.416,2.656.416,1.066,0,1.851-.203,2.352-.608s.752-.949.752-1.632c0-.384-.096-.73-.288-1.04-.191-.309-.544-.624-1.056-.944s-1.248-.693-2.208-1.12c-.96-.426-1.781-.869-2.464-1.328-.683-.458-1.2-.997-1.552-1.616-.353-.619-.528-1.387-.528-2.304,0-1.472.544-2.613,1.632-3.424,1.088-.811,2.539-1.216,4.353-1.216.938,0,1.823.102,2.655.304.832.203,1.643.496,2.433.88l-1.057,2.528c-.661-.32-1.327-.581-2-.784-.672-.202-1.37-.304-2.096-.304-.896,0-1.579.166-2.048.496-.47.331-.704.784-.704,1.36,0,.405.106.757.32,1.056.213.299.586.598,1.12.896.532.299,1.258.662,2.176,1.088.917.427,1.717.864,2.399,1.312.683.448,1.205.981,1.568,1.6.362.619.544,1.387.544,2.304Z"/>
</svg>`;

/* ══════════════════════════════════════════
   i18n TRANSLATIONS
══════════════════════════════════════════ */
const I18N = {
  de: {
    nav: { home:'Startseite', offers:'Angebote', dest:'Ziele', hotels:'Hotels', help:'Hilfe' },
    header: { contact:'Kontakt', favorites:'Merkliste' },
    tabs: { sunbeach:'Sun & Beach', own:'Create Your Own', flights:'Flüge' },
    search: { dest:'Reiseziel', airport:'Abflughafen', dates:'Reisedatum', travelers:'Reisende', btn:'Suchen',
              nights:'Nächte', adults:'Erwachsene', adultsAge:'Ab 18 Jahren', children:'Kinder',
              childrenAge:'Unter 18 Jahren', childAge:'Alter Kind', apply:'Übernehmen',
              destPh:'Antalya, Türkei', airportPh:'Frankfurt (FRA)', datesVal:'15. Jul — 22. Jul' },
    usp: ['Bestpreisgarantie','Direktflüge mit SunExpress','ATOL gesichert','24/7 Kundenservice','Flexible Zahlung'],
    footer: { tagline:'Ihr Spezialist für Sonnenurlaub. Ein Unternehmen von Turkish Airlines & Lufthansa.' },
    hotel: { bookNow:'Jetzt buchen', details:'Details ansehen', perPerson:'pro Person', nights:'Nächte', adults:'Erw.' },
    booking: {
      title:'Buchung abschließen', step1:'Reisende', step2:'Kontakt', step3:'Zahlung', step4:'Bestätigung',
      firstName:'Vorname', lastName:'Nachname', dob:'Geburtsdatum', passport:'Reisepassnummer',
      email:'E-Mail', phone:'Telefon', street:'Straße', city:'Stadt', zip:'PLZ', country:'Land',
      cardNumber:'Kartennummer', expiry:'Gültig bis', cvv:'CVV', cardName:'Name auf der Karte',
      summary:'Buchungsübersicht', total:'Gesamtpreis', submit:'Jetzt buchen & bezahlen',
      terms:'Ich akzeptiere die AGB und Datenschutzerklärung', required:'Pflichtfeld'
    }
  },
  en: {
    nav: { home:'Home', offers:'Offers', dest:'Destinations', hotels:'Hotels', help:'Help' },
    header: { contact:'Contact', favorites:'Favorites' },
    tabs: { sunbeach:'Sun & Beach', own:'Create Your Own', flights:'Flights' },
    search: { dest:'Destination', airport:'Departure Airport', dates:'Travel Dates', travelers:'Travelers', btn:'Search',
              nights:'nights', adults:'Adults', adultsAge:'18 years and over', children:'Children',
              childrenAge:'Under 18 years', childAge:'Child Age', apply:'Apply',
              destPh:'Antalya, Turkey', airportPh:'Frankfurt (FRA)', datesVal:'15 Jul — 22 Jul' },
    usp: ['Best Price Guarantee','Direct flights with SunExpress','ATOL protected','24/7 Customer Service','Flexible Payment'],
    footer: { tagline:'Your sun holiday specialist. A joint venture of Turkish Airlines & Lufthansa.' },
    hotel: { bookNow:'Book now', details:'View details', perPerson:'per person', nights:'nights', adults:'adults' },
    booking: {
      title:'Complete booking', step1:'Travellers', step2:'Contact', step3:'Payment', step4:'Confirmation',
      firstName:'First name', lastName:'Last name', dob:'Date of birth', passport:'Passport number',
      email:'Email', phone:'Phone', street:'Street', city:'City', zip:'Postcode', country:'Country',
      cardNumber:'Card number', expiry:'Expiry', cvv:'CVV', cardName:'Name on card',
      summary:'Booking summary', total:'Total price', submit:'Book & pay now',
      terms:'I accept the Terms & Conditions and Privacy Policy', required:'Required'
    }
  },
  tr: {
    nav: { home:'Ana Sayfa', offers:'Teklifler', dest:'Destinasyonlar', hotels:'Oteller', help:'Yardım' },
    header: { contact:'İletişim', favorites:'Favoriler' },
    tabs: { sunbeach:'Güneş & Plaj', own:'Kendin Oluştur', flights:'Uçuşlar' },
    search: { dest:'Destinasyon', airport:'Kalkış Havalimanı', dates:'Seyahat Tarihi', travelers:'Yolcular', btn:'Ara',
              nights:'gece', adults:'Yetişkin', adultsAge:'18 yaş ve üzeri', children:'Çocuk',
              childrenAge:'18 yaşın altında', childAge:'Çocuk Yaşı', apply:'Uygula',
              destPh:'Antalya, Türkiye', airportPh:'Frankfurt (FRA)', datesVal:'15 Tem — 22 Tem' },
    usp: ['En İyi Fiyat Garantisi','SunExpress ile Direkt Uçuş','ATOL güvenceli','7/24 Müşteri Hizmetleri','Esnek Ödeme'],
    footer: { tagline:'Güneş tatili uzmanınız. Turkish Airlines ve Lufthansa ortak girişimi.' },
    hotel: { bookNow:'Şimdi Rezervasyon', details:'Detayları Gör', perPerson:'kişi başına', nights:'gece', adults:'yetişkin' },
    booking: {
      title:'Rezervasyonu Tamamla', step1:'Yolcular', step2:'İletişim', step3:'Ödeme', step4:'Onay',
      firstName:'Ad', lastName:'Soyad', dob:'Doğum Tarihi', passport:'Pasaport Numarası',
      email:'E-posta', phone:'Telefon', street:'Sokak', city:'Şehir', zip:'Posta Kodu', country:'Ülke',
      cardNumber:'Kart Numarası', expiry:'Son Kullanma', cvv:'CVV', cardName:'Kart Üzerindeki Ad',
      summary:'Rezervasyon Özeti', total:'Toplam Fiyat', submit:'Şimdi Rezervasyon Yap ve Öde',
      terms:'Şartlar ve Koşulları ve Gizlilik Politikasını kabul ediyorum', required:'Zorunlu alan'
    }
  }
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let currentLang = localStorage.getItem('sxh-lang') || 'de';

const searchState = {
  adults: 2, children: 0, childAges: [],
  dest: '', airport: '', dates: '', nights: 7, tab: 'sunbeach'
};

function t(section, key) {
  return (I18N[currentLang]?.[section]?.[key]) || (I18N.de[section]?.[key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sxh-lang', lang);
  location.reload();
}

/* ══════════════════════════════════════════
   UNSPLASH
══════════════════════════════════════════ */
const UNSPLASH_KEY = 'i2yfxF4kYEr9M2VD_gPcxVA7vW6VHQlP6cuFipkMneM';
const imgCache = {};

async function fetchUnsplashImg(query, id) {
  if (imgCache[query]) { applyImg(id, imgCache[query]); return; }
  try {
    const r = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_KEY}`);
    const d = await r.json();
    if (d && d.urls) {
      imgCache[query] = d.urls.regular;
      applyImg(id, d.urls.regular);
    }
  } catch(e) { /* keep gradient fallback */ }
}

function applyImg(id, url) {
  const el = document.getElementById(id);
  if (el) {
    el.style.backgroundImage = `url(${url})`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    el.style.color = '#fff';
    el.innerHTML = el.querySelector('.img-overlay') ? el.innerHTML : `<div class="img-overlay" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 60%);border-radius:inherit"></div>` + (el.innerHTML || '');
  }
}

/* ══════════════════════════════════════════
   HEADER
══════════════════════════════════════════ */
function renderHeader(activePage) {
  const nav = [
    { id:'home',    href:'index.html',   key:'home' },
    { id:'search',  href:'search.html',  key:'offers' },
    { id:'dest',    href:'#',            key:'dest' },
    { id:'hotels',  href:'#',            key:'hotels' },
    { id:'help',    href:'#',            key:'help' },
  ];
  const navHTML = nav.map(n =>
    `<a href="${n.href}" class="${n.id===activePage?'active':''}">${t('nav',n.key)}</a>`
  ).join('');

  const langHTML = ['de','en','tr'].map(l =>
    `<button class="lang-btn ${l===currentLang?'active':''}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`
  ).join('');

  return `
  <header class="site-header">
    <a class="header-logo" href="index.html">${SXS_LOGO}</a>
    <nav class="header-nav">${navHTML}</nav>
    <div class="header-actions">
      <div class="lang-selector">${langHTML}</div>
      <button class="btn btn-outline btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
        ${t('header','contact')}
      </button>
      <button class="btn btn-primary btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        ${t('header','favorites')}
      </button>
    </div>
  </header>`;
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function renderFooter() {
  const logoFooter = SXS_LOGO.replace('style="height:40px;width:auto"','style="height:32px;width:auto;filter:brightness(0) invert(1);opacity:.9"');
  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        ${logoFooter}
        <p>${t('footer','tagline')}</p>
      </div>
      <div class="footer-col">
        <h5>${t('nav','dest')}</h5>
        <a href="#">Antalya</a><a href="#">Bodrum</a><a href="#">İzmir</a>
        <a href="#">Dalaman</a><a href="#">Hurghada</a><a href="#">Marsa Alam</a>
      </div>
      <div class="footer-col">
        <h5>Service</h5>
        <a href="#">Buchungsmanager</a><a href="#">Online Check-in</a>
        <a href="#">Gepäckinfo</a><a href="#">Transfers</a><a href="#">FAQ</a>
      </div>
      <div class="footer-col">
        <h5>Unternehmen</h5>
        <a href="#">Über uns</a><a href="#">Presse</a>
        <a href="#">Karriere</a><a href="#">AGB</a><a href="#">Datenschutz</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 SunExpress Holidays — Güneş Ekspres Havacılık A.Ş., Antalya</p>
      <div class="footer-chips">
        <span class="footer-chip">Turkish Airlines</span>
        <span class="footer-chip">Lufthansa</span>
        <span class="footer-chip">Star Alliance</span>
      </div>
    </div>
  </footer>`;
}

/* ══════════════════════════════════════════
   SEARCH MASK
══════════════════════════════════════════ */
function guestsLabel() {
  const s = searchState;
  let l = `${s.adults} ${t('search','adults')}`;
  if (s.children > 0) l += `, ${s.children} ${t('search','children')}`;
  return l;
}

function buildGuestsDropdown() {
  let agesHTML = '';
  if (searchState.children > 0) {
    const items = searchState.childAges.map((age,i) => `
      <div class="child-age-item">
        <label>${t('search','childAge')} ${i+1}</label>
        <select onchange="setChildAge(${i},this.value)" aria-label="${t('search','childAge')} ${i+1}">
          ${Array.from({length:18},(_,y)=>`<option value="${y}" ${age==y?'selected':''}>${y===0?'< 1 Jahr':y===1?'1 Jahr':y+' Jahre'}</option>`).join('')}
        </select>
      </div>`).join('');
    agesHTML = `<div class="child-ages-section"><div class="child-ages-title">${t('search','childAge')} (${t('search','childrenAge')})</div><div class="child-ages-grid">${items}</div></div>`;
  }
  return `
    <div class="guests-row">
      <div><div class="guests-label">${t('search','adults')}</div><div class="guests-label-sub">${t('search','adultsAge')}</div></div>
      <div class="guests-counter">
        <button class="g-btn" onclick="changeGuests('adults',-1)" ${searchState.adults<=1?'disabled':''}>−</button>
        <span class="g-count" id="adults-count">${searchState.adults}</span>
        <button class="g-btn" onclick="changeGuests('adults',1)" ${searchState.adults>=9?'disabled':''}>+</button>
      </div>
    </div>
    <div class="guests-row">
      <div><div class="guests-label">${t('search','children')}</div><div class="guests-label-sub">${t('search','childrenAge')}</div></div>
      <div class="guests-counter">
        <button class="g-btn" onclick="changeGuests('children',-1)" ${searchState.children<=0?'disabled':''}>−</button>
        <span class="g-count" id="children-count">${searchState.children}</span>
        <button class="g-btn" onclick="changeGuests('children',1)" ${searchState.children>=6?'disabled':''}>+</button>
      </div>
    </div>
    ${agesHTML}
    <button class="btn btn-primary guests-apply-btn" onclick="closeGuests()">${t('search','apply')}</button>`;
}

function changeGuests(type, delta) {
  if (type==='adults') { searchState.adults = Math.max(1,Math.min(9,searchState.adults+delta)); }
  else {
    const prev = searchState.children;
    searchState.children = Math.max(0,Math.min(6,searchState.children+delta));
    if (searchState.children > prev) searchState.childAges.push(8);
    else searchState.childAges.pop();
  }
  const dd = document.getElementById('guests-dropdown');
  if (dd) dd.innerHTML = buildGuestsDropdown();
  const lbl = document.getElementById('guests-label');
  if (lbl) lbl.textContent = guestsLabel();
}

function setChildAge(i,v) { searchState.childAges[i] = parseInt(v); }

function closeGuests() {
  const dd = document.getElementById('guests-dropdown');
  if (dd) dd.classList.remove('open');
}

function renderSearchMask(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
  <div class="search-wrap">
    <div class="search-tabs">
      <button class="search-tab active" data-tab="sunbeach">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        ${t('tabs','sunbeach')}
      </button>
      <button class="search-tab" data-tab="own">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        ${t('tabs','own')}
      </button>
      <button class="search-tab" data-tab="flights" onclick="window.open('https://www.sunexpress.com','_blank')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        ${t('tabs','flights')}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:.6"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </button>
    </div>
    <div class="search-box">
      <div class="search-field" style="flex:1.4">
        <label>${t('search','dest')}</label>
        <div class="search-field-inner">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div><div class="val">${t('search','destPh')}</div><div class="val-sub">Hotel + Flug</div></div>
        </div>
      </div>
      <div class="search-field">
        <label>${t('search','airport')}</label>
        <div class="search-field-inner">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          <div><div class="val">${t('search','airportPh')}</div></div>
        </div>
      </div>
      <div class="search-field">
        <label>${t('search','dates')}</label>
        <div class="search-field-inner">
          <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div><div class="val">${t('search','datesVal')}</div><div class="val-sub">7 ${t('search','nights')}</div></div>
        </div>
      </div>
      <div style="flex:0.85;min-width:160px;position:relative">
        <div class="search-field">
          <label>${t('search','travelers')}</label>
          <div class="search-field-inner" id="guests-trigger" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false">
            <svg class="fi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            <div><div class="val" id="guests-label">${guestsLabel()}</div></div>
            <svg id="guests-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;color:var(--grey-3);transition:transform .2s"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="guests-dropdown" id="guests-dropdown">${buildGuestsDropdown()}</div>
      </div>
      <button class="search-btn" onclick="doSearch()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        ${t('search','btn')}
      </button>
    </div>
  </div>`;

  // Guests toggle
  const trigger = document.getElementById('guests-trigger');
  const dd = document.getElementById('guests-dropdown');
  const chev = document.getElementById('guests-chevron');
  trigger?.addEventListener('click', e => {
    e.stopPropagation();
    const open = dd.classList.toggle('open');
    trigger.setAttribute('aria-expanded', open);
    if (chev) chev.style.transform = open ? 'rotate(180deg)' : '';
  });
  document.addEventListener('click', e => {
    if (dd && !dd.contains(e.target) && e.target !== trigger) closeGuests();
  });

  // Tab switching (except flights which opens external)
  document.querySelectorAll('.search-tab:not([data-tab="flights"])').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function doSearch() { window.location.href = 'search.html'; }

/* ══════════════════════════════════════════
   AUTO-INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('site-header');
  if (h) { const p = h.dataset.page || 'home'; h.outerHTML = renderHeader(p); }

  const f = document.getElementById('site-footer');
  if (f) f.outerHTML = renderFooter();

  const sm = document.getElementById('search-mask');
  if (sm) renderSearchMask('search-mask');
});
