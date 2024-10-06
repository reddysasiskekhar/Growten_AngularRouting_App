import { Component,OnInit  } from '@angular/core';
import { foodService } from '../../../food.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent implements OnInit {
constructor(public foodService:foodService){

}
foodItems:any[]=[];

//human beging life cycle
//one life cycle hook is angular
//oninit
//automatically executs when  component get initlized
 ngOnInit(): void {
  this.foodItems= this.foodService.getFoodItems();
  
 }

}

