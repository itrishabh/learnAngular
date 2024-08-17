import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  formData: any;

  constructor() {
    console.log('forms service works fine.');
    
  }

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
}
