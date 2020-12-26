import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
})
export class PoneyComponent implements OnInit {
  size = 2;

  poneys: Array<any> = [
    { name: 'Poney mignon' },
    { name: 'Poney grosminet' },
    { name: 'Poney fastounminet' },
    { name: 'Poney fastounet' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
