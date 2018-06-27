import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewDetailsComponent } from './view-details/view-details.component';
import {MatButtonModule,
 MatCheckboxModule,
 MatFormFieldModule,
 MatAutocompleteModule,
 MatInputModule,
 MatCheckboxModule,
 MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
