import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private authService: AuthService, private service: AuthService) {  }

  estaRegistrado = false;

  ngOnInit():void{
    this.authService.user$.subscribe(user => {
      this.estaRegistrado = !!user;
    });
  }

  async logout(){
    await this.service.logout();
    console.log('Sesión cerrada');
  }
  
}
