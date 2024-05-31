import { Component, OnInit } from '@angular/core';
import { ExpenseCardComponent } from './expense-card/expense-card.component';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { expenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { expenseFormComponent } from './expense-form/expense-form.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ExpenseCardComponent,CommonModule,
    MatButton,expenseCategoriesComponent,
    expenseFormComponent,StepperModule,ButtonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class expenseComponent implements OnInit{

  budgets = [
    { name: 'Technology Infrastructure', allocated: 78000, spent: 132000},
    { name: 'Online Subscription', allocated: 60000, spent: 65000  },
    { name: 'Online Subscription', allocated: 60000, spent: 45000,  },
    { name: 'Online Subscription', allocated: 60000, spent: 55000,  },
    { name: 'Online Subscription', allocated: 60000, spent: 35000,  },
    { name: 'Online Subscription', allocated: 60000, spent: 25000,  },
    // Add other budget items here...
  ];
  addNewCard() {
    // Logic to add a new budget card
    const newBudget = { /* new budget object */ };
    this.budgets.push();
  }

  updateCard() {
    // Logic to update the budget card
    console.log('Update card');
  }

  deleteCard() {
    // Logic to delete the budget card
    console.log('Delete card');
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}