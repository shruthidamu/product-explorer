import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductExplorerHomepageComponent } from './product-explorer-homepage/product-explorer-homepage.component';

export const routes: Routes = [
    {
        path: '', component: ProductExplorerHomepageComponent, pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent
    }
];
