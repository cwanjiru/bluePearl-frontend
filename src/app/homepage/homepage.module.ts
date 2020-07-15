import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DealsComponent } from './deals/deals.component';
import { CoreModule } from '../core/core.module';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [HomepageComponent, DealsComponent, ModalSearchComponent, ShoppingCartComponent, SliderComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomepageModule { }
