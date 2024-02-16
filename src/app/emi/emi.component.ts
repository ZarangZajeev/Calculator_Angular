import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  emiForm=new FormGroup(
    {
      amount:new FormControl("",Validators.required),
      interest:new FormControl("",Validators.required),
      tenure:new FormControl("",Validators.required),
    }
  )
  get amount(){
    return this.emiForm.get("amount")
  }
  get interest(){
    return this.emiForm.get("interest")
  }
  get tenure(){
    return this.emiForm.get("tenure")
  }

  emi:number=0
  totalPayableAMount:number=0
  totalInterestPayable:number=0

  performEmi(){
    console.log(this.amount?.value);
    console.log(this.interest?.value);
    console.log(this.tenure?.value);

    let p=Number(this.amount?.value)
    let r=Number(this.interest?.value)/12
    let n=Number(this.tenure?.value)*12

    let i=r/100
    let onePluR=(1+i)**n
    this.emi=Math.round((p*i*onePluR)/(onePluR-1))
    console.log(this.emi);
    this.totalPayableAMount=this.emi*n
    this.totalInterestPayable=this.totalPayableAMount-p
  }
}