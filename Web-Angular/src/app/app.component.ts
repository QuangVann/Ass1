import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular';
  myName: string = "Quang Nv";
  myStatus: boolean = false;
  showInfo(name: string): string {
    return `Tên tôi là: ${name ? name : this.myName}`;
  }
}

