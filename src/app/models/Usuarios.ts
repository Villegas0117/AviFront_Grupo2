export class Usuarios{
      id:number=0
      username:string=""
      password: string=""
      enabled: boolean = true;
      email:string=""
      fecha_registro:Date = new Date(Date.now())
      fecha_modificacion:Date=new Date(Date.now())
  }