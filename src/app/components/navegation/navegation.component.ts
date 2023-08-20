import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit{
  @ViewChild('nav', { static: true }) navElement!: ElementRef
  @ViewChild('main', { static: true }) mainElement!: ElementRef

  statusNav: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getWindowSize();
  }

  closeNav() {
    const nav = this.navElement.nativeElement;
    const main = this.mainElement.nativeElement;

    nav.classList.toggle('close');
    main.classList.toggle('close_main');

    this.statusNav = !this.statusNav;
    console.log(this.statusNav);
  }

  getWindowSize() {
    if(window.innerWidth <= 500) {
      this.navElement.nativeElement.classList.add('close');
      this.mainElement.nativeElement.classList.add('close_main');
      console.log('fechado')
    }
  }
}
