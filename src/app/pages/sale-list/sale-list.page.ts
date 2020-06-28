
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService , Sale } from 'src/app/sale.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.page.html',
  styleUrls: ['./sale-list.page.scss'],
})

export class SaleListPage implements OnInit {
  
  private sales: Observable<Sale[]>;
  
  datas: any[];
  
  constructor(private saleService: SaleService) { }

  FilterJSONData(ev:any){  //search by name of clients
    //this.inicializaJSONData(); console.log(Object.keys(this.sales2)); console.log(Object.values(this.sales2));
    const val = ev.target.value;
    if(val && val.trim() != ''){ 
       this.sales2 = this.sales2.filter((item)=>{
             return (item.cliente.toLowerCase().indexOf(val.toLowerCase())>-1);
       })
    }
    if(val.trim() == ''){  
      this.inicializaJSONData();
      this.sales2 = this.sales2.filter((item)=>{
            return (item.cliente.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }          
  }

  inicializaJSONData(){ //search by name of clients 
      
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
        //new properties total and total2 that you have to create
        this.total  = total;
        this.total2 = total2;
      })

  }

  ngOnInit() {
      //////this.sales = this.saleService.getSales(); ////original
      this.inicializaJSONData();   
  }

}
