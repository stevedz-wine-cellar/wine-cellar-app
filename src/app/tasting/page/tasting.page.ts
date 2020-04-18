import { Component, OnInit } from '@angular/core';
import {TastingsService} from "../service/tastings.service";
import {Observable} from "rxjs";
import {Tasting} from "../domain/tasting";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.page.html',
  styleUrls: ['./tasting.page.scss'],
})
export class TastingPage implements OnInit {

  public tastings$: Observable<Tasting>;

  constructor(private tastingsService: TastingsService) { }

  ngOnInit() {
    this.tastings$ = this.tastingsService.getTastings();
  }

}
