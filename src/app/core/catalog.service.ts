import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { Catalog } from './catalog';

@Injectable({
  providedIn: CoreModule
})

export class CatalogService {
  private allCatalogs: Array<Catalog> =[];

  constructor() {
    this.setUpCatalog();
   }

  fetchWomenCatalog = ():Array<Catalog> =>{
    let womenCatalog = [];
    for(let i=0; i<this.allCatalogs.length;i++){
      if(this.allCatalogs[i]['property'] == 'women'){
        womenCatalog.push(this.allCatalogs[i]);
      }
    }
    return womenCatalog;
  }

  fetchMenCatalog = (): Array<Catalog> =>{
    let menCatalog = [];
    for(let i=0; i<this.allCatalogs.length; i++){
      if(this.allCatalogs[i]['property'] == 'men'){
        menCatalog.push(this.allCatalogs[i]);
      } 
    }
      return menCatalog;
  }
  
  fetchKidsCatalog = ():Array<Catalog> =>{
    let kidsCatalog = [];
    for(let i=0; i<this.allCatalogs.length; i++){
      if(this.allCatalogs[i]['property'] == 'kids'){
        kidsCatalog.push(this.allCatalogs[i]);
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
