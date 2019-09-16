import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {MatExpansionModule } from '@angular/material/expansion';

 

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    ReactiveFormsModule, 
    FormsModule,
    MatExpansionModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
