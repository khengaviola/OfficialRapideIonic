import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/Dashboard/Dashboard';
import { ivFormPage } from '../pages/ivForm/ivForm';
import { ivTabPage } from '../pages/ivTab/ivTab';
import { evFormPage } from '../pages/evForm/evForm';
import { evTabPage } from '../pages/evTab/evTab';
import { evedJobOrderPage } from '../pages/evedJobOrder/evedJobOrder';
import { evedPaymentPage } from '../pages/evedPayment/evedPayment';
import { joFormPage } from '../pages/joForm/joForm';
import { joPaymentPage } from '../pages/joPayment/joPayment';
import { joTabPage } from '../pages/joTab/joTab';
import { RdFormPage } from '../pages/rd-form/rd-form';
import { PoFormPage }from '../pages/po-form/po-form';
 




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Inspect Vehicle ', component: ivFormPage },
      { title: 'Job Order ', component: joFormPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
