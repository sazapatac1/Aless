import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ApiService, AuthService]
})
export class ProductsComponent implements OnInit {

  products;
  comments;
  id_userF = '5dd44b972dc16a28c4934d41'

  constructor(private api: ApiService, private auth: AuthService, private router:Router) {
      this.verifyAccess();
      this.getProducts();
      //this.getAllComments();
      //this.getComments('5dd4307299e4ad2038703d21');
  }

  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
        //console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

  verifyAccess = () => {
    this.auth.hasAccess().subscribe(
      res =>{
        console.log('has access')
      },
      error => {
        this.router.navigateByUrl('/denied')
      }
    )
  }

  getComments = (idProduct) =>{
    this.api.getComments(idProduct).subscribe(
      data =>{
        this.comments = data;
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  getAllComments = ()=>{
    this.api.getAllComments().subscribe(
      data =>{
        this.comments = data;
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  sendCommentary = (message, id_productF)=>{
    console.log(message)
    console.log(id_productF)
    this.api.sendCommentary(message, this.id_userF, id_productF).subscribe()
  }

  logout = () =>{
    this.auth.logout()
    this.router.navigateByUrl('/auth/login')
  }

  ngOnInit() {
  }

}
