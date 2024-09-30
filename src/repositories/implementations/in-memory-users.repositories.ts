import { inject, singleton } from "tsyringe";
import { IUsersRepository } from "../types/users.repository";
import { User } from "../../entities/user";
import { IDatabase } from "../../db/types/idatabase";

@singleton()
export class InMemoryUsersRepository implements IUsersRepository{
  constructor(
    @inject("Database") 
    private dbProvider: IDatabase
  ){
  }

  create(user: User): void{
    this.dbProvider.insert("user", user)
  }

  list(): User[]{
    return this.dbProvider.list<User>("user")
  }
}