import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from './empolyee.service';
import { employeedata } from './model/empolyeedata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tabledata';
  employeedata:any;
  p :number =1;
  




  constructor(private es:EmpolyeeService){

  }
  columns=[
    "S.No" ,"Name","Gender","Role","Skill","Experience"
    ];
    index =["id","name","gender","role","skill","experience"];
    
    
  ngOnInit(): void{
  
    this.getemployeedata()
    
    
      
    }
      
        
      
      
    getemployeedata(){
      this.es.getemployeedata().subscribe
      
      (
        (response)=>
        
    
        {
          this.employeedata =response;
          
          console.log(response);
    
        },
        (error)=>{
          console.log("Error Occured :" +error);
        })
    }
}
