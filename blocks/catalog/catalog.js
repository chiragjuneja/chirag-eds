//import PrimeCatalogContainer from "../../myscripts/PrimeCatalogContainer.js";
//import { PrimeCatalogContainer } from "../../myscripts/index.js";

// export default function decorate(block) {
//   console.log("Inside PrimeCatalogContainer.js");
//   // debugger;
//   // const React = require('react');
//   // foo();
//   // Import the Hello component from the compiled JavaScript file
//   // const Hello = require("../../myscripts/Hello.js").default;
//   // Create props object
//   //const props = { name: 'Alakh' };

//   // Call the MyComponent function with props
//   // const myComponentElement = <MyComponent {...props} />;
//   // const container = document.createElement("div");
//   // container.textContent = myComponentElement.props.children;

//   // Call the Hello function with props
//   // const parameters = {
//   //   heading: "My Prime Catalog Catalog Container",
//   //   description: "Welcome to the Adobe Learning Manager Catalog.",
//   //   guest: true,
//   //   signUpURL: "https://learningmanagerstage1.adobe.com/login",
//   //   almDomain: "https://learningmanagerstage1.adobe.com",
//   //   ALMConfig: {
//   //       almBaseURL: "https://learningmanagerstage1.adobe.com",
//   //       primeApiURL: "https://learningmanagerstage1.adobe.com/primeapi/v2/",
//   //       cdnBaseUrl: "https:",
//   //       esBaseUrl: "https://primeapps-stage.adobe.com/almsearch/api/v1/stage1/8848/97ef693b-698d-47f1-b2e0-307e3defdd6d",
//   //       almCdnBaseUrl: "https://cpcontentsdev.adobe.com/public/guest/stage1/api/97ef693b-698d-47f1-b2e0-307e3defdd6d/8848",
//   //       usageType: "aem-es",
//   //       mountingPoints: {
//   //           catalogContainer: ".catalog__container",
//   //           trainingOverviewPage: ".training__page__container",
//   //           boardsContainer: ".boards__container",
//   //           boardContainer: ".board__container",
//   //           notificationContainer: ".notification__container",
//   //           instanceContainer: ".instance__container",
//   //           profilePageContainer: ".profile__container",
//   //           userSkillsContainer: ".skills__container",
//   //           activeFieldsContainer: ".activeFields__container"
//   //       },
//   //       accountData: {
//   //           "data": {
//   //               "id": "8848",
//   //               "type": "account",
//   //               "attributes": {
//   //                   "logoUrl": "https://cpcontents.adobe.com/public/images/default_logo.svg",
//   //                   "name": "Adobe Inc",
//   //                   "subdomain": "3c4a32d4d7f34b139651407db1b079c6",
//   //                   "themeData": "{\"id\":\"0\",\"name\":\"Default\",\"url\":\"https://cpcontentsdev.adobe.com/public/acapassets/2633c744.default.min.css\",\"className\":\"prime-default\",\"brandColor\":\"#fff\",\"sidebarIconColor\":\"#f37254\",\"sidebarColor\":\"#232323\",\"widgetPrimaryColor\":\"#4283d0\"}",
//   //                   "accountTerminologies": [
//   //                       {"entityType": "MODULE", "locale": "en-US", "name": "Module", "pluralName": "Modules"},
//   //                       {"entityType": "COURSE", "locale": "en-US", "name": "Course", "pluralName": "Courses"},
//   //                       // Add more account terminologies as necessary
//   //                   ],
//   //                   "filterPanelSetting": {
//   //                       "catalog": false,
//   //                       "duration": true,
//   //                       "format": false,
//   //                       "price": true,
//   //                       "priceRange": true,
//   //                       "skill": true,
//   //                       "skillLevel": false,
//   //                       "tag": true,
//   //                       "type": true
//   //                   },
//   //                   "learnerHelpLinks": [
//   //                       {
//   //                           "isDefault": true,
//   //                           "localizedHelpLink": [
//   //                               {"link": "https://helpx.adobe.com/it/captivate-prime/learners.html", "locale": "it-IT", "name": "Guida"},
//   //                               // Add more localized help links as necessary
//   //                           ]
//   //                       }
//   //                   ]
//   //               }
//   //           }
//   //       }
//   //       },
//   //       locale: "en_US",
//   //       themeData: {
//   //           id: "0",
//   //           name: "Default",
//   //           url: "https://cpcontentsdev.adobe.com/public/acapassets/2633c744.default.min.css",
//   //           className: "prime-default",
//   //           brandColor: "#fff",
//   //           sidebarIconColor: "#f37254",
//   //           sidebarColor: "#232323",
//   //           widgetPrimaryColor: "#4283d0"
//   //       }
//   //   };
     
//     // window.onload = function() {
//     //   // Access the ALM object
//     //   const almObject = window.ALM;
    
//     //   // Access a specific function from the ALM object
//     //   const accessToken = almObject.getAccessToken();
//     //   console.log("Access Token: ", accessToken);
    
//     //   // Access a specific attribute from the ALM object
//     //   const almConfig = almObject.getALMConfig();
//     //   console.log("ALM Config: ", almConfig);

//     //   setTimeout(function() {
//     //     const catalogElement = PrimeCatalogContainer(almObject);
//     //   }, 0);

//       // window.onload = function() {
        
//       // };

//       // setTimeout(() => {
//       //   const almObject = window.ALM;
        
//       //   if (almObject && almObject.getALMConfig) {
//       //     const almConfig = almObject.getALMConfig();
//       //     console.log("ALM Config: ", almConfig);
          
//       //   }
//       // }, 1000);
//       const catalogElement = PrimeCatalogContainer();
//       ReactDOM.render(catalogElement, block);
//       // Call the PrimeCatalogContainer function with the ALM object as a parameter
//       //const catalogElement = PrimeCatalogContainer(almObject);
  
  
//   //const catalogElement = PrimeCatalogContainer(parameters);

//   // const hellocontainer = document.createElement("div");
//   // container.textContent = helloElement.props.children;
//   // console.log(container);
//   // debugger;
  
//   // Create an in-memory DOM node to render to
//   // const container = document.createElement('div');

//   // Render the React element to the in-memory DOM node
//   // ReactDOM.render(catalogElement, block);

// 


// const Catalog = () => {
//   return (
//     <div className="catalog__container">
//       <PrimeCatalogContainer />
//     </div>
//   );
// };

// export default Catalog;

// export default function decorate(block) {
//   console.log("Inside catalog.js");
//   block.append(<Portal selector={mountingPoints.catalogContainer}>
//     <PrimeCatalogContainer />
//   </Portal>);
// }

// export default function decorate(block) {
//   console.log("Inside catalog.js");
//   var rootElement = document.getElementById('root');

//   var catalogContainer = document.createElement('div');

//   // Add class and data attributes to the new div element
//   catalogContainer.classList.add('catalog__container');

//   catalogContainer.setAttribute('show-filters', 'true');
//   catalogContainer.setAttribute('show-search', 'true');
//   catalogContainer.setAttribute('catalogs', 'false');
//   catalogContainer.setAttribute('lo-types', 'true');
//   catalogContainer.setAttribute('skill-name', 'true');
//   catalogContainer.setAttribute('lo-format', 'false');
//   catalogContainer.setAttribute('duration', 'true');
//   catalogContainer.setAttribute('price', 'true');
//   catalogContainer.setAttribute('learner-state', 'false');
//   catalogContainer.setAttribute('tag-name', 'true');
//   catalogContainer.setAttribute('skill-level', 'false');
//   // Append the catalogContainer div to the root element
//   rootElement.appendChild(catalogContainer);


//   const test = document.createElement("PrimeCatalogContainer");
//   rootElement.appendChild(test);
// }