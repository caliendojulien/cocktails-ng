import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Json} from "../modeles/json";
import {Hydra} from "../modeles/hydra";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private URL: string = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  private URL: string = "http://192.168.30.22:8000/api/cocktails";

  constructor(
    private http: HttpClient
  ) {
  }

  public getCocktails(): Observable<Hydra> {
    return this.http.get<Hydra>(this.URL);
  }

  public recherche(recherche: string): Observable<Hydra> {
    return this.http.get<Hydra>(this.URL+"?Cocktails=" + recherche);
  }
}
