//import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core'; //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',   //Angular component selector
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!: Product; //pass product data from 
  @Output() notify = new EventEmitter();

}
