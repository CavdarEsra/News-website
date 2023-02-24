import { Component , OnInit} from '@angular/core';
import { NewsService } from '../service/news.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  businessNewsDisplay: any;
  topHeadingDisplay : any = [];
  healthNewsDisplay : any = [];
  sportNewsDisplay : any = [];
  politicsNewsDisplay : any = [];
  sportNewsDisplay1: any=[];
  sportNewsDisplay2: any=[];
  sportNewsDisplay0: any;
  topHeadingDisplay4: any;
  Sayilar: any=[];
  healthNewsDisplay1: any;
  politicsNewsDisplay3: any;
  politicsNewsDisplayS: any;
  sliders: any;
  politicsNewsDisplay0: any;
  politicsNewsDisplay1: any;
  politicsNewsDisplay2: any;
  healthNewsDisplay3: any;
  businessNewsDisplay3: any;
  popularNewsDisplay: any;
  recentNewsDisplay: any;
  politicsNewsDisplay33: any;


  constructor(private service:NewsService){ }


totalLength:any;
page:number=1;
showpost:any=[];


  ngOnInit(): void {
    this.Sayilar = [1,2,3,4];

    this.service.topHeading().subscribe((result)=> {
      console.log(result);
      this.topHeadingDisplay=result.articles;
      this.topHeadingDisplay4=result.articles.splice(5,4);

    });
    this.service.sportNews().subscribe((result)=>{
      this.sportNewsDisplay0=result.articles.splice(0,1);
      this.sportNewsDisplay1=result.articles.splice(1,1);
      this.sportNewsDisplay2=result.articles.splice(2,2);
    });
    this.service.politicsNews().subscribe((result)=>{
      this.politicsNewsDisplay=result.articles;
      this.politicsNewsDisplay1=result.articles.splice(6,1);
      this.politicsNewsDisplay2=result.articles.splice(7,1);
      this.politicsNewsDisplay3=result.articles.splice(8,1);

      this.politicsNewsDisplay33=result.articles.splice(0,3);

    });
    this.service.businessNews().subscribe((result)=>{
      this.businessNewsDisplay=result.articles;
      this.businessNewsDisplay3=result.articles.splice(0,3);
    });
    this.service.healthNews().subscribe((result)=>{
      this.healthNewsDisplay1=result.articles.splice(15,1);
    });
    this.service.popularNews().subscribe((result)=>{
      this.popularNewsDisplay=result.articles.splice(0,4);
    });
    this.service.recentNews().subscribe((result)=>{
      this.recentNewsDisplay=result.articles;
      this.showpost=result;
      this.totalLength=result.length;
    });

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
