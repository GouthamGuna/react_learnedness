import { Component, NgModule, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  currentDate: any;
  categories: string[] = ['All', 'Technology', 'Health', 'Travel', 'Food'];
  blogDetails: {
    title: string;
    category: string;
    content: string;
    author: string;
    date: string;
  }[] = [];
  category_count: { [key: string]: number } = {};

  ngOnInit(): void {
    this.getBlogDetails();
    this.currentDate = new Date();
  }

  constructor(private sanitizer: DomSanitizer) {}

  /* calculateCategoryCount(): void {
    this.category_count = this.categories.reduce((acc, category) => {
      if (category === 'All') {
        acc[category] = this.blogDetails.length;
      } else {
        acc[category] = this.blogDetails.filter(blog => blog.category === category).length;
      }
      return acc;
    }, {} as { [key: string]: number });
  }

  originaldetails: { title: string; category: string; content: string; author: string; date: string }[] = [];

  filterBlogs(category: string): void {
    console.log(`Filtering blogs by category: ${category}`);
    this.blogDetails = this.blogDetails.filter(blog => category === 'All' || blog.category === category);
  } */

  addBlog() {
    alert('Under Constraction...');
  }

  async getBlogDetails() {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/v1/blog/get-all-blog-post'
      );
      console.log(response.data);
      //this.filterBlogs(response.data.category);
      this.blogDetails = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
