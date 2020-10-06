import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css'],
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = 'No Content';
  newBind = '';
  enteredValue = '';
  OnClickBind() {
    this.newBind = this.enteredValue;
  }
  onClickPost(inputPost: HTMLTextAreaElement) {
    this.newPost = inputPost.value;
  }
}
