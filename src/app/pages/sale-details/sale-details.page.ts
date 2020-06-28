/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.page.html',
  styleUrls: ['./sale-details.page.scss'],
})
export class SaleDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { SaleService, Sale } from 'src/app/sale.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.page.html',
  styleUrls: ['./sale-details.page.scss'],
})

export class SaleDetailsPage implements OnInit {

  sale: Sale = {
    cliente: '',
    total: '', 
    saldo: '',
    obs: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private saleService: SaleService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.saleService.getSale(id).subscribe(sale => {
          this.sale = sale;
        });
      }
  }

  addSale(){ 
   if(this.sale.cliente != ''){
    this.saleService.addSale(this.sale).then(() => {
        this.router.navigateByUrl('/sale-list');
        this.showToast('Sale added');
     }, err =>{
         this.showToast('There was a problem adding your sale'); 
    });
   }else{
      this.showToast('Campo Cliente deve ser preenchido!');
   } 
  }

  deleteSale(){ 
   var r = confirm("Really want to delete?");
   if (r == true) {
    this.saleService.deleteSale(this.sale.id).then(() => {
        this.router.navigateByUrl('/sale-list');
        this.showToast('Sale deleted');
     }, err =>{
         this.showToast('There was a problem deleting your sale'); 
    });
   }
  }

  updateSale(){ 
   if(this.sale.name != ''){ 
    this.saleService.updateSale(this.sale).then(() => {
        this.showToast('Sale updated');  
        this.router.navigateByUrl('/sale-list');
     }, err =>{
         this.showToast('There was a problem updating your sale'); 
    });
   }else{
      this.showToast('Field Cliente cannot be null');
   }
  }


  showToast(msg){  
    this.toastCtrl.create({
        message: msg,
        duration: 3000
     }).then(toast => toast.present());
  }

}// END CLASS

