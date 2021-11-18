import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private EmployeeService: EmployeeService){}

  ngOnInit(){
    this.gerEMployess();
  }

  public gerEMployess(): void{
    this.EmployeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees)
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
    );
  }


}
