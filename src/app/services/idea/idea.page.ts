
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService , Sale } from 'src/app/sale.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.page.html',
  styleUrls: ['./idea.page.scss'],
})
export class IdeaPage implements OnInit {

private sales: Observable<Sale[]>;
  
datas: any[];
  
constructor(private saleService: SaleService) { }

  report(){
      
      this.sales = this.saleService.getSales();
      this.datas = this.sales.subscribe(data=>{
        //console.log("data from dataList=",data);
        this.sales2 = data;
        let total = 0;
        let total2 = 0;
        for(let i = 0; i < data.length; i++ ) {
          total  = total + parseFloat(data[i].saldo);
          total2 = total2 + parseFloat(data[i].total);  
        }     
        this.total  = total;
        this.total2 = total2;
        this.total3 = total2 - total;
      })

  }

  ngOnInit() {
      this.report();   
  }

}//END CLASS