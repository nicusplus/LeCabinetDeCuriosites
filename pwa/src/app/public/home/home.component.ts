import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip-social in style.scss
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  name = environment.application.name;

  constructor() {}

  ngOnInit(): void {}

}
