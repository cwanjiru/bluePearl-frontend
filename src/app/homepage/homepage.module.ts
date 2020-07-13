import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DealsComponent } from './deals/deals.component';



@NgModule({
  declarations: [HomepageComponent, DealsComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
