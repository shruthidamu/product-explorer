import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductExplorerHomepageComponent } from './product-explorer-homepage/product-explorer-homepage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductExplorerHomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-explorer';
}
