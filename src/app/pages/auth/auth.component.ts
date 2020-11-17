import { Component } from '@angular/core';
import { lighten } from '@wessberg/color';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  buttonHover = false;
  colors = [
    '#16A085',
    '#27AE60',
    '#2980B9',
    '#D3623B',
    '#01A3A4',
    '#EE5253',
    '#0ABDE3',
    '#6AB04C',
    '#22A6B3',
    '#7158E2',
  ];
  color: string = '#16A085';
  colorMain = '#16A085';
  constructor() {
    this.colorMain = this.colors[
      Math.floor(Math.random() * this.colors.length)
    ];
    this.color = this.colorMain;
  }
  mouseover() {
    this.color = lighten(this.colorMain, 2);
    console.log(this.color);
  }

  mouseleave() {
    this.color = this.colorMain;
    console.log(this.color);
  }
}
