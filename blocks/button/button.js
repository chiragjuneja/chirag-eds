// // import foo from "../../myscripts/utils.js";
// //import Hello from "../../myscripts/Hello.js";
// // import MyComponent from "../../myscripts/alakh.js";

// // import ReactDOM from "react-dom";

// export default function decorate(block) {
//   console.log("Inside Button.js");
//   const button = document.createElement('button');
//   button.innerHTML = "Login";
//   button.classList.add('btn');

//   button.addEventListener('click', () => {
//     // Create the login page elements dynamically
//     document.body.innerHTML = `
//     <div class="login-container">
//       <h1>Login</h1>
//       <form id="login-form">
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required>
//         <button type="submit">Login</button>
//       </form>
//       <div id="account-list" style="display:none;">
//         <h2>Select an account to log in:</h2>
//         <ul id="accounts"></ul>
//       </div>
//     </div>
//     `;

//     // Add functionality for the login form
//     const form = document.getElementById('login-form');
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();

//       // Collect email from the form
//       const email = document.getElementById('email').value;

//       // try {
//       //   // Fetch user data from the API
//       //   const response = await fetch(`https://primeapps.adobe.com/login-app/accounts?email=${email}&onlyActive=true&socialEnabledAccounts=false&include_stage_accounts=true`, {
//       //   method: 'get',
//       // });

//       //const data = await response.json();
//       const data = [{ "host": "https://captivateprimeqe.adobe.com", "id": "9238", "login": "https://captivateprimeqe.adobe.com/9238/login", "loginInBrowser": false, "logo": "https://cpcontents.adobe.com/public/images/default_logo.svg", "name": "AccentureServicesPVTLtd", "disabledApps": [], "teamsSilentLoginEnabled": true, "env": "qe" }, { "host": "https://captivateprimestage1.adobe.com", "id": "8627", "login": "https://captivateprimestage1.adobe.com/8627/login", "loginInBrowser": false, "logo": "https://cpcontents.adobe.com/public/images/default_logo.svg", "name": "7c6d581c83d048718c38e65f527fc1d2", "disabledApps": [], "teamsSilentLoginEnabled": true, "env": "stage1" }, { "host": "https://captivateprimestage1.adobe.com", "id": "3469", "login": "https://captivateprimestage1.adobe.com/3469/login", "loginInBrowser": false, "logo": "https://cpcontentsdev.adobe.com/public/account/3469/accountassets/3469/superhero.jpg", "name": "AdobeSystems7", "disabledApps": [], "teamsSilentLoginEnabled": true, "env": "stage1" }]
//       console.log('API Response:', data);

//       // Display the accounts list
//       const accountListDiv = document.getElementById('account-list');
//       const accountsUl = document.getElementById('accounts');
//       accountsUl.innerHTML = ''; // Clear any previous entries

//       data.forEach(account => {
//         const accountLi = document.createElement('li');
//         accountLi.classList.add('account-item');
//         accountLi.innerHTML = `
//           <div class="account-info">
//             <div><strong>Name:</strong> ${account.name}</div>
//             <div><strong>Host:</strong> <a href="${account.host}" target="_blank">${account.host}</a></div>
//           </div>
//           <button class="account-login-btn" data-host="${account.host}">Login</button>
//         `;
//         accountsUl.appendChild(accountLi);
//       });

//       accountListDiv.style.display = 'block'; // Show the account list

//       // Add click event listeners to the login buttons
//       const loginButtons = document.querySelectorAll('.account-login-btn');
//       loginButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           const loginUrl = button.getAttribute('data-host') + '/oauth/o/authorize?' +
//             'client_id=' +
//             'bec80dec-1233-4ac4-9fb5-d6cb3adeacdb' +
//             '&redirect_uri=http://localhost:3000/' +
//             '&state=' +
//             'state1' +
//             '&scope=' +
//             'learner:read,learner:write' +
//             '&response_type=CODE' +
//             '&account=' +
//             '8627' +
//             '&client_identifier=' +
//             'trace' +
//             '&logoutAfterAuthorize=true' +
//             '&email=' +
//             encodeURIComponent("killamse+stage1@adobetest.com");
//           window.location.href = loginUrl; // Redirect to the account's login URL
//         });
//       });
//       // } catch (err) {
//       //   console.error('Error fetching user data:', err);
//       // }
//     });
//   });
//   // Append the button to the block
//   block.append(button);
// }






// export default function decorate(block) {
//   console.log("Inside Button.js");
//   const button = document.createElement('button');
//   button.innerHTML = "Login";
//   button.classList.add('btn');

//   button.addEventListener('click', async () => {
//     // Fetch the configuration JSON from the given URL
//     try {
      
//       const currentUrl = window.location.href;
//       console.log(currentUrl);
//       const configUrl = new URL('/config.json', currentUrl).href;
//       console.log(configUrl);
 
//       const response = await fetch(configUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const config = await response.json();
//       console.log('Fetched Config:', config);

//       // Extract the required fields from the config
//       const { ALM_URL: almBaseURL, client_id: clientId, account_id: accountId } = config.data[0];
    
//       // Construct the authorization URL
//       const CP_OAUTH_STATE = 'eds_alm';
//       const redirectUri = 'http://localhost:3000';
//       const authUrl = `${almBaseURL}/oauth/o/authorize?account=${accountId}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${CP_OAUTH_STATE}&scope=learner:read,learner:write&response_type=CODE&client_identifier=edssite&logoutAfterAuthorize=true`;
//       console.log(`ALM URL: ${almBaseURL}, Redirect URL: ${redirectUri}, Client ID: ${clientId}, Account ID: ${accountId}`)
//       // Redirect the browser to the constructed URL
//       console.log(`Auth URL: ${authUrl}`)
//       window.location.href = authUrl;
//     } 
      
//       catch (err) {
//       console.error('Error fetching config:', err);
//       }
//   });

//   // Append the button to the block
//   block.append(button);
// }


import { fetchConfig } from '../../scripts/fetchConfig.js';

export default function decorate(block) {
  console.log("Inside Button.js");
  const button = document.createElement('button');
  button.innerHTML = "Login-1";

  button.classList.add('btn');

  button.addEventListener('click', async () => {
    try {
      const config = await fetchConfig();

      // Extract the required fields from the config
      const { ALM_URL: almBaseURL, client_id: clientId, account_id: accountId } = config.data[0];


      // Construct the authorization URL
      const CP_OAUTH_STATE = 'eds_alm';
      const redirectUri = 'http://localhost:3000';
      const authUrl = `${almBaseURL}/oauth/o/authorize?account=${accountId}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${CP_OAUTH_STATE}&scope=learner:read,learner:write&response_type=CODE&client_identifier=edssite&logoutAfterAuthorize=true`;
      console.log(`ALM URL: ${almBaseURL}, Redirect URL: ${redirectUri}, Client ID: ${clientId}, Account ID: ${accountId}`);
      console.log(`Auth URL: ${authUrl}`);

      // Redirect the browser to the constructed URL
      window.location.href = authUrl;
    } catch (err) {
      console.error('Error fetching config:', err);
    }
  });

  // Append the button to the block
  var storedAccessToken = sessionStorage.getItem("ACCESS_TOKEN");
  console.log("storedAccessToken from button: " + storedAccessToken);
  if (storedAccessToken === null || storedAccessToken === "undefined") {
    block.append(button);
  }
  else 
  {
    console.log('inside else');

    // const ul = document.createElement('ul');
    [...block.children].forEach((row) => {
      console.log('inside foreach in button.js: ' + row.textContent.trim().toLowerCase());

      row.style.display = 'none';

      // const li = document.createElement('li');
      // while (row.firstElementChild) li.append(row.firstElementChild);
      // [...li.children].forEach((div) => {
      //   div.style.display = 'none';
      //   div.className = row.firstElementChild.innerText;
      //   console.log("text :: "+ row.firstElementChild.innerText);
      // });
      // ul.append(li);
    });
    // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    // block.textContent = '';
    // block.append(ul);
  
  }

}