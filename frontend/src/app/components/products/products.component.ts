import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ApiService]
})
export class ProductsComponent implements OnInit {

  products;
  comments;
  id_userF = '5dd44b972dc16a28c4934d41'

  constructor(private api: ApiService) {
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

  ngOnInit() {
  }

}
