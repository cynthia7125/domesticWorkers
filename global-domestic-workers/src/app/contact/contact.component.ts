import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: any;
  email: any;
  message: any;
  
  submitForm(){
    const message = `Thank you for your contribution ${this.name}.`
    alert(message);
  }
}
