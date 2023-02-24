import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  sportNewsDisplay: any;
  categoriesNews() {
  }
  constructor(private http:HttpClient){}

  //1224b16f516340f2b402bc2ce43d4069
  key="77c34d496a2f4d16b74b07565d084aef";

  newsUrl=         "https://newsapi.org/v2/top-headlines?country=us&apiKey="+this.key;

  politicsNewsUrl= "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey="+this.key;

  businessNewsUrl= "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+this.key;

  healthNewsUrl=   "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="+this.key;

  scienceNewsUrl=   "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="+this.key;

  sportNewsUrl=    "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey="+this.key;

  categoryNewsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="+this.key;

  popularNewsUrl= "https://newsapi.org/v2/everything?q=apple&from=2023-02-23&to=2023-02-23&sortBy=popularity&apiKey="+this.key;

  recentNewsUrl="https://newsapi.org/v2/everything?domains=wsj.com&apiKey="+this.key;

  //tüm
  topHeading() :Observable<any>
  {
    return this.http.get(this.newsUrl);
  }
  popularNews() :Observable<any>
  {
    return this.http.get(this.popularNewsUrl);
  }
  recentNews() :Observable<any>
  {
    return this.http.get(this.recentNewsUrl);
  }
  //politics
  politicsNews():Observable <any>
  {
    return this.http.get(this.politicsNewsUrl);
  }
  //business
  businessNews():Observable <any>
  {
    return this.http.get(this.businessNewsUrl);
  }

  //health
  healthNews():Observable <any>
  {
    return this.http.get(this.healthNewsUrl);
  }
  //science
  scienceNews():Observable <any>
  {
    return this.http.get(this.scienceNewsUrl);
  }
  //sport
  sportNews():Observable <any>
  {
    return this.http.get(this.sportNewsUrl);
  }
  categoryNews():Observable <any>
  {
    return this.http.get(this.categoryNewsUrl);
  }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=us&apiKey='+ this.key)
  }
  getArticlesById(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines/sources' + source + '&apiKey=' + this.key)
  }
  intitArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.key)
  }
  // https://newsapi.org/v2/top-headlines?country=tr&category=cat_name&apiKey=your_api_key
}
