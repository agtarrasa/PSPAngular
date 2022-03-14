import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { BehaviorSubject } from 'rxjs';
import { Loginout } from '../model/loginout';
import { map } from 'rxjs';
map
Loginout
HttpClient

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logingBehaviourSubject: BehaviorSubject<Loginout | null>;
  public login: Observable<Loginout | null>;



  constructor(private http:HttpClient) {
  let elementoNavegador = <string>localStorage?.getItem('login');
  let elementoSerializado = JSON.parse(elementoNavegador);
  this.logingBehaviourSubject = new BehaviorSubject<Loginout | null>(elementoSerializado);
  this.login = this.logingBehaviourSubject.asObservable();

   }
  hacerLogin(loginIn: Login):Observable<Loginout>{
    return this.
    http.
    post<Loginout>('http://localhost:8080/api/authenticate',loginIn).
    pipe(map(respuestaBack =>{

      this.logingBehaviourSubject.next(respuestaBack);

      localStorage.setItem('login',JSON.stringify(respuestaBack));

      return respuestaBack;


    }));
  }
  verUsuarioConectado(): Loginout | null {
    return this.logingBehaviourSubject?.value;

  }

  logout(): void{
    localStorage.removeItem('login');
    this.logingBehaviourSubject.next(null);
    //Redirigir al login
  }
}



