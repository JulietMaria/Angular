import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  typesOfCSS: string[] = ['CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind CSS'];
  messages = [
    {
      from: 'Message 1',
      subject: 'Message Subject 1',
      content: 'Message Content 1'
    },
    {
      from: 'Message 2',
      subject: 'Message Subject 2',
      content: 'Message Content 2'
    },
  ]
  save() {
    alert('Saved!');
  }

  undo() {
    alert('Undo done!');
  }
}
