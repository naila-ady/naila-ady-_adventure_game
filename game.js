#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//creating class
class Player1 {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25;
        this.fuel = Fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Player2 {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25;
        this.fuel = Fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
const player1 = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name",
    }
]);
//console.log(player) 
const player2 = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "select your opponent",
        choices: ["Zombie", "Howdy", "Killer"]
    }
]);
//console.log(player2) 
//creating instance of an object 
let p1 = new Player1(player1.name);
let p2 = new Player2(player2.select);
//condition for playing with first member from list
do {
    // if player 2 is selected as zombie
    if (player2.select == "Zombie") {
        //making prompt to ask for the gaming option
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select an option",
                choices: ["Attack", "Have coins", "Save ur life"]
            }
        ]);
        //different loops for differnet choices 
        if (ask.option == "Attack") {
            console.log(chalk.bold.yellowBright("Ready for attack"));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.italic.green(`${p1.name} fuel decrease to ${p1.fuel}`));
                console.log(chalk.italic.yellowBright(`${p2.name} fuel remains  ${p2.fuel}`));
                //condition for checking the fuel for player1 
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red(`Dear ${p1.name} you loose! Better luck next time`));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.italic.yellowBright(`${p2.name} fuel decrease to ${p2.fuel}`));
                console.log(chalk.italic.green(`${p1.name} fuel remains ${p1.fuel}`));
                //condition for checking the fuel for player 2
                if (p2.fuel <= 0) {
                    console.log(chalk.bold.green(`Dear ${p1.name} You Win !`));
                    process.exit();
                }
            }
            ;
        }
        ;
        //condition for 2nd choice
        if (ask.option == "Have coins") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`${p1.name} Quickly receive fuel points`));
        }
        //condition for 3rd choice 
        if (ask.option == "Save ur life") {
            console.log(chalk.red.italic.bold(`You skip to play !Better luck next time`));
            process.exit();
        }
    }
    //for if player 2 is selected as Howdy
    if (player2.select == "Howdy") {
        //making prompt to ask for the gaming option
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select an option",
                choices: ["Attack", "Have coins", "Save ur life"]
            }
        ]);
        //different loops for differnet choices 
        if (ask.option == "Attack") {
            console.log(chalk.bold.yellowBright("Ready for attack"));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.italic.green(`${p1.name} fuel decrease to ${p1.fuel}`));
                console.log(chalk.italic.yellowBright(`${p2.name} fuel remains  ${p2.fuel}`));
                //condition for checking the fuel for player1 
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red(`Dear ${p1.name} you loose! Better luck next time`));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.italic.yellowBright(`${p2.name} fuel decrease to ${p2.fuel}`));
                console.log(chalk.italic.green(`${p1.name} fuel remains ${p1.fuel}`));
                //condition for checking the fuel for player 2
                if (p2.fuel <= 0) {
                    console.log(chalk.bold.green(`Dear ${p1.name} You Win !`));
                    process.exit();
                }
            }
            ;
        }
        ;
        //condition for 2nd choice
        if (ask.option == "Have coins") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`${p1.name} Quickly received fuel coins`));
        }
        //condition for 3rd choice 
        if (ask.option == "Save ur life") {
            console.log(chalk.red.italic.bold(`You loose better luck next time`));
            process.exit();
        }
    }
    //for if player 2 is selected as Killer
    if (player2.select == "Killer") {
        //making prompt to ask for the gaming option
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select an option",
                choices: ["Attack", "Have coins", "Save ur life"]
            }
        ]);
        //different loops for differnet choices 
        // condition for 1st choice
        if (ask.option == "Attack") {
            console.log(chalk.bold.yellowBright("Ready for attack"));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.italic.green(`${p1.name} fuel decrease to ${p1.fuel}`));
                console.log(chalk.italic.yellowBright(`${p2.name} fuel remains  ${p2.fuel}`));
                //condition for checking the fuel for player1 
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.yellowBright(`Dear ${p1.name} you loose! Better luck next time`));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.italic.yellowBright(`${p2.name} fuel decrease to ${p2.fuel}`));
                console.log(chalk.italic.green(`${p1.name} fuel remains ${p1.fuel}`));
                //condition for checking the fuel for player 2
                if (p2.fuel <= 0) {
                    console.log(chalk.bold.green(`Dear ${p1.name} You Win !`));
                    process.exit();
                }
            }
            ;
        }
        ;
        //condition for 2nd choice
        if (ask.option == "Have coins") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`${p1.name} Quickly received fuel coins`));
        }
        //condition for 3rd choice 
        if (ask.option == "Save ur life") {
            console.log(chalk.red.italic.bold(`You loose better luck next time`));
            process.exit();
        }
    }
} while (true);
