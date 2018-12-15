import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],

})
export class BannerComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Product : object[];
  types : string;
  description : string[];
  desc1 : string ='' ;
  desc2 : string ='' ;

  ngOnInit() {
   
    this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new').subscribe(
      data  =>{
        this.Product = data['product'];
        console.log(this.Product)
        this.types = this.Product['type'];
    })
    
  }


}
