import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 currentDate:any = new Date();
 selectedMatDate !: Date;
 ordinaryDateSelected !: Date;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

toSenderPage(){
  this.router.navigateByUrl("senders");
  }
 

}
