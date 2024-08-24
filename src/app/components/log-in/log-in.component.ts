import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  onSubmit(){
   const username = document.getElementById('username') as HTMLInputElement
   const password = document.getElementById('password') as HTMLInputElement
 
   if(username!=null){
    localStorage.setItem('username', username.value);
   }
   if(password!=null){
    localStorage.setItem('password',password.value);
   }
  }
}
