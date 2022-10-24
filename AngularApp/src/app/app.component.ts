import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  typesOfCSS: string[] = ['CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind CSS'];
}
