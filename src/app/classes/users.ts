export class Users {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    tel: string;
    adress: string;
    constructor(firstName : string,lastName : string,email : string,password : string,tel : string,adress : string){
        this.adress=adress;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.tel=tel;
        this.email=email;
    }
}


