import { Component } from '@angular/core';
import questions from './questions.json';

interface question {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  question: any;
  answer: any;
  
  submitForm(){
    const message = `Thank you for your contribution.`
    alert(message);
  }
  questions: question[] = questions;
}
