/*add div 'content' with text to div 'container' */
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

/*adds a new paragraph element to the body after the div 'container' 
    instead of creating const reference to paragraph before we select
    it after it is added to DOM. Does the same thing as the example above*/
const body = document.querySelector('body');

body.appendChild(document.createElement('p'));
const paragraph = document.querySelector('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = 'color:red';/*for adding multiple style rules */

const myH3 = document.createElement('h3');
myH3.style.color = 'blue';/*sets one specific rule*/
myH3.textContent = "I'm a blue h3!";
body.insertBefore(myH3, container);/*instead of appending to end of parent we insert the first before the second element */

const myDiv = document.createElement('div');
myDiv.setAttribute('style', 'background: pink; border: 2px solid black; border-radius:5px;');
body.appendChild(myDiv);

const myH1 = document.createElement('h1');
myH1.textContent = "I'm in a div";

const myP2 = document.createElement('p');
myP2.textContent = "ME TOO!";

myDiv.appendChild(myH1);
myDiv.appendChild(myP2);


