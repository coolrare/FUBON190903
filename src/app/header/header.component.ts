import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter = 0;
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;


  constructor() {}

  ngOnInit() {}

  search(event: MouseEvent) {
    console.log(event);
    if (event.ctrlKey) {
      this.counter = this.counter + 1;
    }
    console.log('test');

    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;

  }
}
