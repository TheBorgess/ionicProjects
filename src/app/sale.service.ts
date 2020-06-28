
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , DocumentReference}  from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators'; 
import { Observable} from 'rxjs';

export interface Sale{
  
   id?: string,
   cliente: string,
   total: number,
   saldo: number,
   obs: string

}

@Injectable({
  providedIn: 'root'
})

export class SaleService {

  private sales: Observable<Sale[]>;
  private saleCollection: AngularFirestoreCollection<Sale>;
  
  constructor(private afs: AngularFirestore) {

     this.saleCollection = this.afs.collection<Sale>('sales');
     this.sales = this.saleCollection.snapshotChanges().pipe(

        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })

     );
   
  }

  getSales(): Observable<Sale[]> {
        return this.sales;
  }

  getSale(id: string): Observable<Sale> {
        return this.saleCollection.doc<Sale>(id).valueChanges().pipe(
            take(1),
            map(sale => {
               sale.id = id;
               return sale
            })
        );
  }

  addSale(sale: Sale): Promise<DocumentReference> {
      return this.saleCollection.add(sale); 
  }

  updateSale(sale: Sale): Promise<void> {
      return this.saleCollection.doc(sale.id).update({ cliente: sale.cliente, total: sale.total, saldo: sale.saldo, obs: sale.obs});
  }

  deleteSale(id: string): Promise<void>{
      return this.saleCollection.doc(id).delete();
  }

}//END CLASS


