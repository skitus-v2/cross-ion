import { CapacitorHttp } from '@capacitor/core';

const apiKey = '6a77f133d8msh2f0432dcbcc5e55p161e34jsna30de5b9d99d';

async function fetchPlanets() {
  try {
    const response = await CapacitorHttp.get({
      url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'planets-info-by-newbapi.p.rapidapi.com'
      }
    });
    displayPlanets(response.data); // Передаємо дані для відображення
  } catch (error) {
    console.error('Помилка під час виконання запиту:', error);
  }
}

function displayPlanets(planets) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = ''; // Очищаємо вміст перед додаванням даних

  planets.forEach((planet) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet-card');

    // Додаємо зображення
    const img = document.createElement('img');
    img.src = planet.imgSrc.img;
    img.alt = planet.imgSrc.imgDescription;
    img.style.width = '100%';
    planetDiv.appendChild(img);

    // Додаємо назву планети
    const name = document.createElement('h2');
    name.textContent = planet.name;
    planetDiv.appendChild(name);

    // Додаємо опис планети
    const description = document.createElement('p');
    description.textContent = planet.description;
    planetDiv.appendChild(description);

    // Додаємо деталі планети
    const details = document.createElement('p');
    details.innerHTML = `<strong>Об'єм:</strong> ${planet.basicDetails.volume}<br><strong>Маса:</strong> ${planet.basicDetails.mass}`;
    planetDiv.appendChild(details);

    // Додаємо посилання на джерело
    const link = document.createElement('a');
    link.href = planet.wikiLink;
    link.textContent = 'Дізнатися більше';
    link.target = '_blank';
    planetDiv.appendChild(link);

    appDiv.appendChild(planetDiv);
  });
}

// Викликаємо функцію для завантаження даних
fetchPlanets();
