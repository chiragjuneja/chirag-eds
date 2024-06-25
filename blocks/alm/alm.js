export default function decorate(block) {
    var storedAccessToken = sessionStorage.getItem("ACCESS_TOKEN");
    [...block.children].forEach((row) => {
      
      if (storedAccessToken === null || storedAccessToken === "undefined") {
        // Determine the type of content in the row
        const contentType = row.textContent.trim().toLowerCase();
  
        // Create and append the appropriate container based on the content type
        let containerDiv;
        switch (contentType) {
          case 'catalog':
            containerDiv = document.createElement('div');
            containerDiv.className = 'catalog__container';
            document.body.appendChild(containerDiv);
            break;
          case 'profile':
            containerDiv = document.createElement('div');
            containerDiv.className = 'profile__container';
            document.body.appendChild(containerDiv);
            break;
          case 'boards':
            containerDiv = document.createElement('div');
            containerDiv.className = 'boards__container';
            document.body.appendChild(containerDiv);
            break;
          case 'board':
            containerDiv = document.createElement('div');
            containerDiv.className = 'board__container';
            document.body.appendChild(containerDiv);
            break;
          case 'trainingpage':
            containerDiv = document.createElement('div');
            containerDiv.className = 'training__page__container';
            document.body.appendChild(containerDiv);
            break;
          case 'badges':
            containerDiv = document.createElement('div');
            containerDiv.className = 'badges__container';
            document.body.appendChild(containerDiv);
            break;
          case 'notification':
            containerDiv = document.createElement('div');
            containerDiv.className = 'notification__container';
            document.body.appendChild(containerDiv);
            break;
          case 'instance':
            containerDiv = document.createElement('div');
            containerDiv.className = 'instance__container';
            document.body.appendChild(containerDiv);
            break;
          case 'author':
            containerDiv = document.createElement('div');
            containerDiv.className = 'author__container';
            document.body.appendChild(containerDiv);
            break;      
          case 'skills':
            containerDiv = document.createElement('div');
            containerDiv.className = 'skills__container';
            document.body.appendChild(containerDiv);
            break;
          case 'activefields':
            containerDiv = document.createElement('div');
            containerDiv.className = 'activeFields__container';
            document.body.appendChild(containerDiv);
            break;
          case 'navigationbar':
            containerDiv = document.createElement('div');
            containerDiv.className = 'navigationBar__container';
            document.body.appendChild(containerDiv);
            break;
          case 'masthead':
            containerDiv = document.createElement('div');
            containerDiv.className = 'mastHead__container';
            document.body.appendChild(containerDiv);
            break;
          case 'categorybrowser':
            containerDiv = document.createElement('div');
            containerDiv.className = 'categoryBrowser__container';
            document.body.appendChild(containerDiv);
            break;
          case 'footer':
            containerDiv = document.createElement('div');
            containerDiv.className = 'footer__container';
            document.body.appendChild(containerDiv);
            break;
          default:
            console.warn(`Unknown content type: ${contentType}`);
            break;
        }
        block.append(containerDiv);
      }
    });
  }
  
  /*catalogContainer: ".catalog__container",
              trainingOverviewPage: ".training__page__container",
              boardsContainer: ".boards__container",
              boardContainer: ".board__container",
              badgesContainer: ".badges__container",
              notificationContainer: ".notification__container",
              instanceContainer: ".instance__container",
              profilePageContainer: ".profile__container",
              authorContainer: ".author__container",
              userSkillsContainer: ".skills__container",
              activeFieldsContainer: ".activeFields__container",
              navigationBarContainer: ".navigationBar__container",
              mastHeadContainer: ".mastHead__container",
              categoryBrowserContainer: ".categoryBrowser__container",
              footerContainer: ".footer__container"*/