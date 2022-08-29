import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
product :any;
id='5de4a2b6a32d0906687812ea';
  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.snapshot.paramMap.get('id')
this.dataService.getProductById(this.id).subscribe((response:any)=>{
  this.product=response.data;
})
   }

  ngOnInit(): void {
  }

}
