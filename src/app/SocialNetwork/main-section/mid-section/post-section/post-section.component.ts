import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postSection = [
    {
      icon:"assets/images/us-pic.png",
      duration:"3 mins ago",
      country:"India",
      postDetails:{
        postTitle:"My First Post",
        postContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet"
      },
      postLikes:"Likes",
      postComment:"Comments",
      // postViews:"Views"
      postUtilityViews : {
        viewsTitle:"Views",
        viewsCount:"5"
    }
  },
  {
    icon:"assets/images/us-pic.png",
    duration:"5 mins ago",
    country:"South Africa",
    postDetails:{
      postTitle:"UI Developer",
      postContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet"
    },
    postLikes:"Likes",
    postComment:"Comments",
    postViews:"Views"
}
]
 
  }