import inquirer from "inquirer";

export async function promptNewUser(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "document",
            message: "Document ID"
        },
        {
            type: "input",
            name: "full_name",
            message: "Full Name"
        },
        {
            type: "input",
            name: "nationality",
            message: "Nationality"
        }
    ])
}