"use strict"

// 1 // Асинхронний JS - це не те ж саме, що й одночасний або багатопотоковий. JavaScript може мати асинхронний код,
//  але він, як правило, однопотоковий. Це як в ресторані з одним працівником, який робить все: подача і приготування їжі. 
//  Але якщо цей працівник працює досить швидко і може перемикатися між завданнями досить ефективно, то буде здаватися, 
//  що у ресторані є кілька робітників.

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");

  const resultUl = document.getElementById("result");

  searchButton.addEventListener("click", async () => {
    try {
      const ipResponse = await fetch("https://api.ipify.org/?format=json");

      const ipData = await ipResponse.json();

      const ipAddress = ipData.ip;

      const locationResponse = await fetch( `http://ip-api.com/json/${ipAddress}`);

      const locationData = await locationResponse.json();

      resultUl.innerHTML = `
                <li>Continent: ${locationData.timezone}</li>
                <li>The country: ${locationData.country}</li>
                <li>Region: ${locationData.region}</li>
                <li>City: ${locationData.city}</li>
                <li>District: (${locationData.lat},
                                ${locationData.lon})</li>
            `;
    } catch (error) {
      console.error("Error:", error);
    };
  });
});
