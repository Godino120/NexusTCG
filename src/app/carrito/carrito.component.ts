import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../models/producto.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  productos: Producto[] = [];
  error: string | null = null;
  total: number = 0;
  
  constructor(private datos: DataService){}
  
    async ngOnInit(): Promise<void> {
      try {
        this.productos = await this.datos.getCarrito();
        this.total = this.productos.reduce((total, producto) => total + producto.Precio*producto.Cantidad, 0);
      } catch (error) {
        this.error = 'Error al cargar los productos';
        console.error(error);
      }
    }

}