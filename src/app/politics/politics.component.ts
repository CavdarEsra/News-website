import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})

export class PoliticsComponent implements OnInit{
  politicsNewsDisplay:any=[];
  popularNewsDisplay: any;

  constructor(private service:NewsService){}

  totalLength:any;
  page:number=1;
  showpost:any=[];

  ngOnInit(): void {
      this.service.politicsNews().subscribe((result)=>{
      this.politicsNewsDisplay=result.articles;
      this.showpost=result;
      this.totalLength=result.length;
    });
    this.service.popularNews().subscribe((result)=>{
      this.popularNewsDisplay=result.articles.splice(0,4);
    });
    }
}
