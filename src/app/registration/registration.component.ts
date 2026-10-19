import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder){}
  registrationForm = this.fb.nonNullable.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]],
    phone:['', [Validators.pattern(/^[0-9]{10}$/)]]
  })

  onSubmit() {
    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return;
    }
    console.log("Raw value: ", this.registrationForm.getRawValue());
  }
}
