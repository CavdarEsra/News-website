import { Component, OnInit } from '@angular/core';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthNewsDisplay:any=[];
  popularNewsDisplay: any;
  constructor(private service:NewsService){ }

  totalLength:any;
  page:number=1;
  showpost:any=[];

  ngOnInit(): void {
      this.service.healthNews().subscribe((result)=>{
        this.healthNewsDisplay=result.articles;
        this.showpost=result;
        this.totalLength=result.length;
      });
      this.service.popularNews().subscribe((result)=>{
        this.popularNewsDisplay=result.articles.splice(3,4);
      });
  }
}
