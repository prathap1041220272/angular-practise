import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // myForm = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });
  myForm = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required ] ,
      books: this.fb.array([])
    })
  }

  get books(): FormArray {
    const books = this.myForm.get('books') as FormArray;
    return books;
  }

  addNewBook() {
    const books = this.myForm.get('books') as FormArray;
    const book = this.fb.group({
      name: ['', Validators.required]
    });
    books.push(book);
  }

  login(form) {
    console.log(form.value);
  }
}
