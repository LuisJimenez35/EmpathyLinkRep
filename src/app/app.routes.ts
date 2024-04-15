import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LogicComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

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
