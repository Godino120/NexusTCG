import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path: "contacto", component: ContactoComponent},
    {path: "inicio", component: InicioComponent}
];
