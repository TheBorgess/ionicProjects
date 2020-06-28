import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeaService , Idea } from 'src/app/services/idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})

export class IdeaListPage implements OnInit {

  //////////////PAGE THAT LISTS ALL CLIENTS//////////////// 

  private ideas: Observable<Idea[]>;
  datas: any;
  ideas2: any;

  constructor(private ideaService: IdeaService) { }

  FilterJSONData(ev:any){  //search by name of clients
    const val = ev.target.value;
    if(val && val.trim() != ''){ 
       this.ideas2 = this.ideas2.filter((item)=>{
             return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
       })
    }
    if(val.trim() == ''){  
      this.inicializaJSONData();
      this.ideas2 = this.ideas2.filter((item)=>{
            return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }          
  }

  inicializaJSONData(){ //search by name of clients 
      this.ideas = this.ideaService.getIdeas();
      this.datas = this.ideas.subscribe(data=>{
        //console.log("data from dataList=",data);
        this.ideas2 = data;
      })
  }

  ngOnInit() {
      //this.ideas = this.ideaService.getIdeas(); //original
      this.inicializaJSONData(); 
  }

}
