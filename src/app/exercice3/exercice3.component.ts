import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss'],
})
export class Exercice3Component implements OnInit {
  bool: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  change() {
    this.bool = !this.bool;
  }
}
