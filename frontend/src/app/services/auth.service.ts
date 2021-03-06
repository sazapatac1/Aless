import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {JwtResponse} from '../models/jwt-response'
import {tap} from 'rxjs/operators';
import { Observable, BehaviorSubject} from 'rxjs';


@Injectable()
export class AuthService {
  baseurl = 'http://18.208.41.213:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'authorization': `token ${this.getToken()}`});

  constructor(private http: HttpClient) { }

  //users
  register(user: User): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.baseurl}/api/users/signUp`,
    user).pipe(tap(
      (res:JwtResponse) =>{
        if(res){
          //guardar token
          this.saveToken(res.accessToken, res.expiresIn)
        }
      })
    );   
  }

  login(user: User): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.baseurl}/api/users/signIn`,
    user).pipe(tap(
      (res:JwtResponse) =>{
        if(res){
          //guardar token
          this.saveToken(res.accessToken, res.expiresIn)
        }
      })
    );   
  }

  logout():void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  hasAccess(): Observable <any> {
    return this.http.get(this.baseurl + '/api/hasAccess', {headers: this.httpHeaders});
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token)
    localStorage.setItem("EXPIRES_IN", expiresIn)
    this.token = token
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }
}
