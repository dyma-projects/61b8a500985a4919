import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss'],
})
export class Exercice1Component implements OnInit {
  type: string;
  bonjour: string = 'Salut';
  constructor() {}

  ngOnInit(): void {}

  changeType() {
    this.type = 'checkbox';
  }
  display() {
    console.log('click');
  }
}
