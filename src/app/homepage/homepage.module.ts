import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DealsComponent } from './deals/deals.component';
import { CoreModule } from '../core/core.module';
import { ModalSearchComponent } from './modal-search/modal-search.component';



@NgModule({
  declarations: [HomepageComponent, DealsComponent, ModalSearchComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomepageModule { }
