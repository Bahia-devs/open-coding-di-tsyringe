import {randomUUID} from "node:crypto"

interface ICreateTaskDTO{
  userId: string;
  title: string;
  description: string;
}

export class Task{
  private id: string
  private userId: string
  private title: string
  private description: string
  
  constructor({
    userId,
    title,
    description
  }: ICreateTaskDTO, id?: string){
    this.userId = userId;
    this.title = title;
    this.description = description;
    
    this.id = id ?? randomUUID()
  }

  getUserId(): string{
    return this.userId
  }

  getTitle(): string{
    return this.title
  }

  getDescription(): string{
    return this.description
  }
}