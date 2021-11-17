import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nombre: string;
  position: string;
  correo: string;
  telefono: string;
  servicio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '01', nombre: 'Axel Moreno Lopez', correo: 'axel@gmail.com', telefono: '2361098399', servicio: 'Desarrollo Web'},
  {position: '02', nombre: 'Axel Moreno Lopez', correo: 'axel@gmail.com', telefono: '2361098399', servicio: 'Desarrollo Web'},
  {position: '03', nombre: 'Axel Moreno Lopez', correo: 'axel@gmail.com', telefono: '2361098399', servicio: 'Desarrollo Web'},
  {position: '04', nombre: 'Axel Moreno Lopez', correo: 'axel@gmail.com', telefono: '2361098399', servicio: 'Desarrollo Web'},
  {position: '05', nombre: 'Axel Moreno Lopez', correo: 'axel@gmail.com', telefono: '2361098399', servicio: 'Desarrollo Web'}
];

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.scss']
})
export class ClientesAdminComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'correo', 'telefono', 'servicio'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
