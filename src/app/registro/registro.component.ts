import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, FormsModule], 
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email='';
  password='';
  
  constructor(private service: AuthService, private ruta: Router) { }

  async registrar(): Promise<void> {
    await this.service.registro(this.email, this.password);
    this.ruta.navigate(['/']);
  }
}
