//🟢 Task 1 - Employee Login Eligibility

let employeeAge = 18;
let employeeID = true;
let attendance = 80;

if (employeeAge >= 18 && employeeID && attendance >= 75) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Task 2 -Student Grade System

let marks = 87;

if (marks >= 90 && marks <= 100) {
  console.log("Grade A+");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade A");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade B");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 🟢 Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
  balance = balance - withdraw;

  console.log("Transaction Successful");
  console.log("Remaining Balance:", balance);
} else {
  console.log("Transaction Failed");
}

// 🟢 Task 4 - Food Ordering App

let choice = 4;

switch (choice) {
  case 1:
    console.log("You Ordered Pizza");
    break;

  case 2:
    console.log("You ordered Burger");
    break;

  case 3:
    console.log("You ordered Shawarma");
    break;

  case 4:
    console.log("You Ordered Biryani");
    break;

  case 5:
    console.log("You Ordered juice ");
    break;

  default:
    console.log("Invalid Choice");
}

// 🟢 Task 5 - E-Commerce Discount

let purchase = 6000;
let isPremium = true;

let discount = 0;
let finalPrice = 0;

if (purchase > 5000 && isPremium) {
  discount = purchase * 0.2;
} else {
  discount = purchase * 0.1;
}

finalPrice = purchase - discount;

console.log("Original Price:", purchase);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

//🟢 Task 6 - Attendance Report

for (let day = 1; day <= 30; day++) {
  console.log("Day " + day + " Present");
}

//🟢 Task 7 - Even Number Generator

for (let number = 1; number <= 100; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

//🟢 Task 8 - Mobile Number Validation

let mobile = "9849929950";

if (
  mobile.length === 10 &&
  (mobile[0] === "6" ||
    mobile[0] === "7" ||
    mobile[0] === "8" ||
    mobile[0] === "9")
) {
  console.log("Valid Mobile Number");
} else {
  console.log("Invalid Mobile Number");
}

//🟢 Task 9 - Shopping Cart

let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

console.log("FirstItem ", cart[0]);
console.log("Last Item ", cart[cart.length - 1]);
console.log("Total Items ", cart.length);

//🟢 Task 10 - Employee Database

let employee = {
  name: "Chandu",
  salary: 50000,
  department: "IT",
  experience: 3,
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Experience:", employee.experience);

//🟢 Task 11 - Company ID Generator

let name = "Naveen";
let id = 1045;
let department = "Development";

console.log(`welcome ${name}`);
console.log(`Your Employee ID is EMP ${id}`);
console.log(`Department: ${department}`);

//🟢 Task 12 - User Registration

let userName = prompt("Enter Your Name");
let userAge = prompt("Enter Your Age");

let accept = confirm("Do you accept terms?");

if (accept) {
  alert("Registered Successfully");
} else {
  alert("Registration Cancelled");
}

//🟢 Task 13 - Salary Increment Calculator

let salary = 35000;
let increment = 15;

let incrementAmount = (salary * increment) / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary:", salary);
console.log("Increment Amount:", incrementAmount);
console.log("New Salary:", newSalary);

//🟢 Task 14 - Restaurant Bill Generator

let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;
let gst = (subtotal * 18) / 100;
let grandTotal = subtotal + gst;

console.log("Subtotal:", subtotal);
console.log("Gst (18%):", gst);
console.log("Grand Total:", grandTotal);




//🟢 Task 15 - Company Attendance Dashboard

let employees = {
    Rahul: "Present",
    Arun: "Absent",
    Kamal: "Present",
    Priya: "Present",
    Divya: "Absent"
};

let present = 0;
let absent = 0;

console.log("Present Employees:");
for (let name in employees) {
    if (employees[name] == "Present") {
        console.log(name);
        present++;
    }
}

console.log("Absent Employees:");
for (let name in employees) {
    if (employees[name] == "Absent") {
        console.log(name);
        absent++;
    }
}

console.log("Total Present:", present);
console.log("Total Absent:", absent);


//⭐ Mini Project (Team Assignment)

//Employee Management System (Console Version)

let employeees = [];

while (true) {

    let choice = Number(prompt(
        "===== Employee Management System =====\n" +
        "1. Add Employee\n" +
        "2. View All Employees\n" +
        "3. Search Employee by ID\n" +
        "4. Calculate Salary with Bonus\n" +
        "5. Check Experience Level\n" +
        "6. Delete Employee\n" +
        "7. Exit\n\n" +
        "Enter your choice:"
    ));

    switch (choice) {

        // Add Employee
        case 1:

            let id = prompt("Enter Employee ID:");
            let name = prompt("Enter Employee Name:");
            let salary = Number(prompt("Enter Salary:"));
            let department = prompt("Enter Department:");
            let experience = Number(prompt("Enter Experience (Years):"));

            let employee = {
                id: id,
                name: name,
                salary: salary,
                department: department,
                experience: experience
            };

            employeees.push(employee);

            alert("Employee Added Successfully!");
            break;

        // View Employees
        case 2:

            if (employeees.length == 0) {
                console.log("No Employees Found.");
            } else {

                console.log("----- Employee List -----");

                for (let i = 0; i < employeees.length; i++) {

                    console.log(
                        `ID: ${employeees[i].id}
Name: ${employeees[i].name}
Salary: ${employeees[i].salary}
Department: ${employeees[i].department}
Experience: ${employeees[i].experience} Years
-------------------------`
                    );

                }

            }

            break;

        // Search Employee
        case 3:

            let searchId = prompt("Enter Employee ID:");

            let found = false;

            for (let i = 0; i < employeees.length; i++) {

                if (employeees[i].id == searchId) {

                    console.log(employeees[i]);

                    found = true;
                    break;

                }

            }

            if (!found) {
                console.log("Employee Not Found");
            }

            break;

        // Salary Bonus
        case 4:

            let bonusId = prompt("Enter Employee ID:");

            let salaryFound = false;

            for (let i = 0; i < employeees.length; i++) {

                if (employeees[i].id == bonusId) {

                    let bonus = employeees[i].salary * 10 / 100;
                    let totalSalary = employeees[i].salary + bonus;

                    console.log(`Employee : ${employeees[i].name}`);
                    console.log(`Old Salary : ${employeees[i].salary}`);
                    console.log(`Bonus : ${bonus}`);
                    console.log(`New Salary : ${totalSalary}`);

                    salaryFound = true;
                    break;

                }

            }

            if (!salaryFound) {
                console.log("Employee Not Found");
            }

            break;

        // Experience
        case 5:

            let expId = prompt("Enter Employee ID:");

            let expFound = false;

            for (let i = 0; i < employeees.length; i++) {

                if (employeees[i].id == expId) {

                    if (employeees[i].experience >= 5) {

                        console.log(`${employeees[i].name} is Senior Employee`);

                    } else {

                        console.log(`${employeees[i].name} is Junior Employee`);

                    }

                    expFound = true;
                    break;

                }

            }

            if (!expFound) {
                console.log("Employee Not Found");
            }

            break;

        // Delete Employee
        case 6:

            let deleteId = prompt("Enter Employee ID:");

            let deleteFound = false;

            for (let i = 0; i < employeees.length; i++) {

                if (employeees[i].id == deleteId) {

                    employeees.splice(i, 1);

                    console.log("Employee Deleted Successfully");

                    deleteFound = true;

                    break;

                }

            }

            if (!deleteFound) {
                console.log("Employee Not Found");
            }

            break;

        // Exit
        case 7:

            alert("Thank You!");
            break;

        default:

            alert("Invalid Choice");

    }

    if (choice == 7) {
        break;
    }

}