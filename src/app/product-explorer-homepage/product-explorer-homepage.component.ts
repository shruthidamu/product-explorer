import { Component, inject } from '@angular/core';
import { productsStore } from '../store/products.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-explorer-homepage',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-explorer-homepage.component.html',
  styleUrl: './product-explorer-homepage.component.scss'
})
export class ProductExplorerHomepageComponent {
  readonly store = inject(productsStore);
  currentPage = 1;
  pageSize = 6;

  ngOnInit(): void {
    this.store.loadProducts();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.store.filteredProducts().length/ this.pageSize))
  }

  get paginationProducts() {
    const products = this.store.filteredProducts();
    const startIndex = (this.currentPage-1) * this.pageSize;

    return products.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onSearch(e: Event) {
    const input = e.target as HTMLInputElement;
    this.store.setSearchItem(input.value);
    this.currentPage = 1;
  }

  onCategoryChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.store.setSelectedCategory(select.value);
    this.currentPage = 1;
  }
}
