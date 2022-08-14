import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-recievers',
  templateUrl: './recievers.component.html',
  styleUrls: ['./recievers.component.css'],
  providers:[UserService]
})
export class RecieversComponent implements OnInit {

  checkoutForm = new FormGroup({
    bic: new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    number: new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    name: new FormControl(null,[Validators.required,Validators.maxLength(14)])
  });

  constructor(private userService:UserService,
    private router:Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  keyPressNumbers(event: any) {
  
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  submitData() {
    if (this.checkoutForm.valid) {
      console.log('form submission logic here',this.checkoutForm.value);
      this.userService.doCheckout(this.checkoutForm.value).subscribe(
        (data) => {
          console.log('SUCCESS', data);
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
    } else {
      console.log('form validation messages');
    }
  }
  toTransactionPage(){
    this.router.navigateByUrl("transaction");
    
  }
}
