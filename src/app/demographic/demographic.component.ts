import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demographic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent {
  demographicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demographicForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      birthDate: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(120)]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.demographicForm.valid) {
      console.log(this.demographicForm.value);
    } else {
      console.log('Demographic Form is invalid');
    }
  }
}
