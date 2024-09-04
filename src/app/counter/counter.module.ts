import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {

}

//* Los módulos son contenedores para realizar la cohesión de código que tiene funcionamiento en común.*/