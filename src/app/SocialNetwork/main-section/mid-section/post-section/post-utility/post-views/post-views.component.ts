import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-views',
  templateUrl: './post-views.component.html',
  styleUrls: ['./post-views.component.css']
})
export class PostViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    postUtilityViews = {
        viewsTitle:"Views",
        viewsCount:"5"
    }
}
