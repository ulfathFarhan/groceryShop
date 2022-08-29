import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css'],
})
export class FilteredComponent implements OnInit {
  public products: any[] = [];
  public subProducts: any[] = [];
  public subId: any;
  public catId: any;
  public subName: any;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.subId = activatedRoute.snapshot.paramMap.get('subId');
    this.dataService
      .getProductBySubId(this.subId)
      .subscribe((response: any) => {
        this.products = response.data;
        console.log(this.products);
        this.catId = this.products[0].catId;
        console.log(this.catId);
        this.dataService
          .getSubCategoryByCatId(this.catId)
          .subscribe((response: any) => {
            this.subProducts = response.data;
            for (let i = 0; i < this.subProducts.length; i++)
              if (this.subProducts[i].subId == this.subId)
                this.subName = this.subProducts[i].subName;
          });
      });
  }
  backTrack() {
    this._location.back();
  }
  ngOnInit(): void {}
}
