import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.css']
})
export class ListDemoComponent implements OnInit {
  title = 'AngularApp';
  typesOfCSS: string[] = ['CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind CSS'];
  constructor() { }

  ngOnInit(): void {
  }

}
