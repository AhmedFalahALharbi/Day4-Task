"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Q1
console.log("Q1:");
function capitalizeWords(word) {
    let capitalizedWord1 = word.toUpperCase();
    let capitalizedWord2 = capitalizedWord1.trim();
    return capitalizedWord2;
}
console.log(capitalizeWords("Hello"));
//Q2
console.log("Q2:");
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
console.log(isValidNumber(42));
console.log(isValidNumber("hello"));
console.log(isValidNumber(99));
//Q3
console.log("Q3:");
function createUser(user) {
    return `User ${user.name} created successfully`;
}
console.log(createUser({ id: 1, name: "ahmed", email: "ahmed@example.com" }));
console.log(createUser({ id: 2, name: "khalid", email: "khalid@example.com", isAdmin: true }));
// Q4
console.log("Q4:");
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getDiscountedPrice(discount) {
        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        return this.price - (this.price * discount) / 100;
    }
    getProductDetails() {
        return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
}
const product1 = new Product("Laptop", 1000, "Electronics");
console.log(product1.getProductDetails());
console.log(product1.getDiscountedPrice(10));
// Q5
console.log("Q5:");
function filterArray(array, predicate) {
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers);
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            console.log("Fetched data:", data);
            return data.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));
        }
        catch (error) {
            console.error("Error fetching users:", error);
            return [];
        }
    });
}
fetchUsers().then(users => console.log(users));
// Q7
console.log("Q7:");
function isValidPassword(password) {
    const weakPasswords = ["password", "123456", "qwerty", "123123", "welcome", "abc123", "letmein"];
    if (weakPasswords.includes(password.toLowerCase())) {
        console.log("Password is too common.");
        return false;
    }
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return false;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!regex.test(password)) {
        console.log("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }
    return true;
}
console.log(isValidPassword("Password123!"));
console.log(isValidPassword("password123"));
