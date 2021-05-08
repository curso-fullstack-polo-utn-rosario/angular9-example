import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  id: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.id = this.activatedRoute.snapshot.params
  this.activatedRoute.params.subscribe(params => this.id = params.id);
  }
  navigate() {

    setTimeout(()=> this.router.navigate(['ruta2', this.id]) , 2000);
  }

}
