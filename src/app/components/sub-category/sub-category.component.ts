import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute}from '@angular/router';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
subCategories:any[]=[];
catId:any;
  constructor(private dataservice: DataService,private activatedRoute: ActivatedRoute) { 
    this.catId =this.activatedRoute.snapshot.paramMap.get('catId');
    this.dataservice.getSubCategoryByCatId(this.catId).subscribe((response:any)=>{
    this.subCategories =response.data;
    })
    }
 
  ngOnInit(): void {
  }

}
