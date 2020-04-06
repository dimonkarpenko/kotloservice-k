import { Component, OnInit } from '@angular/core';

export interface Service {
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    { price: '700 грн', image: 'http://irpin.kotloservice.in.ua/wp-content/uploads/2018/03/%D0%94%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B0-%D0%B8-%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D1%82%D0%BB%D0%B0-Viessman-1024x574.jpg', description: 'Профилактика газовых котлов'},
    { price: 'от 650 грн', image: 'http://irpin.kotloservice.in.ua/wp-content/uploads/2018/03/%D0%9F%D0%BB%D0%B0%D1%82%D0%B0-%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D1%82%D0%BB%D0%B0-768x764.jpg', description: 'Ремонт и диагностика плат'},
    { price: '650 грн', image: 'http://irpin.kotloservice.in.ua/wp-content/uploads/2018/03/%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0-%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D1%82%D0%BB%D0%B0-1024x768.jpg', description: 'Чистка теплообменника'},
    { price: 'Бесплатно', image: 'https://service.expertytepla.com/wp-content/uploads/2018/08/04.jpg', description: 'Заключить договор'},
    { price: 'от 100 грн', image: 'https://service.expertytepla.com/wp-content/uploads/2018/08/05.jpg', description: 'Купить запчасти'},
    { price: 'от 250 грн', image: 'https://service.expertytepla.com/wp-content/uploads/2018/08/06.jpg', description: 'Купить аксессуары'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
