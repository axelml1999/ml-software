import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
    AOS.init({
      delay: 0,
      duration: 1800, 
    });
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
