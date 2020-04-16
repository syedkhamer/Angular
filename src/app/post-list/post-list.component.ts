import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../Post/post.service';
import {Subscription} from 'rxjs';

@Component({
    selector:'<app-post-list>',
    templateUrl: './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
   
     //posts =[
      //   {title: "this is my first podt", content : 'this is the first post content'},
       //  {title: "this is my second podt", content : 'this is the second post content'},
       //  {title: "this is my third podt", content : 'this is the third post content'},
      //   {title: "this is my fourth podt", content : 'this is the fourth post content'}

     //];

     @Input() post:Post[]=[];
     
     constructor(public postSrvice:PostService){

     }
     private postUp: Subscription;

     ngOnInit(){
         this.post=this.postSrvice.getPost();
        this.postUp=this.postSrvice.getpostUdate().subscribe((post:Post[])=>{

            this.post=post;
         });
     }

     ngOnDestroy(){

      this.postUp.unsubscribe();
         
     }
    
}