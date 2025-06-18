import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-promote-abutech',
  templateUrl: './promote-abutech.component.html',
  styleUrls: ['./promote-abutech.component.scss']
})
export class PromoteAbutechComponent {
  consultForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.consultForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+998\d{9}$/)]],
      consent: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.consultForm.valid) {
      console.log('Form submitted!', this.consultForm.value);
      alert('Soʻrovingiz qabul qilindi! Tez orada siz bilan bogʻlanamiz.');
      this.consultForm.reset();
      this.consultForm.get('consent')?.setValue(false); // Reset checkbox
    } else {
      this.consultForm.markAllAsTouched();
      alert('Iltimos, barcha maydonlarni toʻgʻri toʻldiring!');
    }
  }
}