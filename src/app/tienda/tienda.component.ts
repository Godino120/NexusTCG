import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Producto } from '../models/producto.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  productos: Producto[] = [];
  error: string | null = null;
  cantidad!: number;

  constructor(private dataService: DataService){}

  async ngOnInit(): Promise<void> {
    try {
      this.productos = await this.dataService.getProducts();
    } catch (error) {
      this.error = 'Error al cargar los productos';
      console.error(error);
    }
  }

  async agregar(producto: Producto): Promise<void>{
    await this.dataService.agregarCarrito(producto, this.cantidad);
  }
}
