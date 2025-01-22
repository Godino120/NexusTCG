import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: "", redirectTo: "inicio", pathMatch: "full" }, 
    { path: "contacto", component: ContactoComponent },
    { path: "inicio", component: InicioComponent },
    { path: "registro", component: RegistroComponent }
];
