import {Component,EventEmitter,Output} from '@angular/core';
import {Post} from '../post.model';
import {NgForm} from '@angular/forms';
import {PostService} from '../Post/post.service';

@Component({
    selector:'app-post-create',
    templateUrl:'./post_create.component.html',
    styleUrls: ['./post_create.component.css']

})
export class PostCreateComponent{
    
    enterTitle='';
    enterContent='';
   @Output() postCreated=new EventEmitter<Post>();
onAddPost(form:NgForm){
    if(form.invalid){
        return;
    }
    
    this.postSrvice.addPost(form.value.titile, form .value.content);
    form.resetForm();
   
}

constructor(public postSrvice:PostService){

}

}