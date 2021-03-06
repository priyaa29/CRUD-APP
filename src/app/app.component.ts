import { Component } from '@angular/core';

export class Employee {
  EmployeeID: number;
  Code: string;
  Name: string;
}

const EmployeeArray: Employee[] = [
  { EmployeeID: 1, Code: "AR", Name: "Angelice Ramos" },
  { EmployeeID: 2, Code: "MS", Name: "Michael Silva" },
  { EmployeeID: 3, Code: "FG", Name: "Fiona Green" },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeCollection = EmployeeArray;

  selectedEmployee: Employee = { EmployeeID: 0, Code: "", Name: "" };

  OpenForEdit(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  AddOrEdit(): void {
    if (this.selectedEmployee.EmployeeID == 0)//insert
    {
      this.selectedEmployee.EmployeeID = Math.max.apply(Math,this.employeeCollection.map(function(x){return x.EmployeeID;}))+1;
      this.employeeCollection.push(this.selectedEmployee);
    }
    this.selectedEmployee =  { EmployeeID: 0, Code: "", Name: "" };
  }

  Delete() : void{
    this.employeeCollection = this.employeeCollection.filter(x => x != this.selectedEmployee);
    this.selectedEmployee =  { EmployeeID: 0, Code: "", Name: "" };
  }
}
