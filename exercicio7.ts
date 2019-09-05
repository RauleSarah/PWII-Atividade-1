export class Piscina{

   
    constructor( public Diametro:number,public custoConstrucao:number){
        
        
       }
    
      Raio():number{
           return this.Diametro / 2 ;
           
       }
       Area():number{
        return 3.14159 * this.Raio() *this.Raio();
    }

        custoTotal(){
        return this.Area() * this.custoConstrucao;
        }


   }
   
