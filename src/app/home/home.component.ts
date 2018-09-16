import {Component, HostBinding, OnInit} from '@angular/core';
import {inOutAnim} from '../router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // animations:[
  //   inOutAnim
  // ]
})
export class HomeComponent implements OnInit {

  // @HostBinding('@inOut')true;
  constructor() { }

  ngOnInit() {
  }

}
