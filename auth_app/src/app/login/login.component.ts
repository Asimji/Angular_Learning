import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: { email: string, password: string } = { email: '', password: '' };

  constructor(private http:HttpClient, private router:Router){}

  loginUser(){
        this.http.get('http://localhost:8080/user',{params:this.user}).subscribe((user:any)=>{
          const matchingUser=user.find((u:any)=>u.email===this.user.email && u.password===this.user.password)
          if(matchingUser){
            const token="success123";
            alert(`Welcome ${this.user.email}`)
            this.router.navigate(['/']);
          }
          else{
            alert("User Not Exist")
          }
        })
  }

}
