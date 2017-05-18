import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ivFormPage,
    ivTabPage,
    evFormPage,
    evTabPage,
    evedJobOrderPage,
    evedPaymentPage,
    joFormPage,
    joPaymentPage,
    joTabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ivFormPage,
    ivTabPage,
    evFormPage,
    evTabPage,
    evedJobOrderPage,
    evedPaymentPage,
    joFormPage,
    joPaymentPage,
    joTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
