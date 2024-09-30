import { singleton } from "tsyringe"
import { IDatabase } from "../types/idatabase"

@singleton()
export class InMemoryDatabase implements IDatabase{
  private db: any = {
    user: [],
    task: []
  }

  insert(table: string, data: any){
    this.db[table].push(data)
  }

  list(table: string){
    return this.db[table]
  }
}