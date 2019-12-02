let quotes = [
  {
    name: "Stephen King",
    quote: "Get busy living or get busy dying."
  },
  {
    name: "John F.Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly."
  },
  {
    name: "Abraham Lincoln",
    quote:
      "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down."
  },
  {
    name: "Leonardo Da Vinci",
    quote:
      "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
  },
  {
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be."
  }
];

let btn = document.getElementById("btn");
let quoteTxt = document.getElementById("quote");
let author = document.querySelector("#quoteAuthor");

btn.addEventListener("click", generateQuote);

function generateQuote(e) {
  let random = Math.round(Math.random() * (quotes.length - 1));
  console.log(random);

  quoteTxt.innerHTML = `${quotes[random].quote}`;
  author.innerHTML = `${quotes[random].name}`;
}
