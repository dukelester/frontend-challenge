console.log('Contentscript injected');
let divElement = document.createElement('div');
let budgetElement = document.querySelector('.makeStyles-btb-27');
let budgetValue = budgetElement.textContent;
divElement.innerText = `Budget-to-Beat: ${budgetValue}`;
divElement.classList.add('budget');
const parentElement = document.querySelector('section');
parentElement.prepend(divElement);

divElement.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <p>Climate change is the long-term alteration in Earth's climate and weather
      patterns caused by human activity, such as the burning of fossil fuels and
      deforestation, as well as natural factors such as changes in the sun's intensity.
      </p>
      <p>The effects of climate change include rising sea levels, more frequent and
      severe weather events, and changes in temperature and precipitation patterns,
      which can have a range of impacts on ecosystems and human communities.
      </p>
      <button class="close-button">Close</button>
    </div>
    `;

  parentElement.prepend(modal);
  let closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    modal.remove();
  });
});

function createParagraph() {
  const queryTitle = 'climate change';
  const apiURL = `https://api.github.com/search/repositories?q=${queryTitle}`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const repositories = data.items.slice(0, 3);
      const paragraph = document.createElement('p');
      paragraph.innerHTML = repositories.map((repository) => `<b>${repository.description}`).join('<br>');
      parentElement.append(paragraph);
    });
}

createParagraph();
