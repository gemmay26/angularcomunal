import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-begin';
  isavailable = true;
  reservadesalas(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Usted a seleccionado reserva de salas");
    console.log(event);
  }
  reportedeproblemas(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Usted a seleccionado Reporte de problemas");
    console.log(event);
  }
  miequipo(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Usted a seleccionado Mi equipo");
    console.log(event);
  }
  comunicados(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Usted a seleccionado Comunicados");
    console.log(event);
  }
  fichasintomatologia(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Usted a seleccionado Ficha de sintomatologia");
    console.log(event);
  }
}
