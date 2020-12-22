import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poneycourse';
  numberOfUsers = 36;
  pangolin: any = { name: 'mignon' };
}
