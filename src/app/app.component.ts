import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'tutorial-est';
}
