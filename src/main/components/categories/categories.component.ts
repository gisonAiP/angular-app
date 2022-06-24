import { Component, OnInit } from '@angular/core';
import { MainFacade } from '../../state/main.facade';
import {Category} from "../../../shared/model/category.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]> = this.facade.categories$;
  constructor(private facade: MainFacade) { }

  ngOnInit(): void {
    this.facade.getCategories();
  }

}
