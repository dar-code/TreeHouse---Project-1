// Below "quotes" array of objects holds values of the following properties: quotes, sources, citations, years, and tags. Not all objects have the same properies.

let quotes = [
  {
    quote: "Running is my private time, my therapy, my religion.",
    source: "Gail W. Kislevitz",
    citation: "First Marathons",
    year: 1999,
    tags: "running"
  },
    {
    quote: "A race is a work of art that people can look at and be affected in as many ways they’re capable of understanding.",
    source: "Steve Prefontaine",
  },
    {
    quote: "My feeling is that any day I am too busy to run is a day that I am too busy.",
    source: "John Bryant",
    tags: "running"
  },
    {
    quote: "All it takes is all you got.",
    source: "Marc Davis",
    tags: "motivational"
  },
    {
    quote: "Pain is inevitable. Suffering is optional.",
    source: "Haruki Murakami",
  },
    {
    quote: "It is a rough road that leads to the heights of greatness.",
    source: "Seneca",
    tags: "motivational"
  },
    {
    quote: "Do a little more each day than you think you possibly can.",
    source: "Lowell Thomas",
    tags: "motivational"
  },
    {
    quote: "If you run, you are a runner. It doesn’t matter how fast or how far. It doesn’t matter if today is your first day or if you’ve been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run.",
    source: "John Bingham",
    tags: "running"
  },
    {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    source: "Confucius",
    tags: "motivational"
  }
];

// Function "getRandomQuote" creates a random number and uses that number as an index value to pull a random quote from the "quotes" array

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber]; 
}

// Function "printQuote" will print a random quote using the listed HTML format. Citation, year, and tag will be printed only if this propery is present in the array for the specific "theQuote"
// "getRandomQuote" function will be stored in "theQuote" variable within the "printQuote" function

function printQuote() {

let theQuote = getRandomQuote();

let print = '';

print = '<p class="quote">' + theQuote.quote + '</p>'
print += '<p class="source">' + theQuote.source;
  
if (theQuote.citation) {
  print += '<span class="citation">' + theQuote.citation + '</span>'
}
  if (theQuote.year) {
  print += '<span class="year">' + theQuote.year + '</span>'
}
  if (theQuote.tags) {
  print += '<span class="year">' + '(' + theQuote.tags + ')' + '</span>' + '</p>';
}

document.getElementById('quote-box').innerHTML = print;

return print;

}

// Quote will change every 25 seconds if the button is "Show anoter quote" button is not clicked or the page is not refreashed. 25000 is the number of miliseconds that the page will take to refreash. "setInterval" repeats the execution of the "printQuote" function continuously.

setInterval(printQuote, 25000),

document.getElementById('load-quote').addEventListener("click", printQuote, false);