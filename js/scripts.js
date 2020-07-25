

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
  output() { }

}

let articles = [];

let article = new Article("hello", "world");
articles.push(article);

for (article of articles) {
  console.log(article.title);
}
