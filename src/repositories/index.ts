import { registry } from "tsyringe";
import { InMemoryUsersRepository } from "./implementations/in-memory-users.repositories";

@registry([
  {token: "UsersRepository", useClass: InMemoryUsersRepository},
])
class RepositoriesRegistry{}