import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {
  posts: any;
  comments: any;
  total_comments: any;
p: number = 1;
httpclients = HttpClient;
constructor(httpclients: HttpClient ) {
  httpclients.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
      console.log("posts are", this.posts);
    });
httpclients.get('https://jsonplaceholder.typicode.com/comments' + '?postId=' + 1)
    .subscribe(response => {
      this.comments = response;
      console.log("comments are", this.comments);
    });
}
ngOnInit() {



}
comment(id){
console.log("id is ",id );
console.log("fddgfdg",this.httpclients)

    console.log("id");
}

}
