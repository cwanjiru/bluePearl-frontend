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



@NgModule({
  declarations: [HomepageComponent, DealsComponent, ModalSearchComponent, ShoppingCartComponent, SliderComponent, ShopByCategoryComponent, ShopByCategorySamplesComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomepageModule { }
