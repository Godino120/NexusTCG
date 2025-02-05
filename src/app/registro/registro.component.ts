import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

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
  
  constructor(private service: AuthService, private ruta: Router, private datos:DataService) { }

  async registrar(): Promise<void> {
    await this.service.registro(this.email, this.password);
    await this.datos.agregarUsuario();
    this.ruta.navigate(['/']);
  }
}
