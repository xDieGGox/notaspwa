import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
  selector: 'app-view-nota',
  templateUrl: './view-nota.component.html',
  styleUrls: ['./view-nota.component.scss']
})
export class ViewNotaComponent {
  nota: Nota = new Nota();

  constructor(private router: Router, private route: ActivatedRoute, private NotaFirebaseService: NotasFirebaseService){
    this.route.params.subscribe(params =>{
      console.log(params);
      if(params['id']){
        this.loadNota(params['id']);
      }
    })
  }

  goListaContactos(){
    this.router.navigate(['pages/lista-nota']);
  }

  updateNota() {
    // Actualizar nota existente
    this.NotaFirebaseService.update(this.nota);

    // Limpiar los datos del formulario
    this.nota = new Nota();
  }

  borrarNota() {
    this.NotaFirebaseService.delete(this.nota);
    this.router.navigate(['pages/lista-notas']);
    // Después de borrar la nota, puedes redirigir a la página de lista de notas o realizar otras acciones necesarias.
  }

  loadNota(uid: string){
    this.NotaFirebaseService.getNota(uid).subscribe(data =>{
      console.log(data);
      this.nota =<any> data;
    })
  }
}
