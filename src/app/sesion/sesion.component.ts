import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.css'
})
export class SesionComponent {
  constructor(private services: AuthService, private ruta: Router){}

  email!:string;
  password!:string;

  async login(){
    await this.services.login(this.email, this.password);
    this.ruta.navigate(['/']);
  }

}
