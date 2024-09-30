import { registry } from "tsyringe";
import { InMemoryDatabase } from "./implementations/in-memory-database";

@registry([
  { token: "Database", useClass: InMemoryDatabase },
])
class DatabaseRegistry{}