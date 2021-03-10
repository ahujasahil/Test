import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  i = 0;
  isEdit: boolean = false;
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  posts: Post[]
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe((post) => this.post = post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  deletePost(post: Post) {
    if (confirm('Are you sure')) {
      this.postService.removePost(post.id).subscribe(() => {
        console.log('Deleted');
        this.posts.forEach((item, index) => {
          if (item.id = post.id) {
            this.posts.splice(index, 1)
          }
        });
      })
    }
  }

  

}
