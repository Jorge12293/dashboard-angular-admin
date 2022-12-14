import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  @Input('valor_progreso') progreso: number = 40;
  @Input('btn_class') btnClass: string = 'btn btn-primary';
  @Output('valor_salida') valorSalida: EventEmitter<number>= new EventEmitter();

  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`;
  }

  onChange(nuevoValor:number){
    if(nuevoValor>=100){
      this.progreso=100;
    }else if(nuevoValor<=0){
      this.progreso=0;
    } else{
      this.progreso=nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

  cambiarValor(valor:number){
    if(this.progreso >=100 && valor>=0){
      this.progreso=100;
      this.valorSalida.emit(this.progreso);
      return this.progreso;
    }
    if(this.progreso <= 0 && valor<0){
      this.progreso=0;
      this.valorSalida.emit(this.progreso);
      return this.progreso;
    }

    this.progreso = this.progreso+valor;
    this.valorSalida.emit(this.progreso);
    return this.progreso;
  }

}
