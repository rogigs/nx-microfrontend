import { Component, OnInit } from '@angular/core';

import '@nx-example/shared/dialog-subscribe';
import '@nx-example/shared/footer';
import '@nx-example/shared/header';

@Component({
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  open = null;

  ngOnInit(): void {
    this.open = !sessionStorage.getItem('previouslyVisited');
    console.log(
      "🚀 ~ AppComponent ~ ngOnInit ~ !sessionStorage.getItem('previouslyVisited'):",
      !sessionStorage.getItem('previouslyVisited')
    );
  }
}
