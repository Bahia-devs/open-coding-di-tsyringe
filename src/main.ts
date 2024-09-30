import "reflect-metadata"
import { container } from "tsyringe";
import "./db"
import "./repositories"
import { IUsersRepository } from "./repositories/types/users.repository";
import { User } from "./entities/user";

function main(){
  const usersRepository = container.resolve<IUsersRepository>("UsersRepository")

  // Create new user instance
  const newUser = new User({
    name: "John",
    age: 20,
    role: "Back-End developer"
  })

  // Persist new user
  usersRepository.create(newUser)

  // List users
  console.log(usersRepository.list())
  
}

main();