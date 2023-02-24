import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})

export class scienceComponent implements OnInit {
  scienceNewsDisplay:any=[];

  constructor(private service:NewsService){ }
  ngOnInit(): void {
      this.service.scienceNews().subscribe((result)=>{
        this.scienceNewsDisplay=result.articles
      });
  }
}

