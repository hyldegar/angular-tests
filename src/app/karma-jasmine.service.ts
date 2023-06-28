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
  espar(a: number): boolean {
    if (a % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  palindromo(a: string): boolean {
    const palabra = a.toLowerCase().replace(/\s/g, "");
    return palabra === palabra.split("").reverse().join("");
  }

  factorial(a: number): number {
    let resultado = 1;
    if (a == 0 || a == 1) {
      a = 1;
    } else {
      for (let i = 1; i <= a; i++) {
        resultado *= i;
      }
    }
    return resultado;
  }
  numeromaximo(a: number, b: number): string {
    let resultado: string;

    if (a > b) {
      resultado = a.toString();
    } else if (a < b) {
      resultado = b.toString();
    } else {
      resultado = "Ambos son iguales";
    }
    return resultado;
  }

  amayusculas(a: string): string {
    return a.toLocaleUpperCase();
  }
  primo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }
  espositivo(numero:number):boolean{
    if(numero>0){
      return true;
    }else{
      return false;
    }
  }
  
}
