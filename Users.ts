export class Users{
    id:number;
    userName:string;
    Password:string;
    Phone:string;
    Email:string;
    UserType:string;
    WishList:number[];
    Completed:number[];
    constructor(id:number,userName:string,Password:string,Phone:string,Email:string,UserType:string,WishList:number[],Completed:number[]){
        this.id=id;
        this.userName=userName;
        this.Password=Password;
        this.Phone=Phone;
        this.Email=Email;
        this.UserType=UserType;
        this.WishList=WishList;
        this.Completed=Completed;

    }
}