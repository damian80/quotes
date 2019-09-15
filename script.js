// Array

const quotes = [
    {
     name:'Walt Disney'
     quotes: 'All our dreams can come true - if we have the courage to pursue them.'
    },
    {
    name: 'Mother Teresa'
    quotes: 'I have found the paradox that if I love until it hurts, then there is no hurt, but only more love.  '
    },
    {
        name: 'Mat Ghandi'
     quotes: 'Where there is love there is life.'
    },
    {
    name: 'Walt Disney'
     quotes: 'All our dreams can come true - if we have the courage to pursue them.'
    },
    {
    name: 'Walt Disney'
     quotes: 'All our dreams can come true - if we have the courage to pursue them.'
    },

]
// 1.targeting button tag
const quoteBtn = document.querySelector('#quoteBtn');
// 2.targeting quote author section
const quoteAuthor = document.querySelector('#quoteAuthor');
// 3.targeting quote section
const quote = document.querySelector('#quote');

// 1.selecting created variable 'quoteBtn'
// adding 'eventListener',
// tell whats happend after click,
// and create function 'dipslayQuote'
quoteBtn.addEventListener('click', displayQuote);
// 2.telling function 'displayQuote' what to do,
//  and create METHOD 'Math.random'
//  which allows to generates random number(of quotes) for 'displayQuote'
//  which is not less than 0 and bigger than 5 in our situation

function displayQuote()  {
  let number = Math.floor(Math.random()*quotes.length)
}
