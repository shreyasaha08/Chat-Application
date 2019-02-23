import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { Cookie } from 'ng2-cookies/ng2-cookies';
@NgModule({
  
  imports: [
    CommonModule,
    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    RouterModule.forChild([
      {path:'sign-up',component: SignupComponent}
    ])
    ],
    
    declarations: [SignupComponent,LoginComponent],
    bootstrap: []
})
  
export class UserModule { }
