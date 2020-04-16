import {Post} from '../post.model';
import { Injectable } from '@angular/core';

import {Subject} from 'rxjs';



@Injectable({providedIn:'root'})
export class PostService{
    private post:Post[]=[];
    private postUpdated =new Subject<Post[]>()

    getPost(){
        return [...this.post];
    }
    

getpostUdate(){
    return this.postUpdated.asObservable();
}

    addPost(titile:String , content:String)
    {
        const post:Post ={titile:titile, content:content};
        this.post.push(post);
        this.postUpdated.next([...this.post]);
    }
}