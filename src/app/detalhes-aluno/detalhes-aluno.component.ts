import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-detalhes-aluno',
  templateUrl: './detalhes-aluno.component.html',
  styleUrls: ['./detalhes-aluno.component.css']
})
export class DetalhesAlunoComponent implements OnInit {
  @Input() aluno:Aluno;
  @Input() show:Boolean;

  constructor() { 
    this.show=false;
  }

  flag(){
    this.show=!this.show;
  }
  ngOnInit() {
  }
}