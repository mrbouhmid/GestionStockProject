import { Injectable } from '@angular/core';
import { Produit } from './produit.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {
  //PRODUITS : Produit[] = [];
  produits : Produit[] = [];
  url = "http://localhost:8080/api/produit";
  token = btoa('user' + ':' + 'user');
  headers = new HttpHeaders({
    Authorization : 'Basic ' + this.token
  });

  getProduits(){
    return this.http.get<Produit[]>(this.url, {headers : this.headers});
  }

  onSelectProduit(data : Produit) {
    return this.http.get<Produit>(this.url, {headers : this.headers});
  }

  constructor(private http : HttpClient) { 

    /*this.getProduits().subscribe(
      (produits : Produit[] ) => { this.produits = produits ; console.log(this.produits)}
    );*/


    /*let p1: Produit = new Produit( 'Livre' , 50 , 20) ;
    let p2: Produit = new Produit( 'Cahier' , 500 , 120) ;
    let p3: Produit = new Produit( 'Stylo' , 509 , 3.20) ;
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);*/



  }

  /*getProduit():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url);
  }*/
}
