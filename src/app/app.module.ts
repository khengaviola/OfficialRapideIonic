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
import { UpdateEstimatePage } from '../pages/update-estimate/update-estimate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataTablesModule } from 'angular-datatables';
import { UserproviderProvider } from '../providers/userprovider/userprovider';

import { HttpModule } from '@angular/http';
import { ServicesProvider } from '../providers/services/services';
import { ProductProvider } from '../providers/product/product';
import { DiscountProvider } from '../providers/discount/discount';
import { PackageProvider } from '../providers/package/package';
import { PromoProvider } from '../providers/promo/promo';
import { TechnicianProvider } from '../providers/technician/technician';
import { CustomerProvider } from '../providers/customer/customer';
import { DashboardProvider } from '../providers/dashboard/dashboard';
import { JoborderProvider } from '../providers/joborder/joborder';
import { InspectProvider } from '../providers/inspect/inspect';
import { ExpandableComponent } from '../components/expandable/expandable';
import { Expandable2Component } from '../components/expandable2/expandable2';
import { Expandable3Component } from '../components/expandable3/expandable3';

import { RdFormPage } from '../pages/rd-form/rd-form';
import { PoFormPage }from '../pages/po-form/po-form';
import { PurchaseProvider } from '../providers/purchase/purchase';



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
    joTabPage,
    RdFormPage,
    PoFormPage,
    UpdateEstimatePage,
    ExpandableComponent,
    Expandable2Component,
    Expandable3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTablesModule,
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
    PoFormPage,
    joTabPage,
    RdFormPage,
    UpdateEstimatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserproviderProvider,
    ServicesProvider,
    ProductProvider,
    DiscountProvider,
    PackageProvider,
    PromoProvider,
    TechnicianProvider,
    CustomerProvider,
    CustomerProvider,
    DashboardProvider,
    JoborderProvider,
    InspectProvider,
    PurchaseProvider
  ]
})
export class AppModule {}
