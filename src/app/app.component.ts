import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = 'recipe';
  onNavigate(selected: string) {
    this.loaded = selected;
  }
}
