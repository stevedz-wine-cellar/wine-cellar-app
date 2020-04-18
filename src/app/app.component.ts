import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService } from "angular-oauth2-oidc";
import { authorizationFlowConfig } from "./auth.config";
import { JwksValidationHandler } from "angular-oauth2-oidc-jwks";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Tastings',
      url: '/tasting',
      icon: 'mail'
    },
    {
      title: 'Tasting Notes',
      url: '/tasting-note',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'heart'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.oauthService.configure(authorizationFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(result => {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) {
          this.oauthService.initLoginFlow();
        }
      });
  }
}
