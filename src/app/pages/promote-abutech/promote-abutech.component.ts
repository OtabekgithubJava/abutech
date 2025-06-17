import { Component } from '@angular/core';

@Component({
  selector: 'app-promote-abutech',
  templateUrl: './promote-abutech.component.html',
  styleUrl: './promote-abutech.component.scss'
})
export class PromoteAbutechComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted!');
    alert('Soʻrovingiz qabul qilindi! Tez orada siz bilan bogʻlanamiz.');
    
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
