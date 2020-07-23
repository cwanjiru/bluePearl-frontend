import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { Catalog } from './catalog';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  private allCatalogs: Array<Catalog> =[];

  constructor() {
    this.setUpCatalog();
   }

  fetchWomenFashionAccessories = ():Array<string> =>{
    let womenCatalog ;
    for(let i=0; i<this.allCatalogs.length;i++){
      if(this.allCatalogs[i].category == 'women'){
        womenCatalog = this.allCatalogs[i].fashionAccessories;
      }
    }
    return womenCatalog;
  }

  fetchMenFashionAccessories = (): Array<string> =>{
    let menCatalog ;
    for(let i=0; i<this.allCatalogs.length; i++){
      if(this.allCatalogs[i].category == 'men'){
        menCatalog = this.allCatalogs[i].fashionAccessories;
      } 
    }
      return menCatalog;
  }
  
  fetchKidsFashionAccessories = (): Array<string> =>{
    let kidsCatalog ;
    for(let i=0; i<this.allCatalogs.length; i++){
      if(this.allCatalogs[i].category == 'kids'){
        kidsCatalog = this.allCatalogs[i].fashionAccessories;
      }
    }
    return kidsCatalog;
  }

  private setUpCatalog = () => {
    this.allCatalogs.push(
      new Catalog(
        'women',
        [
          'clothing', 
          'shoes',
          'dresses',
          'bags',
          'accessories',
          'sunglasses',
          'denim',
          'boots',
          'jewelry'
        ]
      ));
      this.allCatalogs.push(
        new Catalog(
          'men',
          [
            'clothing',
            'shoes',
            'coats & jackets',
            'bags',
            'accessories',
            'sunglasses',
            'denim',
            'sneakers',
            'watches'
          ]
        ));
        this.allCatalogs.push(
          new Catalog(
            'kids',
            [
              'clothing',
              'shoes',
              'accessories',
              'sunglasses',
              'denim',
              'boots'
            ]
          ));
  }
}
