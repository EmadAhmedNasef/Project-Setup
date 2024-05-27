import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../Interface/category';

@Injectable({
  providedIn: 'root'
})
export class IncomeCategoryService {

  constructor() { }

  isVisible: boolean = true;
  // categoryId: number = -1;

  
  categories: Category[] = [
    {icon:'attach_money', name:'Salary', id:1},
    {icon:'card_giftcard', name:'Gifts', id:2},
    {icon:'business', name:'Business', id:3},
    { icon: 'restaurant', name: 'Food & Drink' ,id:4},
    { icon: 'shopping_cart', name: 'Shopping' ,id:5},
    { icon: 'directions_bus', name: 'Transport' ,id:6 },
    { icon: 'receipt', name: 'Bills & Fees' ,id:7 },
    { icon: 'theaters', name: 'Entertainment',id:8 },
    { icon: 'directions_car', name: 'Car' ,id:9 },
    { icon: 'flight', name: 'Travel' ,id:10 },
    { icon: 'people', name: 'Family' ,id:11 },
    { icon: 'local_hospital', name: 'Healthcare' ,id:12 },

    // Add more categories as needed
  ];



  categoryId : BehaviorSubject<number> = new BehaviorSubject(-1);
  
  getCategoryNameById(id: number): string {
    return this.categories.find((category) => category.id === id)?.name || '';
  }

  getCategoryId(): number | null {
    return this.categoryId.getValue();
  }



}