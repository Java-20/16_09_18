import {Component, HostBinding, OnInit} from '@angular/core';
import {inOutAnim} from '../router.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
  // animations:[
  //   inOutAnim
  // ]
})
export class AboutComponent implements OnInit {

  // @HostBinding('@inOut')true;
  constructor() { }

  ngOnInit() {
  }

}
