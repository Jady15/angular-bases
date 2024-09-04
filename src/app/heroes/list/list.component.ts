import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //? Lista de elementos a iterar con *ngFor
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];

  //// Atributo para guardar el elemento borrado de la lista 'heroNames'
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
