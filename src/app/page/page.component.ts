import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  valor?: number
  lista: number[] = []
  array?: string;

  visivel = 'Visível';
  visivelLogo =  true;

  arrayDesafioIII: number[] = []

  numeroArray: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.resetDesafioI();
    this.resetDesafioIII();
  }

  adicionarProximoFibonacci(){
    const proximoNumero = this.lista[this.lista.length -1] +  this.lista[this.lista.length -2];
    this.lista.push(proximoNumero);
    this.alteraValor(proximoNumero);
    this.alteraArray();
  }

  alteraDesafioII(){
    this.visivel =  this.visivel == 'Visível'? 'Invisível' : 'Visível';
    this.visivelLogo =  this.visivelLogo == true? false : true;
  }

  resetDesafioI(){
    this.valor = 1;
    this.lista = [0,1]
    this.array = '0-1';

  }

  resetDesafioIII(){
    this.arrayDesafioIII = [0,1,2,3,4,5,6,7,8,9,10];
    this.numeroArray = 0;
  }

  filtrarArray(){
    if(this.numeroArray > 10){
      alert("Numero deve ser entre 0 a 10.")
    } else{
      this.arrayDesafioIII = this.arrayDesafioIII.filter(x => x === this.numeroArray);
    }
  }




  //METHODS PRIVATE

  private alteraValor(numero: number){
    this.valor = numero;
  }

  private alteraArray(){
    this.array = this.lista.join("-");
  }


}
