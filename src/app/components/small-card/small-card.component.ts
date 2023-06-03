import { Component, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = ""

  @Input()
  Id: string = "0"

  constructor() { }

  ngOnInit(): void { }
}