/**
 * SunExpress Holidays — Shared Components
 * Header, Footer, Search Mask (with children + age selectors)
 */

/* ── LOGO SVG (inline, used in header & footer) ── */
const SXS_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.463 86.814" aria-label="SunExpress Holidays">
  <defs><style>.l1{fill:#00428f}.l2{fill:#ec6602}</style></defs>
  <path class="l1" d="M114.834,34.653c1.095.799,2.189,1.389,3.368,1.852,1.178.421,2.399.673,3.746.673,1.473,0,2.568-.294,3.367-.883.801-.589,1.179-1.389,1.179-2.4,0-.631-.084-1.178-.253-1.641-.167-.464-.463-.884-.841-1.263-.379-.379-.926-.758-1.558-1.094-.631-.337-1.431-.716-2.315-1.137-1.052-.463-1.978-.968-2.778-1.473-.842-.506-1.516-1.052-2.104-1.684-.59-.632-1.012-1.347-1.348-2.231-.294-.842-.463-1.852-.463-3.031,0-1.221.211-2.315.674-3.326.463-.967,1.052-1.809,1.851-2.441.801-.673,1.769-1.179,2.906-1.515,1.136-.337,2.357-.547,3.746-.547s2.694.168,3.914.547c1.221.336,2.231.799,3.073,1.346l-.926,4.632c-.799-.632-1.684-1.179-2.694-1.6-1.01-.422-2.105-.632-3.283-.632s-2.147.295-2.905.842c-.758.547-1.136,1.305-1.136,2.273,0,.589.084,1.053.295,1.473.168.421.463.759.799,1.095.337.336.8.631,1.347.926s1.179.589,1.895.926c1.052.463,2.02.968,2.903,1.432.927.463,1.685,1.052,2.358,1.683.674.631,1.179,1.389,1.6,2.231.378.842.589,1.894.589,3.157,0,2.736-.884,4.883-2.694,6.356-1.81,1.516-4.293,2.231-7.493,2.231-1.557,0-2.946-.21-4.209-.631s-2.316-.884-3.199-1.474l.589-4.672Z"/>
  <path class="l1" d="M133.945,20.72h4.925v13.512c0,1.052.21,1.852.59,2.4.379.547,1.01.841,1.894.841.758,0,1.388-.252,1.894-.715.505-.463.968-1.137,1.389-1.936v-14.102h4.841v20.248h-4.715v-2.442c-.21.295-.421.631-.715.968-.295.337-.631.673-1.01.926-.379.295-.843.548-1.348.716-.505.21-1.094.294-1.725.294-1.095,0-2.021-.168-2.778-.504-.759-.338-1.389-.801-1.853-1.432-.463-.631-.842-1.347-1.053-2.231-.21-.884-.336-1.852-.336-2.905v-13.638Z"/>
  <path class="l1" d="M152.55,20.594h4.715v2.441c.169-.294.421-.63.716-.968.294-.336.631-.673,1.052-.926.378-.295.841-.547,1.347-.715.505-.21,1.094-.295,1.726-.295,2.189,0,3.704.632,4.63,1.894.926,1.263,1.389,2.989,1.389,5.136v13.765h-4.925v-13.555c0-1.052-.211-1.852-.589-2.399-.378-.589-1.01-.842-1.894-.842-.758,0-1.39.253-1.895.716-.504.463-.967,1.136-1.388,1.936v14.186h-4.842v-20.374h-.042Z"/>
  <polygon class="l1" points="171.324 12.849 186.562 12.849 186.352 17.185 176.502 17.185 176.502 24.173 184.542 24.173 184.542 28.508 176.502 28.508 176.502 36.548 187.025 36.548 187.025 40.926 171.324 40.926 171.324 12.849"/>
  <path class="l1" d="M188.457,40.925c.547-.968,1.052-1.894,1.557-2.736.506-.884,1.01-1.768,1.557-2.652.505-.799,1.011-1.642,1.516-2.484.547-.842,1.053-1.641,1.557-2.441-.547-.842-1.052-1.684-1.557-2.526-.505-.841-1.011-1.725-1.516-2.525-.505-.8-.968-1.642-1.388-2.442-.463-.842-.927-1.641-1.39-2.442h5.515l1.22,2.4c.253.463.548,1.011.842,1.642.337.59.674,1.178,1.011,1.726.337-.506.674-1.095,1.052-1.726.378-.673.758-1.221,1.052-1.726.211-.337.421-.716.632-1.094.21-.379.42-.759.631-1.179h5.178c-.505.842-.968,1.684-1.431,2.442-.463.799-.927,1.599-1.432,2.441-.462.8-.968,1.599-1.473,2.399-.505.8-1.01,1.599-1.516,2.316.506.799,1.011,1.683,1.558,2.567.548.926,1.095,1.811,1.557,2.694.505.884,1.01,1.768,1.516,2.652.505.884,1.01,1.811,1.558,2.778h-5.515l-1.557-2.862-1.979-3.451-1.979,3.283c-.294.463-.547.926-.84,1.431-.296.505-.59,1.01-.885,1.557h-5.051v-.042Z"/>
  <path class="l1" d="M208.114,20.594h4.841v1.474c.463-.548,1.011-1.01,1.727-1.39.714-.378,1.515-.547,2.483-.547,2.273,0,4.041.885,5.346,2.61,1.305,1.768,1.936,4.378,1.936,7.83,0,3.62-.631,6.356-1.936,8.124-1.305,1.768-3.031,2.652-5.178,2.652-.631,0-1.179-.085-1.684-.21-.463-.169-.883-.338-1.262-.548-.337-.21-.631-.463-.884-.716-.252-.252-.421-.504-.59-.757v11.06h-4.883v-29.582h.084ZM212.998,35.622c.253.421.673.842,1.179,1.263.505.421,1.093.589,1.809.589.969,0,1.811-.547,2.484-1.599.715-1.052,1.052-2.778,1.052-5.094,0-2.441-.337-4.209-1.052-5.262-.673-1.052-1.557-1.599-2.61-1.599-.716,0-1.305.21-1.768.589-.463.379-.841.758-1.094,1.094v10.019Z"/>
  <path class="l1" d="M226.637,20.594h4.714v3.157c.211-.463.505-.884.801-1.304.294-.422.672-.8,1.051-1.095.421-.295.884-.589,1.431-.758.548-.168,1.18-.294,1.895-.294.504,0,.926.041,1.304.126l-.463,4.167c-.168-.042-.337-.084-.546-.126-.169-.042-.421-.042-.674-.042-1.052,0-1.979.252-2.737.715-.756.464-1.43,1.263-1.978,2.4v13.344h-4.841v-20.29h.043Z"/>
  <path class="l1" d="M253.073,39.495c-.632.546-1.475,1.01-2.442,1.346-.968.337-2.232.505-3.79.505-1.346,0-2.567-.253-3.662-.758-1.093-.504-2.062-1.22-2.861-2.146-.801-.926-1.39-2.063-1.811-3.367-.42-1.306-.673-2.737-.673-4.294,0-3.368.715-6.02,2.146-7.872,1.433-1.852,3.368-2.82,5.852-2.82s4.336.8,5.556,2.399c1.263,1.6,1.852,3.747,1.852,6.482,0,.464,0,.927-.042,1.39-.042.463-.042.842-.125,1.137h-10.399c.042.841.169,1.641.463,2.357.295.715.674,1.305,1.179,1.852.463.505,1.011.926,1.643,1.22.63.295,1.262.422,1.977.422,1.853,0,3.452-.632,4.757-1.853l.38,4ZM248.568,28.129c-.084-3.073-.968-4.588-2.694-4.588-.842,0-1.558.379-2.105,1.094-.547.716-.884,1.894-.968,3.494h5.767Z"/>
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
  <path class="l1" d="M150.215,63.633c0,2.795-.641,4.992-1.92,6.592-1.281,1.6-3.104,2.4-5.473,2.4-1.472,0-2.752-.362-3.84-1.088-1.088-.725-1.931-1.76-2.528-3.104-.598-1.344-.896-2.944-.896-4.8,0-2.816.634-5.002,1.904-6.56,1.269-1.557,3.088-2.336,5.456-2.336,2.175,0,3.935.768,5.279,2.304,1.344,1.536,2.018,3.734,2.018,6.592ZM138.886,63.664c0,1.984.32,3.52.96,4.608.64,1.088,1.653,1.632,3.04,1.632s2.4-.539,3.04-1.616c.641-1.077.96-2.629.96-4.656,0-2.005-.319-3.536-.96-4.592-.64-1.056-1.653-1.584-3.04-1.584s-2.4.534-3.04,1.6c-.64,1.067-.96,2.603-.96,4.608Z"/>
  <path class="l1" d="M157.446,72.305h-3.296v-24.32h3.296v24.32Z"/>
  <path class="l1" d="M163.91,48.465c.532,0,.976.16,1.327.48.353.32.528.821.528,1.504,0,.662-.176,1.157-.528,1.488-.352.331-.795.496-1.327.496s-.977-.165-1.328-.496c-.353-.331-.528-.826-.528-1.488,0-.683.176-1.184.528-1.504.352-.32.794-.48,1.328-.48ZM165.542,55.057v17.248h-3.296v-17.248h3.296Z"/>
  <path class="l1" d="M175.718,72.624c-1.941,0-3.468-.757-4.576-2.272-1.109-1.514-1.664-3.733-1.664-6.656s.56-5.146,1.68-6.672,2.641-2.288,4.561-2.288c1.108,0,2.053.235,2.832.704.778.469,1.402,1.077,1.872,1.824h.159c-.021-.384-.059-.832-.111-1.344-.054-.512-.08-.971-.08-1.376v-6.56h3.264v24.32h-2.592l-.512-2.208h-.16c-.491.747-1.109,1.355-1.856,1.824-.747.469-1.686.704-2.815.704ZM176.518,69.936c1.408,0,2.416-.469,3.023-1.408.608-.938.912-2.347.912-4.224v-.672c0-2.027-.293-3.557-.88-4.592-.587-1.034-1.627-1.552-3.12-1.552-1.216,0-2.128.549-2.735,1.648-.608,1.099-.912,2.629-.912,4.592,0,2.006.309,3.542.928,4.608.618,1.067,1.547,1.6,2.784,1.6Z"/>
  <path class="l1" d="M194.597,54.737c3.883,0,5.824,1.973,5.824,5.92v11.648h-2.4l-.576-2.4h-.096c-.661.917-1.371,1.6-2.128,2.048-.758.448-1.766.672-3.024.672-1.493,0-2.677-.458-3.552-1.376-.875-.917-1.312-2.197-1.312-3.84,0-3.499,2.41-5.344,7.231-5.536l2.624-.096v-.96c0-1.259-.251-2.155-.752-2.688s-1.222-.8-2.16-.8c-.747,0-1.478.118-2.191.352-.715.235-1.414.523-2.097.864l-1.023-2.368c.768-.427,1.637-.773,2.607-1.04.971-.267,1.979-.4,3.024-.4ZM197.156,63.985l-1.983.064c-1.644.064-2.8.379-3.472.944-.673.565-1.009,1.36-1.009,2.384,0,.939.229,1.622.688,2.048.458.427,1.072.64,1.84.64,1.152,0,2.096-.384,2.832-1.152s1.104-1.888,1.104-3.36v-1.568Z"/>
  <path class="l1" d="M202.789,55.057h3.487l3.072,9.6c.234.704.437,1.392.608,2.064.17.672.309,1.328.416,1.968h.128c.106-.533.25-1.152.432-1.856.181-.704.389-1.429.624-2.176l2.944-9.6h3.456l-6.528,19.584c-.598,1.749-1.365,3.077-2.304,3.984-.939.907-2.166,1.36-3.681,1.36-.427,0-.815-.027-1.168-.08-.352-.054-.667-.112-.943-.176v-2.688c.234.042.495.085.783.128s.581.064.881.064c.853,0,1.524-.262,2.016-.784.49-.523.906-1.296,1.248-2.32l.607-1.856-6.079-17.216Z"/>
  <path class="l1" d="M230.692,67.473c0,1.686-.555,2.965-1.664,3.84-1.109.875-2.656,1.312-4.64,1.312-1.046,0-1.974-.085-2.784-.256s-1.547-.426-2.208-.768v-3.008c.661.363,1.44.683,2.336.96.896.277,1.781.416,2.656.416,1.066,0,1.851-.203,2.352-.608s.752-.949.752-1.632c0-.384-.096-.73-.288-1.04-.191-.309-.544-.624-1.056-.944s-1.248-.693-2.208-1.12c-.96-.426-1.781-.869-2.464-1.328-.683-.458-1.2-.997-1.552-1.616-.353-.619-.528-1.387-.528-2.304,0-1.472.544-2.613,1.632-3.424,1.088-.811,2.539-1.216,4.353-1.216.938,0,1.823.102,2.655.304.832.203,1.643.496,2.433.88l-1.057,2.528c-.661-.32-1.327-.581-2-.784-.672-.202-1.37-.304-2.096-.304-.896,0-1.579.166-2.048.496-.47.331-.704.784-.704,1.36,0,.405.106.757.32,1.056.213.299.586.598,1.12.896.532.299,1.258.662,2.176,1.088.917.427,1.717.864,2.399,1.312.683.448,1.205.981,1.568,1.6.362.619.544,1.387.544,2.304Z"/>
</svg>`;

/* ── RENDER HEADER ── */
function renderHeader(activePage = 'home') {
  const nav = [
    { id: 'home',    href: 'index.html',          label: 'Startseite' },
    { id: 'results', href: 'search.html', label: 'Angebote' },
    { id: 'dest',    href: '#',                   label: 'Ziele' },
    { id: 'hotels',  href: '#',                   label: 'Hotels' },
    { id: 'help',    href: '#',                   label: 'Hilfe' },
  ];

  const navHTML = nav.map(n =>
    `<a href="${n.href}" class="${n.id === activePage ? 'active' : ''}">${n.label}</a>`
  ).join('');

  return `
  <header class="sxh-header">
    <a class="sxh-logo" href="index.html">${SXS_LOGO_SVG}</a>
    <nav class="sxh-nav">${navHTML}</nav>
    <div class="sxh-header-actions">
      <button class="btn-outline">
        <i class="ti ti-phone" aria-hidden="true"></i> Kontakt
      </button>
      <button class="btn-primary">
        <i class="ti ti-heart" aria-hidden="true"></i> Merkliste
      </button>
    </div>
  </header>`;
}

/* ── RENDER FOOTER ── */
function renderFooter() {
  return `
  <footer class="sxh-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-logo">${SXS_LOGO_SVG}</div>
        <p>Ihr Spezialist für Sonnenurlaub. Ein Unternehmen von Turkish Airlines &amp; Lufthansa.</p>
      </div>
      <div class="footer-col">
        <h5>Reiseziele</h5>
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

/* ── SEARCH MASK ── */
// State
const searchState = {
  adults: 2,
  children: 0,
  childAges: [],
  destination: 'Antalya, Türkei',
  airport: 'Frankfurt (FRA)',
  dates: '15. Jul — 22. Jul',
  nights: 7,
  tab: 'hotel-flug'
};

function renderSearchMask(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = buildSearchMaskHTML();
  initSearchMask();
}

function buildSearchMaskHTML() {
  return `
  <div class="search-mask-wrap">
    <div class="search-tabs">
      <button class="search-tab active" data-tab="hotel-flug">
        <i class="ti ti-building" aria-hidden="true"></i> Hotel + Flug
      </button>
      <button class="search-tab" data-tab="nur-flug">
        <i class="ti ti-plane" aria-hidden="true"></i> Nur Flug
      </button>
      <button class="search-tab" data-tab="pauschal">
        <i class="ti ti-sun" aria-hidden="true"></i> Pauschalreise
      </button>
    </div>
    <div class="search-box">
      <div class="search-field" style="flex:1.4">
        <label>Reiseziel</label>
        <div class="search-field-inner">
          <i class="ti ti-map-pin" aria-hidden="true"></i>
          <div>
            <div class="val" id="sm-dest">${searchState.destination}</div>
            <div class="val-sub">Hotel + Flug</div>
          </div>
        </div>
      </div>
      <div class="search-field">
        <label>Abflughafen</label>
        <div class="search-field-inner">
          <i class="ti ti-plane-departure" aria-hidden="true"></i>
          <div><div class="val" id="sm-airport">${searchState.airport}</div></div>
        </div>
      </div>
      <div class="search-field">
        <label>Reisedatum</label>
        <div class="search-field-inner">
          <i class="ti ti-calendar" aria-hidden="true"></i>
          <div>
            <div class="val" id="sm-dates">${searchState.dates}</div>
            <div class="val-sub" id="sm-nights">${searchState.nights} Nächte</div>
          </div>
        </div>
      </div>
      <div class="search-field" style="flex:0.85;position:relative">
        <label>Reisende</label>
        <div class="search-field-inner" id="guests-trigger" role="button" tabindex="0"
             aria-expanded="false" aria-haspopup="true">
          <i class="ti ti-users" aria-hidden="true"></i>
          <div>
            <div class="val" id="sm-guests-label">${guestsLabel()}</div>
          </div>
          <i class="ti ti-chevron-down" aria-hidden="true"
             style="margin-left:auto;font-size:14px;color:var(--sxs-grey3)" id="guests-chevron"></i>
        </div>
        <div class="guests-dropdown" id="guests-dropdown" role="dialog" aria-label="Reisende auswählen">
          ${buildGuestsDropdown()}
        </div>
      </div>
      <button class="search-btn" id="sm-search-btn" onclick="doSearch()">
        <i class="ti ti-search" aria-hidden="true"></i> Suchen
      </button>
    </div>
  </div>`;
}

function guestsLabel() {
  let label = `${searchState.adults} Erw.`;
  if (searchState.children > 0) label += `, ${searchState.children} Kind${searchState.children > 1 ? 'er' : ''}`;
  return label;
}

function buildGuestsDropdown() {
  let childAgesHTML = '';
  if (searchState.children > 0) {
    const selects = searchState.childAges.map((age, i) => `
      <div class="child-age-select">
        <label>Kind ${i + 1}</label>
        <select onchange="setChildAge(${i}, this.value)" aria-label="Alter Kind ${i + 1}">
          ${Array.from({length: 18}, (_, y) =>
            `<option value="${y}" ${age == y ? 'selected' : ''}>${y === 0 ? '< 1 Jahr' : y === 1 ? '1 Jahr' : y + ' Jahre'}</option>`
          ).join('')}
        </select>
      </div>`).join('');

    childAgesHTML = `
      <div class="child-ages">
        <div class="child-ages-title">Alter der Kinder bei Reiseantritt</div>
        <div class="child-ages-grid">${selects}</div>
      </div>`;
  }

  return `
    <div class="guests-row">
      <div>
        <div class="guests-label">Erwachsene</div>
        <div class="guests-label-sub">Ab 18 Jahren</div>
      </div>
      <div class="guests-counter">
        <button onclick="changeGuests('adults',-1)" ${searchState.adults <= 1 ? 'disabled' : ''} aria-label="Erwachsene verringern">−</button>
        <span class="guests-count" id="adults-count">${searchState.adults}</span>
        <button onclick="changeGuests('adults',1)" ${searchState.adults >= 9 ? 'disabled' : ''} aria-label="Erwachsene erhöhen">+</button>
      </div>
    </div>
    <div class="guests-row">
      <div>
        <div class="guests-label">Kinder</div>
        <div class="guests-label-sub">Unter 18 Jahren</div>
      </div>
      <div class="guests-counter">
        <button onclick="changeGuests('children',-1)" ${searchState.children <= 0 ? 'disabled' : ''} aria-label="Kinder verringern">−</button>
        <span class="guests-count" id="children-count">${searchState.children}</span>
        <button onclick="changeGuests('children',1)" ${searchState.children >= 6 ? 'disabled' : ''} aria-label="Kinder erhöhen">+</button>
      </div>
    </div>
    ${childAgesHTML}
    <div style="margin-top:12px">
      <button class="btn-primary" style="width:100%;justify-content:center"
              onclick="closeGuestsDropdown()">Übernehmen</button>
    </div>`;
}

function changeGuests(type, delta) {
  if (type === 'adults') {
    searchState.adults = Math.max(1, Math.min(9, searchState.adults + delta));
  } else {
    const prev = searchState.children;
    searchState.children = Math.max(0, Math.min(6, searchState.children + delta));
    if (searchState.children > prev) {
      searchState.childAges.push(8); // default age 8
    } else if (searchState.children < prev) {
      searchState.childAges.pop();
    }
  }
  refreshDropdown();
}

function setChildAge(index, age) {
  searchState.childAges[index] = parseInt(age);
}

function refreshDropdown() {
  const dd = document.getElementById('guests-dropdown');
  if (dd) dd.innerHTML = buildGuestsDropdown();
  const lbl = document.getElementById('sm-guests-label');
  if (lbl) lbl.textContent = guestsLabel();
}

function closeGuestsDropdown() {
  const dd = document.getElementById('guests-dropdown');
  const trigger = document.getElementById('guests-trigger');
  const chevron = document.getElementById('guests-chevron');
  if (dd) dd.classList.remove('open');
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
  if (chevron) chevron.style.transform = '';
}

function initSearchMask() {
  // Tabs
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      searchState.tab = tab.dataset.tab;
    });
  });

  // Guests dropdown toggle
  const trigger = document.getElementById('guests-trigger');
  const dropdown = document.getElementById('guests-dropdown');
  const chevron = document.getElementById('guests-chevron');

  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (dropdown && !dropdown.contains(e.target) && e.target !== trigger) {
      closeGuestsDropdown();
    }
  });
}

function doSearch() {
  window.location.href = 'search.html';
}

/* ── AUTO-INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    const page = headerEl.dataset.page || 'home';
    headerEl.outerHTML = renderHeader(page);
  }

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = renderFooter();

  const smEl = document.getElementById('search-mask');
  if (smEl) renderSearchMask('search-mask');
});
