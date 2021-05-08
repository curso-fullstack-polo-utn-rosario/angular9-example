import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  ruta = '/ruta1';

  constructor(private activatedRoute: ActivatedRoute) { }

  identifier = 'Nada';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => console.log(params.id));

    this.identifier = this.activatedRoute.snapshot.params.identificador;
    }

}
