import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
   MatButtonModule,
   MatFormFieldModule,
   MatInputModule,
   FormsModule,
   ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   signinForm = this.fb.group({
    email: [''],
    password: [''],
  });
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
   
  }

  ngOnInit() {}

  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }
}
