import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../senders/senders.component';

interface BankTypes {
  name: string;
  
}

interface MsgTypes {
  name: string;
  
}
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers:[UserService]
})
export class TransactionsComponent implements OnInit {
 
  bankTypes = new FormControl<BankTypes | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  banks: BankTypes[] = [
    {name: 'Bank'},
    {name: 'Customer'} 
  ];

  msgTypes = new FormControl<MsgTypes | null>(null,);
  selecttFormControl = new FormControl('', );
  msgs: MsgTypes[] = [
    {name: 'CHQB'},
    {name: 'CORT'},
    {name: 'HOLD'},
    {name: 'INTC'},
    {name: 'PHOB'},
    {name: 'PHOI'},
    {name: 'PHON'},
    {name: 'REPA'},
    {name: 'SDVA'}, 
  ];
  

  
  checkoutForm = new FormGroup({
    bic: new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    number: new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    name: new FormControl(null,[Validators.required,Validators.maxLength(14)])
  });
 

  constructor(private userService:UserService,
    private dialog: MatDialog,private router : Router) {} 
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
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
    selector: 'dialog-elements-example',
    templateUrl: 'dialog-elements-example.html',
  })

      
    export class DialogContentExampleDialog {
    constructor(private router:Router,
      private dialogRef: MatDialogRef<DialogElementsExampleDialog>) 
       {dialogRef.disableClose = false;}
      
    toHomePage(){
      this.dialogRef.close();
      this.router.navigateByUrl("home");
     } 
    }

