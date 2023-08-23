import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {
  user: { email: string, password: string } = { email: '', password: '' };
     
  constructor (private http: HttpClient, private router:Router){}
 

  registerUser(){
    this.http.post('http://localhost:8080/user', this.user, httpOptions).subscribe(
      () => {
        alert("Registration Successful");
        this.router.navigate(['/login'])
      },
      (error) => {
        console.error("Registration Error:", error);
        alert("Registration failed. Please try again later.");
      }
    );
  }
}
