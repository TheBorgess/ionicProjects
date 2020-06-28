import { Component, OnInit } from '@angular/core';
import { ServidorProviderService } from '../servidor-provider.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  userDetails: any;

  constructor(public userService:ServidorProviderService) { }

  ngOnInit() {
     this.GetUserDetails();
  }

  GetUserDetails(){
   
   //// this.userService.GetUsers().subscribe((data)=>{

   ////    var anyData = <any>data;
   ////    this.userDetails = anyData;

   //// })

  }

}//END CLASS
