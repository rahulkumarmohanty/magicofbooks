import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { Books } from '../Books';
import { Users } from '../Users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private rs:RestService,private router:Router){
  }
  result=[];
  i:number=0;
  user!:Users;
  flag:boolean=true;
  users:Users[]=[]
  success:boolean=false;
  wishBooks:number[]=[];
  CompletedBooks:number[]=[];
  getUserDetails!:Users;
  addToWishList:boolean=true;
  wishList(ele:Books){
    this.success=this.rs.getMessage();
    
    if(this.success){
    console.log("hii");
    this.wishBooks=this.rs.getFullUsersDetails()["WishList"]
      this.flag=true;
      for(this.i=0;this.i<this.wishBooks.length;this.i++){
          if(this.wishBooks[this.i]==ele["id"]){
            alert("Already added to Wishlist")
            this.flag=false;
          }
      }
      if(this.flag){  
        alert("added to wishlist");
        //console.log("hii");
        this.getUserDetails=this.rs.getFullUsersDetails();
        this.wishBooks=this.rs.getFullUsersDetails()["WishList"];
        this.wishBooks.push(ele["id"]);
        this.CompletedBooks=this.rs.getFullUsersDetails()["Completed"];
        this.user={"id": this.rs.getFullUsersDetails()['id'],
        "userName":  this.rs.getFullUsersDetails()['userName'],
        "Password": this.rs.getFullUsersDetails()['Password'],
        "Phone":  this.rs.getFullUsersDetails()['Phone'],
        "Email":  this.rs.getFullUsersDetails()['Email'],
        "UserType": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
        this.rs.addWishList(this.user);
      }
      console.log(this.wishBooks);
    }
    else{

        this.router.navigateByUrl("/login");
    }
  }
  completed(ele:Books){
    this.success=this.rs.getMessage();
    
    if(this.success){
      this.flag=true;
      this.CompletedBooks=this.rs.getFullUsersDetails()["Completed"];
      for(this.i=0;this.i<this.CompletedBooks.length;this.i++){
          if(this.CompletedBooks[this.i]==ele["id"]){
            this.flag=false;
            alert("Already added to Completed");
            
          }
      }
      if(this.flag){
        alert("Added to Completed");
        this.CompletedBooks=this.rs.getFullUsersDetails()["Completed"];
        this.CompletedBooks.push(ele["id"]);
        this.wishBooks=this.rs.getFullUsersDetails()["WishList"];
        this.user={"id": this.rs.getFullUsersDetails()['id'],
        "userName":  this.rs.getFullUsersDetails()['userName'],
        "Password":  this.rs.getFullUsersDetails()['Password'],
        "Phone":  this.rs.getFullUsersDetails()['Phone'],
        "Email":  this.rs.getFullUsersDetails()['Email'],
        "UserType": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
        this.rs.addCompletedList(this.user);

      }
      console.log(this.CompletedBooks);
    }
    else{
        this.router.navigateByUrl("/login");
    }
    
  }
  
  
  books:Books[]=[];
  ngOnInit(): void {
    this.rs.getBooks().subscribe(
      (response: any)=>{
        this.books=response;

      })
    
    this.rs.getUsers().subscribe(
      (response: any)=>
      {
          this.users=response;
          for(this.i=0;this.i<this.users.length;this.i++){
            this.wishBooks=this.users[this.i]["WishList"];
            this.CompletedBooks=this.users[this.i]["Completed"];
            //console.log("hii");
            console.log(this.CompletedBooks);
          }
      }
      
    )  
  }
}
