import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ServidorProviderService {


  constructor(public http: HttpClient) { }


  GetUsers(){
   
     //return this.http.get("https://reqres.in/api/users?page=0&per_page=12");

     //return this.http.get("http://127.0.0.1:8000/api/product");

     ////return this.http.get("http://localhost:3000/users");

  }


}
