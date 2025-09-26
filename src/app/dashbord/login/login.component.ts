import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string;
  password: string;

  constructor(private messageService: MessageService,
              private router: Router,
              private authService: AuthServiceService){}

  onLogin():void{
    const data = {
      name: this.name,
      password: this.password
    }

    this.authService.login(data).subscribe(
      todos => {
        localStorage.setItem('token', todos.token);
        this.router.navigate(['/portfolio']);  
      },
      error =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message});
        this.authService.logout();
      },
    );
    
  }
}
