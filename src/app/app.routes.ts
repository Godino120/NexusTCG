import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { TiendaComponent } from './tienda/tienda.component';

export const routes: Routes = [
    { path: "", redirectTo: "inicio", pathMatch: "full" }, 
    { path: "contacto", component: ContactoComponent },
    { path: "inicio", component: InicioComponent },
    { path: "registro", component: RegistroComponent },
    { path: "iniciarSesion", component: SesionComponent},
    { path: "tienda", component: TiendaComponent}
];
