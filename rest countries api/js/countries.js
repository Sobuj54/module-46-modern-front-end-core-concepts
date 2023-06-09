const loadRestCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data))
    .catch((err) => console.log("error: ", err.message));
};

const displayCountries = (countries) => {
  console.log(countries);
  const allCountriesHTML = countries.map((country) => getCountryHTML(country));

  const container = document.getElementById("countries");
  container.innerHTML = allCountriesHTML.join(" ");
};

const getCountryHTML = (country) => {
  return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `;
};

loadRestCountries();
