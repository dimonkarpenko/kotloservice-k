import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  marksImg = 'https://service.expertytepla.com/wp-content/themes/expertytepla/img/marks.png?version=09-08-2019';

  constructor() { }

  ngOnInit(): void {
  }

}
