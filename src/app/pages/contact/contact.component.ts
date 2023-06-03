import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tattooForm: any = FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.tattooForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      uf: ['', Validators.required],
      city: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      instagram: [''],
      tattooDescription: ['', Validators.required],
      bodyPart: ['', Validators.required],
      size: ['', Validators.required],
      howDidYouMeet: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.tattooForm.valid) {
      // Submit the form data
      console.log(this.tattooForm.value);
      // You can send the data to an API, perform validation, etc.
    } else {
      // Display error messages or handle form validation
    }
  }
}
