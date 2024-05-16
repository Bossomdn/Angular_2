import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { DemographicComponent } from './demographic/demographic.component';
import { ChangeDirectiveDirective } from './change-directive.directive';
import { CustomIfDirective } from './custom-if.directive';
import { ReverseTextPipe } from './reverse-text.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CommonModule, DemographicComponent, ChangeDirectiveDirective, CustomIfDirective, ReverseTextPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siwakorn_Ass2';

  showContent: boolean = true;

  exampleText = 'Hello Angular!';

}
