import {randomUUID} from "node:crypto"

interface ICreateUserDTO{
  name: string;
  age: number;
  role: string;
}

export class User{
  private id: string
  private name: string
  private age: number
  private role: string
  
  constructor({
    name,
    age,
    role
  }: ICreateUserDTO, id?: string){
    this.name = name;
    this.age = age;
    this.role = role;
    
    this.id = id ?? randomUUID()
  }

  getName(): string{
    return this.name
  }

  getAge(): number{
    return this.age
  }

  getRole(): string{
    return this.role
  }
}