import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service'
import {User} from '../../../models/user'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { 
    this.verifyAccess()
  }

  ngOnInit() {
  }

  onLogin(form):void{
    this.authService.login(form.value).subscribe(res =>{
      this.router.navigateByUrl('/home')
    })
  }

  verifyAccess = () =>{
    this.authService.hasAccess().subscribe(
      res => {
        this.router.navigateByUrl('/home')
      },
      error => {
        console.log('No hay token')
      }
    )
  }

}
