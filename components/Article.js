// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import { data } from './Data'

  // Step 1: Write a component called 'articleMaker' to create an article.
  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:
function articleMaker(article) {
  const parentDiv = document.createElement('div')
  parentDiv.classList.add('article')

  const h2 = document.createElement('h2')
  h2.textContent = article.title

  const p = document.createElement('p')
  p.classList.add('date')
  p.textContent = article.date
  
  //   {three separate paragraph elements}
  function createParagraph(content) {
    const paragraph = document.createElement('p')
    paragraph.textContent = content
    return paragraph
  }
  const p1 = createParagraph(article.firstParagraph)
  const p2 = createParagraph(article.secondParagraph)
  const p3 = createParagraph(article.thirdParagraph)

  const span = document.createElement('span')
  span.classList.add('expandButton')
  span.textContent = '+'
  // Append everything to Parent div
  const children = [h2, p, p1, p2, p3, span]
  children.forEach(child => parentDiv.append(child))
   // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.
  span.addEventListener('click', e => parentDiv.classList.add('article-open'))
  // Step 3: Don't forget to return something from your function!
  return parentDiv
}

// console.log(articleMaker(data[0]))

  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  // to create a div.article element and append it to the DOM inside div.articles (see index.html).
  data.forEach(article => {
    document.querySelector('.articles').append(articleMaker(article))
  })

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  // Refresh the page to see the new article.

