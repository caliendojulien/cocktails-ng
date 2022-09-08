import {Component, OnInit} from '@angular/core';
import {Json} from "../../modeles/json";
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Hydra} from "../../modeles/hydra";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  public hydra: Observable<Hydra>;

  constructor(
    private api: ApiService
  ) {
    this.hydra = this.api.getCocktails();
  }

  ngOnInit(): void {
  }

}
