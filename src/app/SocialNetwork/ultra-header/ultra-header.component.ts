import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ultra-header',
  templateUrl: './ultra-header.component.html',
  styleUrls: ['./ultra-header.component.css']
})
export class UltraHeaderComponent implements OnInit {
@Output() bounce = new EventEmitter();
constructor() { }

  ngOnInit() {
  }

  headermenu = [{
    urltitle:"Home",
    icon:"assets/images/icon1.png",
    url:"index.html"
  },
  {
    urltitle:"Companies",
    icon:"assets/images/icon2.png",
    url:"companies.html"
  },
  {
    urltitle:"Projects",
    icon:"assets/images/icon3.png",
    url:"projects.html"
  },
  {
    urltitle:"Profiles",
    icon:"assets/images/icon4.png",
    url:"index.html",
    submenu:[{
        suburltitle:"User Profile",
        suburl:"user-profile.html"
    },
    {
      suburltitle:"My Profile Feed",
      suburl:"my-profile-feed.html"
  }]
  },
  {
    urltitle:"Jobs",
    icon:"assets/images/icon5.png",
    url:"jobs.html"
  },
  {
    urltitle:"Messages",
    icon:"assets/images/icon6.png",
    url:"messages.html"
  },
  {
    urltitle:"Notification",
    icon:"assets/images/icon7.png",
    url:"notification.html"
  }

]
  	// test(){
  	// {a:'siraj'}
  	// this.bounce.emit(a)
  	// }
}
