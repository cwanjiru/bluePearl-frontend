import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DealsComponent } from './deals/deals.component';
import { CoreModule } from '../core/core.module';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SliderComponent } from './slider/slider.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ShopByCategorySamplesComponent } from './shop-by-category-samples/shop-by-category-samples.component';
import { ShopByCategoryDisplayProductsComponent } from './shop-by-category-display-products/shop-by-category-display-products.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { NewArrivalModalComponent } from './new-arrival-modal/new-arrival-modal.component';
import { NewArrivalSummerDisplayComponent } from './new-arrival-summer-display/new-arrival-summer-display.component';
import { LatestInBlogComponent } from './latest-in-blog/latest-in-blog.component';



@NgModule({
  declarations: [HomepageComponent, DealsComponent, ModalSearchComponent, ShoppingCartComponent, SliderComponent, ShopByCategoryComponent, ShopByCategorySamplesComponent, ShopByCategoryDisplayProductsComponent, NewArrivalsComponent, NewArrivalModalComponent, NewArrivalSummerDisplayComponent, LatestInBlogComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomepageModule { }
