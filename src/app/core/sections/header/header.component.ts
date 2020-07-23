import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Catalog } from '../../catalog';

@Component({
  selector: 'bpl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  womenFashionAccessories: Array<string>;
  menFashionAccessories: string[];
  kidsFashionAccessories: Array<string>;


  constructor( private catalogService:CatalogService) { }

  ngOnInit(): void {
    this.womenFashionAccessories = this.catalogService.fetchWomenFashionAccessories();
    this.menFashionAccessories = this.catalogService.fetchMenFashionAccessories();
    this.kidsFashionAccessories = this.catalogService.fetchKidsFashionAccessories();
  }

}
