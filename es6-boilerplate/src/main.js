'use strict';

import Cat from "./components/cat";



var myCat = new Cat({
    type: 'Cat',
    age: 'Old',
    name: "Squiggles",

    isPurring: true,
    isDrinkingMilk: false
});


var article = {
    title: 'Hello Template Literals',
    teaser: 'String interpolation is awesome. Here are some features',
    body: 'Lots and lots of sanitized HTML',
    tags: ['es6', 'template-literals', 'es6-is-great']
}
var {title, teaser, body, tags} = article
var html = `<article> <header> 
<h1>${title}</h1> </header> <section> 
<div>${teaser}</div> <div>${body}</div> </section> <footer> <ul>
 ${tags.map(tag => `<li>${tag}</li>`).join('\n ')} </ul> </footer> 
 </article>`


function testme() {
    console.log("test");
}

var demoClassButton = document.getElementById('btnDemoClass');
var demoClassDiv = document.getElementById('demoClass');
demoClassButton.addEventListener('click', function () {
    demoClassDiv.innerHTML = myCat.getDetails();
}, false);



var stringInterBtn = document.getElementById('btnCreateArticle');
var stringInterDiv = document.getElementById('demoStringInter');
stringInterBtn.addEventListener('click', function () {
    stringInterDiv.innerHTML = html;
}, false);