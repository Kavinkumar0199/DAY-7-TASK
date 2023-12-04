
QUESTION : 1

A):

const object= new XMLHttpRequest();

const apiUrl = 'https://restcountries.com/v3.1/all';

 object.open('GET', apiUrl, true);

object.onload = function () {

    if (object.status === 200) {

        const countriesData = JSON.parse(object.responseText);

        const asiaCountries = countriesData.filter(country => country.region === 'Asia');

        console.log('Countries in Asia:');
        asiaCountries.forEach(country => {
            console.log(country.name.common);
        });
    } else {
        console.error('Error fetching data. Status code:', object.status);
    }
};
object.onerror = function () {
    console.error('Network error occurred');
};

object.send();

B):

const object1 = new XMLHttpRequest();

const apiUrl = "https://restcountries.com/v3.1/all";

object1.open("GET", apiUrl, true);

object1.onload = function () {
  if (object1.status === 200) {
    const countriesData = JSON.parse(object1.responseText);

    const smallPopulationCountries = countriesData.filter((country) => {
      const population = country.population;
      return population && population < 200000;
    });

    console.log("Countries with a population of less than 200,000:");
    smallPopulationCountries.forEach((country) => {
      console.log(country.name.common);
    });
  } else {
    console.error("Error fetching data. Status code:", object1.status);
  }
};

object1.onerror = function () {
  console.error("Network error occurred");
};

object1.send();

C):

const object2 = new XMLHttpRequest();

const apiUrl = 'https://restcountries.com/v3.1/all';

object2.open('GET', apiUrl, true);

object2.onload = function () {

    if (object2.status === 200) {

 const countriesData = JSON.parse(object2.responseText);
countriesData.forEach(country => {
            const name = country.name.common;
            const capital = country.capital && country.capital[0];
            const flag = country.flags && country.flags[0];
             console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    } else {
        console.error('Error fetching data. Status code:',  object2.status);
    }
};

    object2.onerror = function () {
    console.error('Network error occurred');
};
object2.send();

D):

const object3 = new XMLHttpRequest();

const apiUrl = "https://restcountries.com/v3.1/all";

object3.open("GET", apiUrl, true);

object3.onload = function () {
  if (object3.status === 200) {
    const countriesData = JSON.parse(object3.responseText);

    const totalPopulation = countriesData.reduce((acc, country) => {
      const population = country.population;
      return acc + (population ? population : 0);
    }, 0);

    console.log("Total Population of Countries:", totalPopulation);
  } else {
    console.error("Error fetching data. Status code:", object3.status);
  }
};

object3.onerror = function () {
  console.error("Network error occurred");
};

object3.send();


E):

const object4  = new XMLHttpRequest();

 const apiUrl = 'https://restcountries.com/v3.1/all';

 object4 .open('GET', apiUrl, true);

 object4 .onload = function () {
     if (object4 .status === 200) {
         const countriesData = JSON.parse(object4 .responseText);

         const usDollarCountries = countriesData.filter(country => {
            const currencies = country.currencies;
            return currencies && currencies.hasOwnProperty('USD');
        });

         console.log('Countries using US dollars as currency:');
        usDollarCountries.forEach(country => {
            console.log(country.name.common);
        });
    } else {
        console.error('Error fetching data. Status code:', object4 .status);
    }
};

object4 .onerror = function () {
    console.error('Network error occurred');
};

object4 .send();