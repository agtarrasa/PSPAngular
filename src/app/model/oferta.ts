import { isThisTypeNode } from "typescript";

export class Oferta {
  
  public id: number;

  public titulo: string;

  public description: string;

  public company: string;

  public salary: number;
  
  public city: string;

  public email: string;


  constructor(
    id: number, 
    titulo: string,
    description: string, 
    company: string, 
    salary: number, 
    city: string, 
    email: string
) {
    this.id = id
    this.titulo = titulo
    this.description = description
    this.company = company
    this.salary = salary
    this.city = city
    this.email = email
  }
 
  

}