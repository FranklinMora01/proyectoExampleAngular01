import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public tituloNav: string = 'Aplicación Angular';
  public opciones: any [] = [
    {path: '/home' , name: 'Home'},
    {path: '/depositos' , name: 'Depositos'},
    {path: '/prestamos' , name: 'Prestamos'},
    {path: '/giros' , name: 'Giros'},
    {path: '/cta-corriente' , name: 'Cuenta Corrients'}
  ];
}
