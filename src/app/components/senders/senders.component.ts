import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HostListener } from '@angular/core';

  @Component({
    selector: 'app-senders',
    templateUrl: './senders.component.html',
    styleUrls: ['./senders.component.css'],
    providers:[UserService]
   
})

export class SendersComponent implements OnInit {
  checkoutForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.maxLength(14)]),
  });
    
  constructor(private userService:UserService,
    private router:Router,
    public dialog: MatDialog) { }

    openDialog() {
      this.dialog.open(DialogElementsExampleDialog);
    }

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
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(private router:Router,
    private dialogRef: MatDialogRef<DialogElementsExampleDialog>)
    {dialogRef.disableClose = false;}

  toRecieverPage(){
    this.dialogRef.close();
    this.router.navigateByUrl("recievers");
    
  }
}