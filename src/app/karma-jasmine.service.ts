import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class KarmaJasmineService {
  constructor() {}

  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
  multiplicar(a: number, b: number): number {
    return a * b;
  }
  dividir(a: number, b: number): number {
    return a / b;
  }
  espar(a:number): boolean {

    if(a%2 == 0 ){
      return true;
    }else{
      return false;
    }
  }
  palindromo(a:string): boolean{

    const palabra= a.toLowerCase().replace(/\s/g, '');
    return palabra === palabra.split('').reverse().join('');
    
  }

  factorial(a:number): number{
    if(a==0||a==1){
      a=1;
    }
    for(let i= a; i>1 ; i--){
      a= a*i-1;
    } 
    return a;
  }
}
