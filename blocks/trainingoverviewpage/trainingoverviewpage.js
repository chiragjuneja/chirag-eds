export default function decorate(block) {
    [...block.children].forEach((row) => {
        // Determine the type of content in the row
        const contentType = row.textContent.trim().toLowerCase();
        // Create and append the appropriate container based on the content type
        let containerDiv;
        switch (contentType) {
          case 'trainingpage':
            containerDiv = document.createElement('div');
            containerDiv.className = 'training__page__container';
            document.body.appendChild(containerDiv);
            break;
          default:
            console.warn(`Unknown content type: ${contentType}`);
            break;
        }
        block.append(containerDiv);
    });
  }
  