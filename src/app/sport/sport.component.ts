import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})

export class SportComponent implements OnInit {
  sportNewsDisplay:any=[];
  topHeadingDisplay: any;

  constructor(private service:NewsService){ }

  totalLength:any;
  page:number=1;
  showpost:any=[];

  ngOnInit(): void {
      this.service.sportNews().subscribe((result)=>{
        this.sportNewsDisplay=result.articles;
        this.showpost=result;
        this.totalLength=result.length;
      });
      this.service.popularNews().subscribe((result)=>{
        this.sportNewsDisplay=result.articles.splice(20,4);
      });
  }
}
