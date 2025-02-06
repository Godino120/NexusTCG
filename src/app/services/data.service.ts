import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, get, ref, update } from '@angular/fire/database';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private datos: Database, private autentificacion: Auth) { }


  async getProducts(): Promise<Producto[]> {
    
    try {
      const productosRef = ref(this.datos, 'Productos');
      const snapshot = await get(productosRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.values(data) as Producto[];
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  }

  async agregarCarrito(producto: Producto, cantidad:number){
    const user =  await this.autentificacion.currentUser;
    if (user) {
      const carritoRef = ref(this.datos, 'Usuarios/'+String(user.uid)+'/'+producto.ID);

      await update(carritoRef, {Nombre: producto.Nombre, Imagen: producto.Imagen, Precio: producto.Precio, Cantidad: cantidad});
    }
  }
  
  async agregarUsuario(){
    const user =  await this.autentificacion.currentUser;
    const uid = String(user?.uid);
    
    if (user) {
      console.log(uid);
      const usuarioRef = ref(this.datos, 'Usuarios/');
      console.log(usuarioRef);
      await update(usuarioRef, {[uid]:''});
    }
  }
}
