import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent {
  politicsNewsDisplay0: any;
  constructor(private service:NewsService){ }

  ngOnInit():void{
       this.service.politicsNews().subscribe((result)=>{
        this.politicsNewsDisplay0=result.articles.splice(6,1);
    });
  }
}
