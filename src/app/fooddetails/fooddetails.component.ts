import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { foodService } from '../../../food.service';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrl: './fooddetails.component.css'
})
export class FooddetailsComponent implements OnInit {

  constructor(public activateRoute: ActivatedRoute, public fs: foodService) {

  }
  fooddetails: any[] = [];
  foodDetailsByID = "";
  foodType = "";
  ngOnInit(): void {
    this.activateRoute.params.subscribe((param: any) => {
      console.log(param);
      this.fooddetails = this.fs.getFoodDetails();
      let test = this.fooddetails.find((item: any) => item.foodID == +param.foodID);
      console.log(test.details);
      this.foodDetailsByID = test.details;
      this.foodType = test.FoodItem;
    })

  }
}
