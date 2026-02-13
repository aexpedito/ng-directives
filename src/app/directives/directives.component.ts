import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  name: string = '';
  email: string = '';
  city: string = '';
  message: string = '';
  positions: string[] = ['Developer', 'Designer', 'Manager'];
  sent: boolean = false;
  active: boolean = false;

  send() {
    this.sent = true;
    this.message = `Name: ${this.name}, Email: ${this.email}, City: ${this.city}`;
  }

  reset() {
    this.name = '';
    this.email = '';
    this.city = '';
    this.message = '';
    this.sent = false;
  }

  get status(){
    return this.active ? 'Active' : 'Inactive';
  }
}
