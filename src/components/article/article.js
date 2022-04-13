import './article.less'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
import articleData from "./articleData"

function articleMaker(articleData){
  const articleContainer = document.createElement("div")
  const aTitle = document.createElement("h2");
  const aDate =document.createElement("p");
  const aParagraph1 = document.createElement("p");
  const aParagraph2 = document.createElement("p");
  const aParagraph3 = document.createElement("p");
  const expandButton = document.createElement("span");

 
  articleContainer.classList.add("article")
  aDate.classList.add("title");
  expandButton.classList.add("expandButton")

  articleContainer.appendChild(aTitle);
  articleContainer.appendChild(aDate);
  articleContainer.appendChild(aParagraph1);
  articleContainer.appendChild(aParagraph2);
  articleContainer.appendChild(aParagraph3);
  articleContainer.appendChild(expandButton)
  

  aTitle.textContent = articleData.title;
  aDate.textContent = articleData.date;
  aParagraph1.textContent = articleData.firstParagraph;
  aParagraph2.textContent = articleData.secondParagraph;
  aParagraph3.textContent = articleData.thirdParagraph;
  expandButton.textContent = "+";
  
  expandButton.addEventListener("click", ()=>{
    articleContainer.classList.toggle("article-open")
  });
  return articleContainer;
}

articleData.forEach(data =>{
  const dataElem = articleMaker(data);
  document.querySelector(".articles").appendChild(dataElem);
})

