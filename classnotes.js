// Selecting elements we want to change

// Select with an ID
    document.getElementById("box"); // Return a single element

// Get by ClassName
    document.getElementsByClassName("card-img"); // Returns an array of elements

// Get by Tagname
    document.getElementsByTagName("div") // Returns an array of elements
    document.getElementsByTagName("div")[0] // Returns the first element in the array

// query Selector 

    // document.querySelector(); // Selects the first matching element using CSS selectors.
        document.querySelector("h3, h4"); // This is returning all h3 and h4 elements, using the css selector syntax

    // document.querySelectorAll(); // Selects all matching elements using CSS selectors.
        document.querySelectorAll(".example"); // This is selecting all elements with the css classname selector ".example"
// Changing Element Text
    let introP = document.getElementById("intro");
    introP.innerHTML = "Hi there! I am new text in the HTML"; // You an add text, numbers, template literals, and functions here

    let introP = document.getElementById("intro");
    introP.innerHTML = helloTHere(); // You can add a function that returns some text to the innerHTML
    
    function helloTHere( ) {
        return "hello there"
    }

// Changing the style of an Element
    let redBox = document.getElementById("box");
    redBox.style.backgroundColor = "red"; // selects the element with id = box, and changes the background color to red
    redBox.style.border = "6px dotted pink"; // changes the border

// Changing the attribute of an Element
    let img = document.getElementsByTagName("img")[0]; // returns [ img ], so we have to access the element at positon 0
    img.src = "https://www.kroger.com/product/images/xlarge/front/0000000004430";


// Adding an onclick to a button
    let button = document.getElementById("addLink");

    // This function is changing the href attribute on our anchor tag
    function changeLink() {
        document.getElementById("myLink").href = "https://github.com/";
    };

    button.onclick = changeLink; // Adds the onclick to the button

// Adding an onclick in HTML
// <button id="addLink" onclick="changeLink()"> Change Link </button>;
