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
  espositivo(numero: number): boolean {
    if (numero > 0) {
      return true;
    } else {
      return false;
    }
  }
  numeroelementosarray<T>(array: T[]): number {
    return array.length;
  }

  tengoesesubstring(a: string, b: string): boolean {
    return a.includes(b);
  }
  promedioarray(array: number[]): number {
    if (array.length == 0) {
      return 0;
    }
    var suma = 0;
    for (const numero of array) {
      suma += numero;
    }

    const promedio = suma / array.length;
    return promedio;
  }
  tepartoencachos(a: string): string[] {
    const meparto: string[] = [];

    for (let i = 0; i < a.length; i++) {
      meparto.push(a.charAt(i));
    }

    return meparto;
  }
  tepartoytesumo(a: number): number {
    let sumatorio = 0;
    const numeroPartio = a.toString();

    for (let i = 0; i < numeroPartio.length; i++) {
      sumatorio += parseInt(numeroPartio.charAt(i));
    }

    return sumatorio;
  }

  anagramos(a: string, b: string): boolean {
    const aTranformado = a.replace(/\s/g, "").toLowerCase();
    const bTransformado = b.replace(/\s/g, "").toLowerCase();

    if (aTranformado.length !== bTransformado.length) {
      return false;
    }

    for (let char of aTranformado) {
      if (!bTransformado.includes(char)) {
        return false;
      }
    }

    for (let char of bTransformado) {
      if (!aTranformado.includes(char)) {
        return false;
      }
    }

    return true;
  }
  comoDeGrandeEres(apotema: number, longitudLado: number, numeroLados: number): number {
    var area;
    if(numeroLados<3){
      area=0;
    }else{
    const perimetro = longitudLado * numeroLados;
    area = (perimetro * apotema) / 2;
    }
    return area;
  }
}
