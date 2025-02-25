// 1. Create a function called changeText that changes the text inside the <h1> tag when called.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeText()">Change Text</button>
function changeText() {
    let MHselector = document.getElementById("main-heading");
    MHselector.innerHTML = "This is the new Heading Text CE";
}

// 2. Create a function called changeColor that changes the background color of the page when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeColor()">Change Background Color</button>
function changeColor() {
    document.body.style.backgroundColor = "red";
}

// 3. Create a function called toggleImage that toggles the visibility of the image when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="toggleImage()">Toggle Image</button>
function toggleImage() {
    let imag = document.getElementById("myImage");
    imag.width = "0";
}

// 4. Create a function called growBox that increases the size of the div box when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="growBox()">Grow Box</button>
function growBox() {
    let gbox = document.getElementById("box");
    gbox.style.width = "150px";
}

// 5. Create a function called changeParagraph that changes the text inside the paragraph when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeParagraph()">Change Paragraph</button>
function changeParagraph() {
    let para = document.getElementById("intro");
    para.innerHTML = "This is the new paragraph text";
}

// 6. Create a function called changeTextColor that changes the text color of the heading when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeTextColor()">Change Text Color</button>
function changeTextColor() {
    let tcolor = document.getElementById("intro");
    tcolor.style.color = "orange";
}

// 7. Create a function called hideParagraph that hides the paragraph when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="hideParagraph()">Hide Paragraph</button>
function hideparagraph() {
    let psel = document.getElementById("intro");
    psel.innerHTML = "";
}

// 8. Create a function called changeLink that changes the link URL to "https://www.google.com" and updates its text to "Go to Google" when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeLink()">Change Link</button>
function changeLink() {
    document.getElementById("myLink").href ="https://www.google.com";
}

// 9. Create a function called changeImage that changes the image source to "newimage.jpg" when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeImage()">Change Image</button>


// 10. Create a function called addBorder that adds a black border to the div box when a button is clicked.
// Add this function to the onclick attribute of a button in index.html: <button onclick="addBorder()">Add Border</button>
