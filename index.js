const Quotes = [
    {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
        author: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone"
    },
    {
        quote: "We must balance conspicuous consumption with conscious capitalism.",
        author: "Kevin Kruse"
    },
    {
        quote: "Life is what happens to you while you’re busy making other plans.",
        author: "John Lennon"
    },
    { quote: "We become what we think about.", "author": "Earl Nightingale" },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        author: "Mark Twain"
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll"
    }
];

const Colors = [
    "#C63711",
    "#AA1111",
    "#B3C611",
    "#8AC611",
    "#11C6A0",
    "#34A987",
    "#1911C6",
    "#6E11C6",
    "#3FAA11",
    "#5034A9"
];

function getQuote() {
    getRandomQuote()
};

function getRandomQuote() {
    const RandomIndex = Math.floor(Math.random() * Quotes.length);
    const RandomQuote = Quotes[RandomIndex];
    let twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22"

    let quoteInApiFormat = RandomQuote.quote.replace(/ /g, "%20");

    twitterUrl += quoteInApiFormat;

    let authorInApiFormat = RandomQuote.author.replace(/ /g, "%20");

    twitterUrl += " - " + authorInApiFormat;


    document.getElementById("tweet-quote").href = twitterUrl;
    document.getElementById("text").innerText = RandomQuote.quote;
    document.getElementById("author").innerText = RandomQuote.author;

    const RandomColor = Math.floor(Math.random() * Colors.length);
    $("body").animate(
        {
            backgroundColor: Colors[RandomColor],
            color: Colors[RandomColor]
        },
        1000
    );
    $(".button").animate(
        {
            backgroundColor: Colors[RandomColor]
        },
        1000
    );
}

$(document).ready(function () {
    getRandomQuote();
    $('#new-quote').on('click', getRandomQuote);
});