import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correoE: string = '';
  contrasenaE: string = '';
  showPassword: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
}
