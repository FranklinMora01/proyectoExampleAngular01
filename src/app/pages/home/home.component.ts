import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public title : string = 'Home';
  public headersTablet: string [] = ['Saldo', 'Estado'];
  public saldo: number = 0;
  public estado: string = 'Sin estado';
  public status: boolean = false;

  opcionesBtnAumentar = {
    color: 'btn btn-success',
    titleBtn: 'Aumentar Saldo'
  }

  opcionesBtnDisminuir = {
    color: 'btn btn-danger',
    titleBtn: 'Disminuir Saldo'
  }

  opcionesBtnEstado = {
    color: 'btn btn-warning',
    titleBtn: 'Cambiar Estado'
  }

constructor() {

} 

aumentarSaldo() {
  this.saldo = this.saldo + 1000;
}

disminuirSaldo() {
   this.saldo = this.saldo - 1000;
}

cambiarEstado() {
  this.status = !this.status;
  this.estado = this.status == false ? "Activo" : "Inactivo";
  
}

}
