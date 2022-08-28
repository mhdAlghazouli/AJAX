const chuckSays = document.getElementById('chuckSays');
const refreshBtn = document.getElementById('refreshQuote');
const quote = document.getElementById('quote');
const chuckImg = document.getElementById('chuckImg');
const categorySelect = document.getElementById('categorySelect');

let defaultCategory = "dev";

const getCategories = () => {
  const url = `https://api.chucknorris.io/jokes/categories`
  fetch(url)
  .then(response => response.json())
  .then(categoryArr => {
    // for every index in categoryArr, we want to create an option tag and add the category text to the innerHTML and the value
    categoryArr.filter(element => element !== 'explicit')
    .map(element => {
      const catOption = document.createElement("option");
      catOption.innerHTML = element;
      catOption.value = element;
      categorySelect.appendChild(catOption);
    });
  });
  
}

refreshBtn.addEventListener('click', e => {
  e.preventDefault();
  getQuote(categorySelect.value);
});

window.addEventListener('DOMContentLoaded', e => {
  getCategories();
  getQuote(defaultCategory);
});

// IIFE - Immediate Invoked Function Expression
// (function(){
  //   fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())
//   .then(data => {
  //     console.log('here it is', data);
  //     quote.innerHTML = data.value;
  //   });
  // })//immediately call the annon function ();
  // ();
  
  function getQuote(categoryInput) {
    console.log('our category is', categoryInput);
    fetch(`https://api.chucknorris.io/jokes/random?category=${categoryInput}`)
    .then(response => response.json())
    .then(data => {
      console.log('here it is', data);
      quote.innerHTML = data.value;
    });
    console.log('function getQuote')
  };
  // const getQuote = () => {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('here it is', data);
  //       quote.innerHTML = data.value;
  //     });
  //     console.log('Arrow getQuote')
  // };