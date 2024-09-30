export interface IDatabase {
  insert(table: "user" | "task", data: any): void
  list<T>(table: "user" | "task"): T[]
}