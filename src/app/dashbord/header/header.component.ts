import { Component,  Input} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() portfolioActive;
  @Input() messagesActive;
  @Input() cvActive;

  items: MenuItem[];
  name: string;

  constructor(private router: Router,
              private jwt: JwtHelperService){}

  ngOnInit(): void{
    const decodeToken = this.jwt.decodeToken(localStorage.getItem('token'));
    this.name = decodeToken.name;
  
    this.items = [
      {
          label: this.name,
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Log out',
                  icon: 'pi pi-power-off',
                  command: () => {
                    this.logOut()
                  }
              },
          ]
      }
    ];
  }

  logOut(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
