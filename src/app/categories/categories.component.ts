import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  topHeadingDisplay: any;
  sportNewsDisplay: any;
  politicsNewsDisplay: any;
  businessNewsDisplay: any;
  sources: any;
  articles: any;
  constructor(private service:NewsService){}
  totalLength:any;
  page:number=1;
  showpost:any=[];
  ngOnInit(): void {


    this.service.topHeading().subscribe((result)=> {
      this.topHeadingDisplay=result.articles;
      this.showpost=result;
      this.totalLength=result.length;
    });
    this.service.sportNews().subscribe((result)=>{
      this.sportNewsDisplay=result.articles
    });
    this.service.politicsNews().subscribe((result)=>{
      this.politicsNewsDisplay=result.articles;
    });
    this.service.businessNews().subscribe((result)=>{
      this.businessNewsDisplay=result.articles;
    });

      this.service.intitArticles()
      .subscribe((result:any)=>{
        console.log(result);
        this.articles=result.articles;
      });
      this.service.initSources()
      .subscribe((result:any)=>{
        console.log(result);
        this.sources=result.sources;
      });
    }
    // listCategoryG(){
    //         this.service.businessNews().subscribe((result)=>{
    //   this.businessNewsDisplay=result.articles;
    // });
    //}
}








