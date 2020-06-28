
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
})
export class IdeaDetailsPage implements OnInit {

  idea: Idea = {
    name: '',
    notes: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.ideaService.getIdea(id).subscribe(idea => {
          this.idea = idea;
        });
      }
  }

  addIdea(){ 
   //console.log('Nome =' + this.idea.name);
   if(this.idea.name != ''){
    this.ideaService.addIdea(this.idea).then(() => {
        this.router.navigateByUrl('/idealist');
        this.showToast('Added');
     }, err =>{
         this.showToast('There was a problem adding your idea'); 
    });
   }else{
      this.showToast('Campo Nome deve ser preenchido!');
   } 
  }

  deleteIdea(){ 
   var r = confirm("Really want to delete?");
   if (r == true) {
    this.ideaService.deleteIdea(this.idea.id).then(() => {
        this.router.navigateByUrl('/idealist');
        this.showToast('Deleted');
     }, err =>{
         this.showToast('There was a problem deleting your idea'); 
    });
   }
  }

  updateIdea(){ 
   if(this.idea.name != ''){ 
    this.ideaService.updateIdea(this.idea).then(() => {
        this.showToast('Updated');  
        this.router.navigateByUrl('/idealist');
        //this.showToast('Idea updated');
     }, err =>{
         this.showToast('There was a problem updating your idea'); 
    });
   }else{
      this.showToast('Field Name cannot be null');
   }
  }

  showToast(msg){  
    this.toastCtrl.create({
        message: msg,
        duration: 3000
     }).then(toast => toast.present());
  }

}// END CLASS
