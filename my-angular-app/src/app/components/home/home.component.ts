import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
    this.getBlogCount();
  }

  user_count: number = 0;
  blog_count: number = 0;

  async getUser() {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/v1/users/get-users'
      );
      this.user_count = response.data.length;
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async getBlogCount() {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/v1/blog/get-all-blog-post'
      );
      this.blog_count = response.data.length;
    } catch (error) {
      console.error(error);
    }
  }
}
