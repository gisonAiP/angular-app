import { Component, OnInit } from '@angular/core';
import { MainFacade } from '../../state/main.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.facade.products$;
  constructor(private facade: MainFacade) { }

  ngOnInit(): void {
    this.facade.getProducts();
  }
}
