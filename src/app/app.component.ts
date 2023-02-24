import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'deneme';
  stickyfixed:boolean=false;


  @HostBinding('class.nav-top2') navTop:boolean | undefined;

  @HostListener('window:scroll') onScroll(){
    if(window.scrollY > 150){
      this.navTop=true;
    }else{
      this.navTop=false;
    }
  }


  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
