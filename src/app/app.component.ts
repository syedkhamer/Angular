import { Component } from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storredposts:Post[]=[]

  onAddPost(post){

    this.storredposts.push(post);
  }
}
