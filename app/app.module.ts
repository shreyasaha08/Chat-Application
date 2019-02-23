import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent} from './user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { AppService } from './app.service';
import { RemoveSpecialCharPipe } from './shared/pipe/remove-special-char.pipe';
import { SpecialPipe } from './special.pipe'



@NgModule({
  declarations: [
    AppComponent,
    SpecialPipe
  
    
    

  ],
  imports: [
    BrowserModule,
    ChatModule,
    UserModule,
    FormsModule,
    RemoveSpecialCharPipe,
    
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() ,
    
    
    RouterModule.forRoot([
        {path:'login', component:LoginComponent,pathMatch:'full'},
        {path:'',component:LoginComponent,pathMatch:'full'},
        {path:'*',component:LoginComponent},
        {path:'**',component:LoginComponent}
        
      ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
