import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  image: string;
  position: string;
  title: string;
  description: string;
  url: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '01', image: '/assets/images/portafolio-image.png', title: 'Titulo', description: 'Esto es la descripcion', url: 'sacamo.com'},
  {position: '02', image: '/assets/images/portafolio-image.png', title: 'Titulo', description: 'Esto es la descripcion', url: 'sacamo.com'},
  {position: '03', image: '/assets/images/portafolio-image.png', title: 'Titulo', description: 'Esto es la descripcion', url: 'sacamo.com'},
  {position: '04', image: '/assets/images/portafolio-image.png', title: 'Titulo', description: 'Esto es la descripcion', url: 'sacamo.com'},
  {position: '05', image: '/assets/images/portafolio-image.png', title: 'Titulo', description: 'Esto es la descripcion', url: 'sacamo.com'}
];

@Component({
  selector: 'app-portafolio-admin',
  templateUrl: './portafolio-admin.component.html',
  styleUrls: ['./portafolio-admin.component.scss']
})
export class PortafolioAdminComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'title', 'description', 'url'];
  dataSource = ELEMENT_DATA;

  constructor() { 

  }

  ngOnInit(): void {
  }

  
}
