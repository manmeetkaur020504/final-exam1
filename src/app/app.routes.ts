import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component'; 
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [

    { path: 'students', component: StudentsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/students', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
];
