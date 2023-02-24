import { Component, OnInit } from '@angular/core';
import {NewsService} from '../service/news.service' ;

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{
  businessNewsDisplay:any=[];
  popularNewsDisplay: any;
  constructor(private service:NewsService){}
  totalLength:any;
  page:number=1;
  showpost:any=[];
  ngOnInit(): void {
      this.service.businessNews().subscribe((result)=>{
      this.businessNewsDisplay=result.articles;
      this.showpost=result;
      this.totalLength=result.length;
    });
    this.service.popularNews().subscribe((result)=>{
      this.popularNewsDisplay=result.articles.splice(5,4);
    });
  }
}
