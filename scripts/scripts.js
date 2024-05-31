import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
} from './aem.js';

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

function loadReactDOM() {
  // const nodeEnv = document.createElement('script');
  // nodeEnv.type = 'text/javascript';
  // // Adding JavaScript code inside the script tag
  // nodeEnv.textContent = `
  //   var process = {};
  //   process.env = {};
  //   process.env.NODE_ENV = 'development';
  // `;
  // document.head.appendChild(nodeEnv);
  //const reactScript = document.createElement('script');
  // reactScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/cjs/react.development.min.js';
  // reactScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.js';
  // document.head.appendChild(reactScript);
  // const reactDOMscript = document.createElement('script');
  // reactDOMscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/cjs/react-dom.development.min.js';
  // reactDOMscript.src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.development.js";
  // reactDOMscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js';
  // document.head.appendChild(reactDOMscript);

  //Appending 70file in changing the path. 
  const script = document.createElement('script');
  script.async = false;
  script.src = '../myscripts/learning/clientlibs/clientlib-alm/js/main.3560700d.js';
  document.head.appendChild(script);
  loadCSS('../styles/main.c4334d51.css');
};

function setALMconfig() {
    // let rootDiv = document.createElement('div');
    // rootDiv.setAttribute("id", "root");
    // nonLoggedInDiv[0].appendChild(rootDiv);

    //window.ALM.ALMConfig["frontendResourcesPath"] = "/etc.clientlibs/learning/clientlibs/clientlib-alm/resources";
    window.almCDNBaseURL="https://cpcontentsdev.adobe.com/public/alm-non-logged-in";

    var configs1 = '{"almBaseURL":"https://learningmanagerstage1.adobe.com","primeApiURL":"https://learningmanagerstage1.adobe.com/primeapi/v2/","cdnBaseUrl":"https:","esBaseUrl":"https://primeapps-stage.adobe.com/almsearch/api/v1/stage1/8848/97ef693b-698d-47f1-b2e0-307e3defdd6d","almCdnBaseUrl":"https://cpcontentsdev.adobe.com/public/guest/stage1/api/97ef693b-698d-47f1-b2e0-307e3defdd6d/8848","usageType":"aem-es","mountingPoints":{"catalogContainer":".catalog__container","trainingOverviewPage":".training__page__container","boardsContainer":".boards__container","boardContainer":".board__container","notificationContainer":".notification__container","instanceContainer":".instance__container","profilePageContainer":".profile__container","userSkillsContainer":".skills__container","activeFieldsContainer":".activeFields__container"},"accountData":"{\\"data\\":{\\"id\\":\\"8848\\",\\"type\\":\\"account\\",\\"attributes\\":{\\"logoUrl\\":\\"https://cpcontents.adobe.com/public/images/default_logo.svg\\",\\"name\\":\\"Adobe Inc\\",\\"subdomain\\":\\"3c4a32d4d7f34b139651407db1b079c6\\",\\"themeData\\":\\"{\\\\\\"id\\\\\\":\\\\\\"0\\\\\\",\\\\\\"name\\\\\\":\\\\\\"Default\\\\\\",\\\\\\"url\\\\\\":\\\\\\"https://cpcontentsdev.adobe.com/public/acapassets/2633c744.default.min.css\\\\\\",\\\\\\"className\\\\\\":\\\\\\"prime-default\\\\\\",\\\\\\"brandColor\\\\\\":\\\\\\"#fff\\\\\\",\\\\\\"sidebarIconColor\\\\\\":\\\\\\"#f37254\\\\\\",\\\\\\"sidebarColor\\\\\\":\\\\\\"#232323\\\\\\",\\\\\\"widgetPrimaryColor\\\\\\":\\\\\\"#4283d0\\\\\\"}\\",\\"accountTerminologies\\":[{\\"entityType\\":\\"MODULE\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Module\\",\\"pluralName\\":\\"Modules\\"},{\\"entityType\\":\\"COURSE\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Course\\",\\"pluralName\\":\\"Courses\\"},{\\"entityType\\":\\"LEARNING_PATH\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Learning Path\\",\\"pluralName\\":\\"Learning Paths\\"},{\\"entityType\\":\\"CERTIFICATION\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Certification\\",\\"pluralName\\":\\"Certifications\\"},{\\"entityType\\":\\"LEARNING_PLAN\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Learning Plan\\",\\"pluralName\\":\\"Learning Plans\\"},{\\"entityType\\":\\"JOB_AID\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Job Aid\\",\\"pluralName\\":\\"Job Aids\\"},{\\"entityType\\":\\"CATALOG\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Catalog\\",\\"pluralName\\":\\"Catalogs\\"},{\\"entityType\\":\\"SKILL\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Skill\\",\\"pluralName\\":\\"Skills\\"},{\\"entityType\\":\\"BADGE\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Badge\\",\\"pluralName\\":\\"Badges\\"},{\\"entityType\\":\\"ANNOUNCEMENT\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Announcement\\",\\"pluralName\\":\\"Announcements\\"},{\\"entityType\\":\\"MY_LEARNING\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"My Learning\\",\\"pluralName\\":\\"My Learning\\"},{\\"entityType\\":\\"LEADERBOARD\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Leaderboard\\",\\"pluralName\\":\\"Leaderboard\\"},{\\"entityType\\":\\"EFFECTIVENESS\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Effectiveness\\",\\"pluralName\\":\\"Effectiveness\\"},{\\"entityType\\":\\"PREREQUISITE\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Prerequisite\\",\\"pluralName\\":\\"Prerequisites\\"},{\\"entityType\\":\\"PREWORK\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Prework\\",\\"pluralName\\":\\"Prework\\"},{\\"entityType\\":\\"CORE_CONTENT\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Core Content\\",\\"pluralName\\":\\"Core Content\\"},{\\"entityType\\":\\"TESTOUT\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Testout\\",\\"pluralName\\":\\"Testout\\"},{\\"entityType\\":\\"SELF_PACED\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Self Paced\\",\\"pluralName\\":\\"Self Paced\\"},{\\"entityType\\":\\"BLENDED\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Blended\\",\\"pluralName\\":\\"Blended\\"},{\\"entityType\\":\\"CLASSROOM\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Classroom\\",\\"pluralName\\":\\"Classrooms\\"},{\\"entityType\\":\\"VIRTUAL_CLASSROOM\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Virtual Classroom\\",\\"pluralName\\":\\"Virtual Classroom\\"},{\\"entityType\\":\\"ACTIVITY\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Activity\\",\\"pluralName\\":\\"Activities\\"},{\\"entityType\\":\\"PATH\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Path\\",\\"pluralName\\":\\"Paths\\"},{\\"entityType\\":\\"SKILL_LEVEL\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Skill Level\\",\\"pluralName\\":\\"Skill Levels\\"},{\\"entityType\\":\\"SOCIAL_LEARNING\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Social Learning\\",\\"pluralName\\":\\"Social Learning\\"},{\\"entityType\\":\\"SOCIAL\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Social\\",\\"pluralName\\":\\"Social\\"}],\\"filterPanelSetting\\":{\\"catalog\\":false,\\"duration\\":true,\\"format\\":false,\\"price\\":true,\\"priceRange\\":true,\\"skill\\":true,\\"skillLevel\\":false,\\"tag\\":true,\\"type\\":true},\\"learnerHelpLinks\\":[{\\"isDefault\\":true,\\"localizedHelpLink\\":[{\\"link\\":\\"https://helpx.adobe.com/it/captivate-prime/learners.html\\",\\"locale\\":\\"it-IT\\",\\"name\\":\\"Guida\\"},{\\"link\\":\\"https://helpx.adobe.com/ru/captivate-prime/learners.html\\",\\"locale\\":\\"ru-RU\\",\\"name\\":\\"Помощь\\"},{\\"link\\":\\"https://helpx.adobe.com/pl/captivate-prime/learners.html\\",\\"locale\\":\\"pl-PL\\",\\"name\\":\\"Pomoc\\"},{\\"link\\":\\"https://helpx.adobe.com/tr/captivate-prime/learners.html\\",\\"locale\\":\\"tr-TR\\",\\"name\\":\\"Yardım\\"},{\\"link\\":\\"https://helpx.adobe.com/pt/captivate-prime/learners.html\\",\\"locale\\":\\"pt-BR\\",\\"name\\":\\"Ajuda\\"},{\\"link\\":\\"https://helpx.adobe.com/fr/captivate-prime/learners.html\\",\\"locale\\":\\"fr-FR\\",\\"name\\":\\"Aide\\"},{\\"link\\":\\"https://helpx.adobe.com/jp/captivate-prime/learners.html\\",\\"locale\\":\\"ja-JP\\",\\"name\\":\\"ヘルプ\\"},{\\"link\\":\\"https://helpx.adobe.com/de/captivate-prime/learners.html\\",\\"locale\\":\\"de-DE\\",\\"name\\":\\"Hilfe\\"},{\\"link\\":\\"https://helpx.adobe.com/no/captivate-prime/learners.html\\",\\"locale\\":\\"nb-NO\\",\\"name\\":\\"Hjelp\\"},{\\"link\\":\\"https://helpx.adobe.com/kr/captivate-prime/learners.html\\",\\"locale\\":\\"ko-KR\\",\\"name\\":\\"도움말\\"},{\\"link\\":\\"https://helpx.adobe.com//captivate-prime/learners.html\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Help\\"},{\\"link\\":\\"https://helpx.adobe.com/cn/captivate-prime/learners.html\\",\\"locale\\":\\"zh-CN\\",\\"name\\":\\"帮助\\"},{\\"link\\":\\"https://helpx.adobe.com/es/captivate-prime/learners.html\\",\\"locale\\":\\"es-ES\\",\\"name\\":\\"Ayuda\\"},{\\"link\\":\\"https://helpx.adobe.com/nl/captivate-prime/learners.html\\",\\"locale\\":\\"nl-NL\\",\\"name\\":\\"Help\\"}]},{\\"isDefault\\":true,\\"localizedHelpLink\\":[{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"it-IT\\",\\"name\\":\\"Contatta l’Amministratore\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"ru-RU\\",\\"name\\":\\"Обратиться к администратору\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"pl-PL\\",\\"name\\":\\"Skontaktuj się z administratorem\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"tr-TR\\",\\"name\\":\\"Yönetici ile İletişim Kurun\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"pt-BR\\",\\"name\\":\\"Entrar em contato com o administrador\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"fr-FR\\",\\"name\\":\\"Contactez votre administrateur.\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"ja-JP\\",\\"name\\":\\"管理者に問い合わせる\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"de-DE\\",\\"name\\":\\"Administrator kontaktieren\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"nb-NO\\",\\"name\\":\\"Kontakt administrator\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"ko-KR\\",\\"name\\":\\"책임자에게 문의\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"en-US\\",\\"name\\":\\"Contact Admin\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"zh-CN\\",\\"name\\":\\"联系管理员\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"es-ES\\",\\"name\\":\\"Contactar con el administrador\\"},{\\"link\\":\\"manjusha+36new@adobetest.com\\",\\"locale\\":\\"nl-NL\\",\\"name\\":\\"Contact opnemen met beheerder\\"}]}]}}}","locale":"en-US","themeData":{"id":"0","name":"Default","url":"https://cpcontentsdev.adobe.com/public/acapassets/2633c744.default.min.css","className":"prime-default","brandColor":"#fff","sidebarIconColor":"#f37254","sidebarColor":"#232323","widgetPrimaryColor":"#4283d0"}}';

    var parsedconfig =  JSON.parse(configs1);


    

};


const compcss = '../myscripts/learning/clientlibs/clientlib-alm-commerce/css/static/css/main.80a667f1.css';

function loadblockwisecomponents(){

}

function loadcatalog() {
  // Create a new div element
  var catalogContainer = document.createElement('div');

  // Add class and data attributes to the new div element
  catalogContainer.classList.add('catalog__container');
  catalogContainer.setAttribute('data-show-filters', 'true');
  catalogContainer.setAttribute('data-show-search', 'true');
  catalogContainer.setAttribute('data-catalogs', 'false');
  catalogContainer.setAttribute('data-lo-types', 'true');
  catalogContainer.setAttribute('data-skill-name', 'true');
  catalogContainer.setAttribute('data-lo-format', 'false');
  catalogContainer.setAttribute('data-duration', 'true');
  catalogContainer.setAttribute('data-price', 'true');
  catalogContainer.setAttribute('data-learner-state', 'false');
  catalogContainer.setAttribute('data-tag-name', 'true');
  catalogContainer.setAttribute('data-skill-level', 'false');

  // Find the root element
  var rootElement = document.getElementById('root');

  // Append the catalogContainer div to the root element
  rootElement.appendChild(catalogContainer);

}

function setPlaceHolder() {
  // const navigationDiv = document.createElement('div');
  // navigationDiv.className = "navigationBar__container";
  // document.body.appendChild(navigationDiv);  

  const catalogDiv = document.createElement('div');
  catalogDiv.className = "catalog__container";
  document.body.appendChild(catalogDiv);
  
  // const trainingDiv = document.createElement('div');
  // trainingDiv.className = "training__page__container";
  // document.body.appendChild(trainingDiv);  

  // const boardsDiv = document.createElement('div');
  // boardsDiv.className = "boards__container";
  // document.body.appendChild(boardsDiv);  

  // const boardDiv = document.createElement('div');
  // boardDiv.className = "board__container";
  // document.body.appendChild(boardDiv);  
}

async function loadPage() {
  //setALMconfig();
  //await urlHandler();
  loadDelayed();
  // setTimeout(async () => {
  //   await loadEager(document);
  //   await loadLazy(document);
  // }, 5000);
  loadEager(document);
  loadLazy(document);
}

loadPage();
