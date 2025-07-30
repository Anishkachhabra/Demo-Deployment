// function food() {
//     console.log("Food function called");
// }

// food();

// (function food2() {
//     console.log("Food2 function called");
// });

// food2 is a self-invoking function
// the output will be:
// Food2 function called

function func() {
    // document.getElementById("tag1")?.innerHTML = "Hello JavaScript!";
    // ? is used to check if the element exists before trying to access it
    // It is a compile time error if the element is not found
    // It safely accesses the element and avoids errors if the element is not found or null
    // the ? cannot be used on the left side of the assignment
    if (document.getElementById("tag1"))
        document.getElementById("tag1").innerHTML = "Hello JavaScript!";
}

// func();

// document.getElementById("tag1") represents the html element ans it is returned as an object
// .innerHTML is a property that allows you to get or set the HTML content of an element
// The above code will change the content of the element with id "tag1" to "Hello JavaScript!"
// The function func() is called to execute the code and change the content of the element

// setTimeout is a function that allows you to execute a function after a specified delay
// It takes two arguments: the function to execute and the delay in milliseconds
// In the example, func() will be executed after 5000 milliseconds (5 seconds)
// The commented out code below is an alternative way to use setTimeout

/*
setTimeout(() => {
    document.getElementById("tag1").innerHTML = "Hello JavaScript!";
}, 2000);
*/

// setTimeout(func, 5000);

// Create an array with a few strings
let webStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
// Use the forEach method to iterate over the array and log each element
// Set up an interval that cycles through the webStack array repeatedly

// ----------------------------------

/*
let currentIndex = 0;
setInterval(() => {
    if (document.getElementById("tag1")) {
        document.getElementById("tag1").innerHTML = "Hello " + webStack[currentIndex] + "!";
        // Move to next item in the array, loop back to beginning when reaching the end
        currentIndex = (currentIndex + 1) % webStack.length;
    }
}, 3000);
*/

// ----------------------------------

// JavaScript is an Object-Oriented Programming (OOP) language and scripting language
// It is used to create interactive web pages and can be run in web browsers

let productList = [];


function addData(renderProducts) {
    setTimeout(() => {
        productList = productListFromServer
        console.log("Data added successfully");
        // Call the renderProducts function to update the UI with the new data
        renderProducts();
    }, 2000);
}

function loadData() {
    // in real world application, we fetch the data from the server
    // then we convert the data to HTML and render it on the page

    document.getElementById("tag3").innerHTML = `
<table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>$10</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Product 2</td>
                    <td>$20</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Product 3</td>
                    <td>$30</td>
                    <td>300</td>
                </tr>
            </tbody>
        </table>
`;
}

// setTimeout(loadData, 2000);


// hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase
// This means that you can use variables and functions before they are declared in the code

// hositing moves the function declaration to the top of the inner most scope

// Value is not hoisted, only the declaration is hoisted

// Javascript is launched in 2 modes: 
// 1. non-blocking mode: defer and async are the part of non-blocking mode
// 2. blocking mode: the script is executed immediately when it is encountered in the HTML document

function loadTable() {
    function renderProducts() {
        if (productList.length === 0) {
            document.getElementById("tag3").innerHTML = "<p>Loading products from the server...</p>";
            return;
        }
        document.getElementById("tag3").innerHTML = `
<table>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                ${productList.map((product, index) => {
            return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.name}</td>
                        <td>$${product.price}</td>
                        <td>${product.quantity}</td>
                    </tr>
                    `
        }).join('')}
            </tbody>
        </table>
`;
    }

    addData(renderProducts);
    renderProducts();
}

loadTable();

const foo = () => { }
// This is an arrow function, a more concise way to write functions in JavaScript
// Arrow functions are often used for callbacks and can make the code cleaner and more readable
// Also known as anonymous functions, they do not have their names
// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope

// CallBack

// A function becomes a callback when it is passed as an argument to another function
// Callbacks are used to handle asynchronous operations, such as fetching data from a server or waiting for user input
// Here, the `renderProducts` function is passed as a callback to the `addData` function
// This allows `addData` to call `renderProducts` once the data is ready, ensuring that the UI is updated with the latest product information
// A callback function is not a type of function, but rather a way to use functions as arguments
// Callbacks are essential for handling asynchronous operations in JavaScript, allowing you to execute code after a certain task is completed

/*
Functions are of two types in JavaScript:
1. Named Functions: These are functions that have a name and can be called by that name.
2. Anonymous Functions: These are functions that do not have a name and are often used to immediately invoked functions. eg. Arrow functions
* A function can be defined with N no. of arguments, but it can be called with any number of arguments.
* JavaScript functions are first-class citizens, meaning they can be passed as arguments to other functions

* Functions can be defined in different ways, such as function declarations, function expressions, and arrow functions.
* Functions can be nested, meaning you can define a function inside another function.
* Functions can return values, and if no value is returned, they return `undefined` by default.
* Functions can be invoked immediately after they are defined, known as Immediately Invoked Function Expressions (IIFE).
* Functions can be used to create closures, which allow you to maintain state across function calls.
* Functions can be used to create higher-order functions, which are functions that take other functions as arguments or return functions.
* Functions can be used to create callbacks, which are functions that are passed as arguments to other functions and executed later.
* Functions can be used to create promises, which are used to handle asynchronous operations in JavaScript.
*/

// In javascript map function, it is used to iterate over an array and apply a function to each element, returning a new array with the results.
// The map function does not modify the original array, it creates a new array with the results of the function applied to each element
// The map function converts the array elements to a string and joins them with a comma
// The map function is often used to transform data in an array, such as converting an array of objects to an array of strings or numbers
// The map function is a higher-order function, meaning it takes a function as an argument and returns a new function

