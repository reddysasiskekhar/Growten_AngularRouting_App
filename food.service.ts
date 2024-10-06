import { Injectable } from "@angular/core";

@Injectable()
export class foodService{

    getFoodItems(){
        return[{
            foodID : 1 ,FoodItem : "veg"
        },
        {
            foodID : 2 ,FoodItem : "non-veg"
        }]
    }
    getFoodDetails(){
        return[{
            foodID : 1 ,FoodItem : "veg",details : "puri , dosa, idli"
        },
        {
            foodID : 2 ,FoodItem : "non-veg",details : "fish, cb, Mb"
        }]
    }

}