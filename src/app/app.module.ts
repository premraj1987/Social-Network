import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UltraHeaderComponent } from './SocialNetwork/ultra-header/ultra-header.component';
import { FooterComponent } from './SocialNetwork/footer/footer.component';

import { HeaderMenuComponent } from './SocialNetwork/ultra-header/header-menu/header-menu.component';
import { SearchBoxComponent } from './SocialNetwork/ultra-header/search-box/search-box.component';
import { HeaderLoginComponent } from './SocialNetwork/ultra-header/header-login/header-login.component';
import { HeaderPostLoginComponent } from './SocialNetwork/ultra-header/header-login/header-post-login/header-post-login.component';
import { MainSectionComponent } from './SocialNetwork/main-section/main-section.component';
import { LeftAsideComponent } from './SocialNetwork/main-section/left-aside/left-aside.component';
import { MidSectionComponent } from './SocialNetwork/main-section/mid-section/mid-section.component';
import { RightAsideComponent } from './SocialNetwork/main-section/right-aside/right-aside.component';
import { AboutUserDetailComponent } from './SocialNetwork/main-section/left-aside/about-user/about-user-detail/about-user-detail.component';
import { UserFollowingComponent } from './SocialNetwork/main-section/left-aside/about-user/user-following/user-following.component';
import { UserFollowersComponent } from './SocialNetwork/main-section/left-aside/about-user/user-followers/user-followers.component';
import { UserTotalLikesComponent } from './SocialNetwork/main-section/left-aside/about-user/user-total-likes/user-total-likes.component';
import { AboutUserComponent } from './SocialNetwork/main-section/left-aside/about-user/about-user.component';
import { AboutUserPicComponent } from './SocialNetwork/main-section/left-aside/about-user/about-user-pic/about-user-pic.component';
import { FriendSuggestionComponent } from './SocialNetwork/main-section/left-aside/friend-suggestion/friend-suggestion.component';
import { SuggestedfrienddetailComponent } from './SocialNetwork/main-section/left-aside/friend-suggestion/suggestedfrienddetail/suggestedfrienddetail.component';
import { CreatePostComponent } from './SocialNetwork/main-section/mid-section/create-post/create-post.component';
import { PostSectionComponent } from './SocialNetwork/main-section/mid-section/post-section/post-section.component';
import { PostUserDetailsComponent } from './SocialNetwork/main-section/mid-section/post-section/post-user-details/post-user-details.component';
import { PostOptionsComponent } from './SocialNetwork/main-section/mid-section/post-section/post-user-details/post-options/post-options.component';
import { PostAddonsComponent } from './SocialNetwork/main-section/mid-section/post-section/post-addons/post-addons.component';
import { PostContentComponent } from './SocialNetwork/main-section/mid-section/post-section/post-content/post-content.component';
import { PostUtilityComponent } from './SocialNetwork/main-section/mid-section/post-section/post-utility/post-utility.component';
import { PostlikesComponent } from './SocialNetwork/main-section/mid-section/post-section/post-utility//postlikes/postlikes.component';
import { PostcommentsComponent } from './SocialNetwork/main-section/mid-section/post-section/post-utility/postcomments/postcomments.component';
import { PostViewsComponent } from './SocialNetwork/main-section/mid-section/post-section/post-utility/post-views/post-views.component';





@NgModule({
  declarations: [
    AppComponent,
    UltraHeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    SearchBoxComponent,
    HeaderLoginComponent,
    HeaderPostLoginComponent,
    MainSectionComponent,
    MidSectionComponent,
    LeftAsideComponent,
    RightAsideComponent,
    AboutUserDetailComponent,
    UserFollowingComponent,
    UserFollowersComponent,
    UserTotalLikesComponent,
    AboutUserComponent,
    AboutUserPicComponent,
    FriendSuggestionComponent,
    SuggestedfrienddetailComponent,
    CreatePostComponent,
    PostSectionComponent,
    PostUserDetailsComponent,
    PostOptionsComponent,
    PostAddonsComponent,
    PostContentComponent,
    PostUtilityComponent,
    PostlikesComponent,
    PostcommentsComponent,
    PostViewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
