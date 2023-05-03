import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/categories/category.model';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | null;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = null;
    }
  }
}
