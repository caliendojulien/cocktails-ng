import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Hydra} from "../../modeles/hydra";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  public resultatsRecherche: Observable<Hydra> | undefined;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit(): void {
  }

  public submitForm(valeur: any): void {
    this.resultatsRecherche = this.api.recherche(valeur.recherche);
  }
}
