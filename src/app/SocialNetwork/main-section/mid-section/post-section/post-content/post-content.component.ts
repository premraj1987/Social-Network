import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
 @Input() postContentSection:any;

//   postSection = [
//     {
//       icon:"assets/images/us-pic.png",
//       duration:"3 mins ago",
//       country:"India",
//       postDetails:{
//         postTitle:"My First Post",
//         postContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet"
//       },
//       postLikes:"Likes",
//       postComment:"Comments",
//       postViews:"Views"
//   },
//   {
//     icon:"assets/images/us-pic.png",
//     duration:"5 mins ago",
//     country:"South Africa",
//     postDetails:{
//       postTitle:"UI Developer",
//       postContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet"
//     },
//     postLikes:"Likes",
//     postComment:"Comments",
//     postViews:"Views"
// }
// ]
  constructor() { }

  ngOnInit() {
  }

}
