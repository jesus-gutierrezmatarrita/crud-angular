import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  constructor(private router:Router) {}

  getAll() {
    this.router.navigate(["list"])
  }

  save() {
    this.router.navigate(["add"])
  }
}
