import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard {
  constructor(private auth: AuthServiceService,
              private router: Router){}

  canActivate(): void{
    if(!this.auth.isAuthenticated())
      this.router.navigate(['/login']);
  }
  
}
