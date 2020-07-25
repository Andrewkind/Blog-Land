

/**
 * Article Class
 */
class Article {
  // We can use constructors to set the base properties for our objects (name / age / hobbies in this case.)
  constructor(title = "", content = "") // Default values set in our parameters.
  {
    this.title = title;
    this.content = content;
  }

  /**
   * 
   */
  output() {

    // Logic to add to website html

   }

}

let articles = [
  
    new Article("First Day of Class(C#)",
    "Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!"),

  
    new Article("How to Build Websites (HTML)",
    "What a great day! We learned all about HTML, or HyperText Markup Language. It is the content and skeleton of the website."),
  
    new Article("Brand new Topic (CSS)",
    "Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look prettty, we get to define the styles."),
  
    new Article("Anoher New Topic!? (JS)",
    "Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpages."),
  
    new Article("Adding on to our JS (TS)",
    "Who knew we could use something to check our code for errors and offer addtional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!"),
  
    new Article("Time to React",
    "Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of learning curve but so useful now that we're getting the hang of it!"),
];

let article = new Article("hello", "world");
articles.push(article);


console.log(articles);
for (article of articles) {
  console.log(article.title);
  console.log(article.content);

}

console.log("go");
