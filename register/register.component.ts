import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private rs:RestService,private router:Router) { }
  users!:Users[];
  id:number=0;
  username:string="";
  password:string="";
  phone:string="";
  Email:string="";
  onClick:boolean=false;
  UserType:string="Customer";
  wishList:number[]=[];
  completed:number[]=[];
  user!:Users;
  i:number=0;
  length:number=0;
  success:boolean=false;
  userexist:boolean=false;
 
  register(){
    //console.log(this.onClick);
    this.onClick=true;
    this.user={
      "id":(this.length)+1,
      "userName":this.username,
      "Password":this.password,
      "Phone":this.phone,
      "Email":this.Email,
      "UserType":"Customer",
      "WishList":[],
      "Completed":[]
    }

    for(this.i=0;this.i<this.users.length;this.i++){
      if(this.users[this.i]["userName"]==this.username && this.users[this.i]["Password"]==this.password && this.users[this.i]["Email"]==this.Email){
        this.userexist=true;
        console.log("exit");
        break;
      }
      else{
        this.userexist=false;
      }
    }
    console.log(this.userexist);
    if(!this.userexist){
      this.userexist=false;
      this.rs.registerUser(this.user);
      this.router.navigateByUrl("/home");
    }
}
  ngOnInit(): void {
    this.rs.getUsers().subscribe((data)=>{
      this.users=data;
      this.length=this.users.length;
      this.success=this.rs.getMessage();
    })
  }

}
