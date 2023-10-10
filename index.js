import inquirer from "inquirer";
import { promptNewUser } from "./userPrompts.js";
import { save, get } from "./filesMethods.js";
const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chossen",
        message: "Actions",
        choices: [
          {
            value: 1,
            name: "Create new User",
          },
          {
            value: 2,
            name: "Get all users",
          },
          {
            value: 3,
            name: "Exit",
          },
        ],
      },
    ]);
    switch (action.chossen) {
      case 1:
        await createNewUser();
        break;
      case 2:
        await getAllUsers();
      case 3:
        run = false
      default:
        run = false
        break;
    }
  }
};

main();

async function createNewUser() {
  console.log("adding new user");

  const newUserData = await promptNewUser();

  console.log("data del usuario", newUserData)

  const currentUsers = await get("users.json")

  currentUsers.push(newUserData)

  await save("users.json", currentUsers)

}

async function getAllUsers(){
    const currentUsers = await get("users.json")

    console.log(currentUsers)
}