// Set up Clear button
let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {

  
  // Clear title
let titleText = document.querySelector(".new-blog-title");
let contentText = document.querySelector(".new-blog-content");

titleText.value = "";
contentText.value = "";

console.log("done done");
  // Clear content

});


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

    const section = document.querySelector(".blog-posts");

    let article = document.createElement("article");


    let paragraph = document.createElement("p");
    paragraph.innerText = `${this.title}`;


    // Create Delete 
    let deleteText = document.createElement("div");
    deleteText.innerText = " [delete]";
    deleteText.classList.add("delete");

    // Create container for delete and edit
    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");


    let date = document.createElement("div");
    date.classList.add("date");

    var d = new Date().toLocaleString();

    date.innerText = d;

    // When Delete is clicked, delete the item
    deleteText.addEventListener("click", function () {

      //delete this item
      let item = this.parentElement.parentElement;

      // Get label text. We need this to remove from the tasks array.
      //var text = item.childNodes[3].innerText;

      item.remove();

      // TODO: remove from articles array
    });



    // Create Edit 

    // When edit is clicked, begin editing
    paragraph.addEventListener("click", function () {

      //source: https://www.w3schools.com/jsref/tryit.asp?filename=try_dom_body_contenteditable

      // Make the label editable
      this.contentEditable = true;

      // Remove its For attr so we can edit the text without conflict
      this.classList.add("editable");

      this.focus();

    });


    paragraph.addEventListener("blur", function () {

      // remove style
      this.classList.remove("editable");

      // remove editable attr
      this.contentEditable = false;

    });

    // Add to Paragraph
    //paragraph.appendChild(deleteText);
    //paragraph.appendChild(editText);

    // Create content 
    let small = document.createElement("small");
    small.innerText = `${this.content}`;

    // make content editable
    // When edit is clicked, begin editing
    small.addEventListener("click", function () {

      //source: https://www.w3schools.com/jsref/tryit.asp?filename=try_dom_body_contenteditable

      // Make the label editable
      this.contentEditable = true;

      // Remove its For attr so we can edit the text without conflict
      this.classList.add("editable");

      this.focus();
    });


    small.addEventListener("blur", function () {

      // remove style
      this.classList.remove("editable");

      // remove editable attr
      this.contentEditable = false;

    });

    // Add title and content to article element

    detailsContainer.appendChild(deleteText);
    detailsContainer.appendChild(date);


    article.appendChild(paragraph);

    article.appendChild(detailsContainer);

    article.appendChild(small);

    // Add article (blog post) to the section (blog post holder)
    section.appendChild(article);
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

//let article = new Article("hello", "world");
//articles.push(article);

for (article of articles) {

  article.output();
}

let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", addClick);

function addClick(e) {

  e.preventDefault();
  let title = document.querySelector(".new-blog-title").value;
  let content = document.querySelector(".new-blog-content").value;

  let article = new Article(title, content);

  console.log(article);
  articles.push(article);
  article.output();
}
