import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DealsComponent } from './deals/deals.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [HomepageComponent, DealsComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class HomepageModule { }
