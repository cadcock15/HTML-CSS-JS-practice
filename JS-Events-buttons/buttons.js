//lesson link: https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events

/*  Although html5 began allowing an id to begin with a number (html4 could not), 
    CSS still does not allow an id to start with a number. Therefore the following
    does not work becuase querySelector('CSS selector here') takes CSS as input to 
    target elements.

    so for an html element of:
    <button id="1">Click Me</button>

    the javascript:
    const btn1 = document.querySelector('#1');//does not work
    const btn1 = document.querySelector('#b1');//works if id was changed to begin with a letter

    const btn1 = document.querySelector("[id='1']");//this alternative CSS selector works

    or you could simply use document.getElementbyId('1');
    instead of querySelector

    alternatively you may think you can use the Unicode Code Point for the digit one '\31' in css to get around 
    not being able to start and id with a digit. However this technique does not work with querySelector ie:
    const btn1 = document.querySelector('#\31');//does not work
*/
//Creating a button driven event

//Method 1: see the html

//Method 2:
//const btn2 = document.getElementById('2');//or use this
const btn2 = document.querySelector('[id="2"]');
btn2.onclick = () => alert("Hello World");

//Method 3: (the prefered method)
const btn3 = document.querySelector('[id="3"]');
btn3.addEventListener('click', () => {
    alert("Hello World");
});

//METHOD 3 with groups of nodes
const buttonsInGroup2 = document.querySelectorAll('#btnGroup2 > button');//selects all button child elements in btnGroup2
// we use the .forEach method to iterate through each button
buttonsInGroup2.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});

//callback function (e) demonstration
document.getElementById('4').addEventListener('dblclick', function (e) {//function (e) is a callback function from addEventListener
    console.log(e.target);
    e.target.style.borderColor = 'DeepSkyBlue';//note the css property "border-color" must be camel case instead of hyphin
});