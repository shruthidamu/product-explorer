import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExplorerHomepageComponent } from './product-explorer-homepage.component';

describe('ProductExplorerHomepageComponent', () => {
  let component: ProductExplorerHomepageComponent;
  let fixture: ComponentFixture<ProductExplorerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductExplorerHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductExplorerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
