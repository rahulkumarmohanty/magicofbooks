import { Component, OnInit, ViewChild} from '@angular/core';
import { RestService } from './rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})
export class AppComponent implements OnInit{
  title1 = 'myapp';
  success:boolean=false;
  constructor(private rs:RestService,private router:Router){
  
  }
  
  logout(){
    if(this.rs.getMessage()){
      this.rs.setMessage(false);
      alert("logout successful");
      this.router.navigateByUrl('\home');
    }
    else{
      alert("Already logged out")
    }
    

  }
  ngOnInit(): void {
    this.success=this.rs.getMessage();
  }

  
  
 
  
}
  
  
  

