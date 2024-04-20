import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { StudentsComponent } from './students/students.component'; 
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,StudentsComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinalExam';
}
