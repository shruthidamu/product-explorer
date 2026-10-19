import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductExplorerHomepageComponent } from './product-explorer-homepage/product-explorer-homepage.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', component: ProductExplorerHomepageComponent, pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [authGuard]
    },
    {
        path: 'registration',
        loadComponent: ()=> 
            import('./registration/registration.component')
        .then(m=>m.RegistrationComponent)
    }
];
