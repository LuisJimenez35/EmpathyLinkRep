import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LogicComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LogicComponent,
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
