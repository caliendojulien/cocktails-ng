import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../modeles/cocktail";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  @Input() public cocktail: Cocktail | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
