//Q1
console.log("Q1:Implement a Utility Function")
function capitalizeWords(str: string): string {
   
    if (!str || str.trim().length === 0) {
        return '';
    }


    return str
        .split(' ')
        .map(word => {
            if (word.length === 0) return '';
            

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}


console.log(capitalizeWords("hello")); 
console.log(capitalizeWords("hello everyone")); 
console.log(capitalizeWords("HELLO WORLD")); 
console.log(capitalizeWords("  ")); 


//Q2
console.log("Q2:Number Validator Function")
function isValidNumber(value: unknown): boolean {
    return typeof value === "number" && !isNaN(value);
}

console.log(isValidNumber(42));     
console.log(isValidNumber("hello")); 
console.log(isValidNumber(99))

//Q3
console.log("Q3:Create a User System")
interface User {
 id: number
 name: string
 email: string
 isAdmin?: boolean
}

function createUser(user: User): string {
    return `User ${user.name} created successfully`;
}

console.log(createUser({ id: 1, name: "ahmed", email: "ahmed@example.com" })); 


console.log(createUser({ id: 2, name: "khalid", email: "khalid@example.com", isAdmin: true })); 

// Q4
console.log("Q4:Implement a Product Class")
class Product {

    private name: string;
    private price: number;
    private category: string;


    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }


    public getDiscountedPrice(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        return this.price - (this.price * discount) / 100;
    }

    public getProductDetails(): string {
        return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
}


const product1 = new Product("Laptop", 1000, "Electronics");
console.log(product1.getProductDetails()); 
console.log(product1.getDiscountedPrice(10));

// Q5
console.log("Q5:Filter Array")
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 


// Q7
console.log("Q7:Valid Password")
function isValidPassword(password: string): boolean {

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


// Q6
console.log("Q6:FetchUser")
async function fetchUsers(): Promise<{ id: number; name: string; email: string }[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Fetched data:", data);

        return data.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));

    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

fetchUsers().then(users => console.log(users));
