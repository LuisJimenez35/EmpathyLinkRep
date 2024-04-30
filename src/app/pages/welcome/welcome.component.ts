import { Component, OnInit, inject, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthService } from '../../services/Firebase/Auth/auth.service';
import { UserInterface } from '../../models/user.interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})

export class WelcomeComponent /*implements OnInit*/ {
    showFiller = false;
    AuthUserService = inject(AuthService)
    router = inject(Router);

    @Input() user: UserInterface | undefined;

    constructor() {
        console.log(this.user);
    }
}
