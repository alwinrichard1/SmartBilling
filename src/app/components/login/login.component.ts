import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  };

  /**GO TO REGISTER PAGE*/
  goToRegister(){
    alert();
  }

}
