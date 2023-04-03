const loadRestCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data))
    .catch((err) => console.log("error: ", err.message));
};

const displayCountries = (data) => {
  console.log(data);
};
loadRestCountries();
