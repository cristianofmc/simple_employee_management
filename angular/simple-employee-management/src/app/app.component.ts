import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees: Employee[] = [];
  constructor(private EmployeeService: EmployeeService){}

  public gerEMployess(): void{
    this.EmployeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
    );
  }


}
