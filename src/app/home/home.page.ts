import { Component } from '@angular/core';
import { ServidorProviderService } from '../servidor-provider.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDetails: any;
  
  constructor(public userService:ServidorProviderService) { }

  GetUserDetails(){
   
     this.userService.GetUsers().subscribe((data)=>{

        var anyData = <any>data;
        this.userDetails = anyData;

     })

  }

}
