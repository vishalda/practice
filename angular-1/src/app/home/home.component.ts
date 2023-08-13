import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form = this.formBuilder.group({
    player1:'',
    player2:'',
  });
  
  constructor(private formBuilder: FormBuilder, private routes: ActivatedRoute) {
    
  }

  onSubmit(){
  }
}
