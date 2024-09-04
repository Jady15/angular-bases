import { Component } from "@angular/core";


@Component({
    //? Etiqueta HTML personalizada con la que se llama al template
    selector: 'app-counter',

     //? Estructura a cargar
    template: `
    <h1>{{title}}</h1>
    <hr>
    <!--// Binding con el atributo 'counter' de la clase AppComponent-->
    <h3>Counter: {{ counter }}</h3>

    <!--// Asignando funcionalidad a botones con métodos desde el AppComponent-->
    <button (click)="increaseBy(1)" >+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr>
    `, 
})
export class CounterComponent {
    //? Propiedades de la clase AppComponent
    public title: string = "Hola Counter";
    public counter: number = 10;

    //? Método para sumar valores al contador
    increaseBy( value: number):void {
        this.counter += value;
    }

    //? Método para restablecer el contador
    resetCounter():void {
    this.counter = 10;
    }
}



//* a-component: Implementa automáticamente la plantilla de un componente de Angular.