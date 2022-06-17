import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success:boolean=false;
  users:Users[]=[];
  username:string="";
  password:string="";
  var:boolean=true;
  user!:Users;
  onclick:boolean=false;
  constructor(private rs:RestService,private router:Router) { 
  }
  i:number=0;
  ngOnInit(): void {
    this.success=this.rs.getMessage();
    this.rs.getUsers().subscribe(
      (response)=>
      {
          this.users=response;
      }
    );
  }
  login(){
    this.onclick=true;
    for(this.i=0;this.i<this.users.length;this.i++){
      if((this.users[this.i]["userName"]==this.username) && (this.users[this.i]["Password"]==this.password)){
        this.success=true;
        console.log("success");
        this.rs.setMessage(true);
        this.rs.setUserLoggedIn(this.i);
        this.user={
          "id":this.users[this.i]["id"],
          "userName":this.users[this.i]["userName"],
          "Password":this.users[this.i]["Password"],
          "Phone":this.users[this.i]["Phone"],
          "Email":this.users[this.i]["Email"],
          "UserType":this.users[this.i]["UserType"],
          "WishList":this.users[this.i]["WishList"],
          "Completed":this.users[this.i]["Completed"],
          
        }
        this.rs.setFullUsersDetails(this.user);
        alert("login successful");
        this.router.navigateByUrl('/home');
        break;
      }
      else{
        this.rs.setMessage(false);
      }
  }

  }
  
}
