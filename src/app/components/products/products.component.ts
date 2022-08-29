import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products :any[]=[];
catId:any;
  constructor(private dataService: DataService,private activatedRoute:ActivatedRoute) { 
    this.catId =activatedRoute.snapshot.paramMap.get('catId');
    console.log(activatedRoute.snapshot);
    this.dataService.getProductByCatId(this.catId).subscribe((response:any)=>{
this.products=response.data;
    })
  }

  ngOnInit(): void {
  }

}
