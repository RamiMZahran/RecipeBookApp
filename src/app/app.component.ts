import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loaded = 'recipe';
  onNavigate(selected: string) {
    this.loaded = selected;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyATXqF6Usol3jI1rJXmxl4d69sVt3OaJx0',
      authDomain: 'ng-recipe-book-9f06f.firebaseapp.com'
    });
  }
}
