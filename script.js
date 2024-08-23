window.onload = function() {

    document.querySelector('h1').textContent = "Latihan Javascript Selesai";
}

let name = "Jhon";
const age = 30;

document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}<br>`;
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("output").innerHTML += `Fruit: ${fruits[i]}<br>`;
}

let person = { fristName: "Jhon", lastName: "Doe", age: 30};
document.getElementById("output").innerHTML = `Namw: ${person.fristName} ${person.lastName}`;

function cekNilai() {
    let nilai = document.getElementById("userInput").value;
    let output = document.getElementById("output");
    output.innerHTML = "";

    if (nilai > 10) {
        output.innerHTML = "Nilai lebih besar dari 10";
    } else if (nilai == 10) {
        output.innerHTML = "Nilai sama dengan 10";
    } else {
        output.innerHTML = "Nilai kurang dari 10";
    }

    for (let i = 1; i <= nilai; i++) {
        output.innerHTML += `<br>${i}`;
    }
}

function greet(name) {
    return `Hello, ${name}`;
}
document.getElementById("output").innerHTML = greet("Alice");

function calculateSquare(number) {
    return number * number;
}
document.getElementById("output").innerHTML += `<br>Square of 4: ${calculateSquare(4)}`;

let sum = (a, b) => a + b;
document.getElementById("output").innerHTML += `<br>Sum of 3 and 5: ${sum(3, 5)}`;

let students = ["Alice", "Bob", "Charlie"];

students.push("David");
students.forEach(student => {
    document.getElementById("output").innerHTML += `<br>Student: ${student}`;
});

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
    document.getElementById("output").innerHTML += `<br>${key}: ${car[key]}`;
}

let cars = [
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Mustang", year: 2021 },
    { brand: "Chevrolet", model: "Camaro", year: 2020 }
];

cars.forEach(car => {
    document.getElementById("output").innerHTML += `<br>${car.brand} ${car.model}, Year: ${car.year}`;
});


