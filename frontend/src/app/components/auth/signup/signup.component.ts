import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service'
import {User} from '../../../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onRegister(form):void{
    this.authService.register(form.value).subscribe(res =>{
      this.router.navigateByUrl('/home')
    })
    //console.log('Register',form.value)
  }

}
