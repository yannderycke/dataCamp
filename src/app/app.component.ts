import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataCamp';
  text:string;
  live: false;
  textData = `## Markdown content data`;
  textDataTa: string
  constructor() {
    this.textData = localStorage.getItem('markDown')
    this.textDataTa = localStorage.getItem('markDown')
  }

  public store(e) {
    localStorage.setItem('markDown', e.target.value);
    if (this.live) {
      this.textData = e.target.value;
    } else {
      this.text = e.target.value;
    }
    
  }

  public getMarkDown() {
    this.textData = this.text;
  }
}
