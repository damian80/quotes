
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
//  so to make sure the number will never exceed the last quote or go lower then 0 we are using'.length'

function displayQuote()  {
let number = Math.floor(Math.random()*quotes.length);
// 3.let select name and quote from our 'Array'
// we going to use 'innerHTML' property
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
}



// Array

const quotes = [
    {
    name: 'Walt Disney',
    quote: 'All our dreams can come true - if we have the courage to pursue them.'
    },
    {
        name: 'Mother Teresa',
    quote: 'I have found the paradox that if I love until it hurts, then there is no hurt, but only more love.  '
    },
    {
        name: 'Mat Ghandi',
     quote: 'Where there is love there is life.'
    },
    {
        name: 'Damian Ciasnocha',
     quote: 'Oh Joy.'
    },
    {
        name: 'Julia Ciasnocha',
     quote: 'Yyyyyyyyyyyyyyyyy.'
    },

]
