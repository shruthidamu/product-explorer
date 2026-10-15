import { signalStore, withState, withComputed, withMethods, patchState} from '@ngrx/signals';
import { Product } from '../models/product';
import { computed, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategory: string | null;
}

export const productsStore = signalStore(
    {providedIn: 'root'},

    withState<ProductsState>({
        products: [],
        loading: false,
        error: null,
        searchTerm: '',
        selectedCategory: null
    }),
    
    withComputed((store) => ({
        productCount: computed(() => store.products().length),

        filteredProducts: computed(() => {
            let searchTerm = store.searchTerm().toLowerCase();
            let selectedCategory = store.selectedCategory();
            let filteredItems = store.products().filter(product => {
                let matchedSearchTerm = product.title.toLowerCase().includes(searchTerm) 
                 || product.description.toLowerCase().includes(searchTerm);
                let matchedCategory = selectedCategory ? product.category === selectedCategory : true;
                return matchedSearchTerm && matchedCategory;
            })
            return filteredItems;
        }),

        categoryList: computed(() => {
            const categories: string[] = [];
            for(const product of store.products()) {
                if(product.category && !categories.includes(product.category)){
                    categories.push(product.category);
                }
            }
            return categories;
        })
    })),

    withMethods((store, productsService = inject(ProductsService)) => ({
        setSearchItem(searchTerm: string){
            patchState(store, {
                searchTerm
            })
        },
        setSelectedCategory(category: string) {
            patchState(store, {
                selectedCategory: category
            })
        },
        loadProducts() {
            patchState(store, {
                loading: true,
                error: null
            })
            productsService.getProducts().subscribe((result) => {
                patchState(store, {
                    products: result,
                    loading: false
                })
            },
            (error) => {
                patchState(store, {
                    error:"There is an error, failed to load products",
                    loading: false
                })
                console.log("Error: ", error);
            }
        )
        }
    }))
)
