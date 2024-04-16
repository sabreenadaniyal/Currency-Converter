#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const Currency = { USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280, };
let answer = await inquirer.prompt([
    { message: "Enter from currency", name: "from", type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"] },
    { message: "Enter to currency", name: "to", type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"] },
    { message: "Enter your amount", name: "amount", type: "number" }
]);
//Formula
//Currency[answer.to] / Currency[answer.from] * answer.amount
console.log(chalk.greenBright(Currency[answer.to] / Currency[answer.from] * answer.amount));
