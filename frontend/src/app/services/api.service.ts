import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://3.85.165.41:3000';

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  //products
  getAllProducts(): Observable <any> {
    return this.http.get(this.baseurl + '/api/products', {headers : this.httpHeaders});
  }

  getComments(idProduct): Observable <any> {
    return this.http.get(this.baseurl + '/api/comments/byProduct/'+idProduct, {headers: this.httpHeaders});
  }

  sendCommentary(message, id_userF,id_productF): Observable <any> {
    const body = {message: message , id_userF: id_userF, id_productF:id_productF};
    return this.http.post(this.baseurl + '/api/comments/', body, {headers: this.httpHeaders});
  }

  getAllComments(): Observable <any> {
    return this.http.get(this.baseurl + '/api/comments', {headers : this.httpHeaders});
  }

}
