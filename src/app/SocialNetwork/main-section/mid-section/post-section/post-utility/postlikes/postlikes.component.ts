import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlikes',
  templateUrl: './postlikes.component.html',
  styleUrls: ['./postlikes.component.css']
})
export class PostlikesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postUtilityLikes = {
    likesTitle:"Likes",
    likesIcon:"assets/images/liked-img.png",
    likesCount:"5"
}
}
