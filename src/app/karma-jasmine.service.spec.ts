import { TestBed } from "@angular/core/testing";
import { KarmaJasmineService } from "./karma-jasmine.service";

describe("KarmaJasmineService", () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("debería sumar dos números correctamente", () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it("debería sumar números negativos correctamente", () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it("debería sumar un número positivo y un número negativo correctamente", () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it("debería restar dos números correctamente", () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it("debería restar números negativos correctamente", () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it("debería restar un número positivo y un número negativo correctamente", () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });
  it("debería multiplicar dos números correctamente", () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it("debería multiplicar números negativos correctamente", () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it("debería multiplicar un número positivo y un número negativo correctamente", () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });
  it("debería dividir dos números correctamente", () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it("debería dividir números negativos correctamente", () => {
    const resultado = service.dividir(-10, -2);
    expect(resultado).toBe(5);
  });

  it("debería dividir un número positivo y un número negativo correctamente", () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });
  it("Es par o no es par?", () => {
    const resultado = service.espar(6);
    expect(resultado).toBe(true);
  });
  it("Es par o no es par?", () => {
    const resultado = service.espar(5);
    expect(resultado).toBe(false);
  });
  it("Es palindromo o no ", () => {
    const resultado = service.palindromo("Anita lava la tina");
    expect(resultado).toBe(true);
  });
  it("Es palindromo o no ", () => {
    const resultado = service.palindromo("Pepiño me come o rabiño");
    expect(resultado).toBe(false);
  });
  it("Factorial", () => {
    const resultado = service.factorial(5);
    expect(resultado).toBe(120);
  });
  it("Factorial", () => {
    const resultado = service.factorial(1);
    expect(resultado).toBe(1);
  });
  it("Factorial", () => {
    const resultado = service.factorial(0);
    expect(resultado).toBe(1);
  });
  it("Número máximo el segundo es el mayor", () => {
    const resultado = service.numeromaximo(2, 6);
    expect(resultado).toBe("6");
  });
  it("Número máximo, el primero es el mayor", () => {
    const resultado = service.numeromaximo(8, 6);
    expect(resultado).toBe("8");
  });
  it("Número máximo, son iguales", () => {
    const resultado = service.numeromaximo(8, 8);
    expect(resultado).toBe("Ambos son iguales");
  });
  it("Cadena a Mayúsculas", ()=>{
    const resultado= service.amayusculas("Prueba");
    expect(resultado).toBe("PRUEBA");
  });
  it("Cadena a Mayúsculas", ()=>{
    const resultado= service.amayusculas("El patio de mi casa es particular");
    expect(resultado).toBe("EL PATIO DE MI CASA ES PARTICULAR");
  });
  it("comprobar si el número es primo", ()=>{
    const resultado = service.primo(12);
    expect(resultado).toBe(false);
  });
  it("comprobar si el número es primo", ()=>{
    const resultado = service.primo(13);
    expect(resultado).toBe(true);
  });
  it("comprobar si el número es primo", ()=>{
    const resultado = service.primo(33);
    expect(resultado).toBe(false);
  });
  it("comprobar si el número es positivo", ()=>{
    const resultado = service.espositivo(33);
    expect(resultado).toBe(true);
  });
  it("comprobar si el número es positivo", ()=>{
    const resultado = service.espositivo(-3);
    expect(resultado).toBe(false);
  });
  it("Cuantos elementos tiene un array", ()=>{
    const resultado = service.numeroelementosarray([1, 2, 3, 4, 5]);
    
    expect(resultado).toBe(5);
  });
  it("Cuantos elementos tiene un array", ()=>{
    const resultado = service.numeroelementosarray(["Juan", "María", "Carlos"]);
    
    expect(resultado).toBe(3);
  });

  it("tengo substring", ()=>{
    const resultado= service.tengoesesubstring("hola mundo","mundo");
    expect(resultado).toBe(true);
  });
  it("tengo substring", ()=>{
    const resultado= service.tengoesesubstring("hola mundo","mundillo");
    expect(resultado).toBe(false);
  });
  it("promedio del array",()=>{
    const resultado= service.promedioarray([1, 2, 3, 4, 5]);
    expect(resultado).toBe(3);
  });
  it("promedio del array",()=>{
    const resultado= service.promedioarray([10, 20, 30]);
    expect(resultado).toBe(20);
  });
  it("promedio del array",()=>{
    const resultado= service.promedioarray([]);
    expect(resultado).toBe(0);
  });
  it("partimos la pana", ()=>{
    const resultado=service.tepartoencachos("hola")
    expect(resultado).toEqual(["h","o","l","a"])
  })



});
