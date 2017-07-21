 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { evFormPage } from '../evForm/evForm';
import { evedJobOrderPage } from '../evedJobOrder/evedJobOrder';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
import { DiscountProvider } from '../../providers/discount/discount';
import { PackageProvider } from '../../providers/package/package';
import { ProductProvider } from '../../providers/product/product';
import { PromoProvider } from '../../providers/promo/promo';
import { TechnicianProvider } from '../../providers/technician/technician';
import { CustomerProvider } from '../../providers/customer/customer';

@IonicPage()
@Component({
  selector: 'page-evTab',
  templateUrl: 'evTab.html',
})
export class evTabPage {
  expanded:boolean = true;
  custName : any;
  cust : any;
  data : any;
  info : any;
  select : any;
  prod : any;
  pack : any;
  prom : any;
  disc : any;
  tech : any;
  try : any;

  items: any = [];
  item2nd: any = [];
  item3rd: any = [];
  // itemExpanded : boolean = false;
  itemExpandHeight : number = 200;
  itemExpandHeight2 : number = 200;
  itemExpandHeight3 : number = 200;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public toastCtrl: ToastController, private serviceProvider: ServicesProvider, private productProvider: ProductProvider, private discountProvider: DiscountProvider, private packageProvider: PackageProvider, private promoProvider: PromoProvider, private technicianProvider: TechnicianProvider, private customerProvider: CustomerProvider) {
    this.custName = {};
  	this.data = {};
    this.cust = {};
    this.prod = {};
    this.pack = {};
    this.prom = {};
    this.disc = {};
    this.tech = {};
    this.info = "customer";
    this.select = {};

    // this.items3 = [
    //   {expanded3:true}
    // ];
  }

  expands(){
    if(this.expanded){
      this.expanded = false;
    }else{
      this.expanded = true;
    }
  }

 

  //  expandItem3(item3){
  //   item3.expanded = !item3.expanded;
  // }

   ngOnInit() {
    this.getService();
    this.getProduct();
    this.getPackage();
    this.getPromo();
    this.getDiscount();
    this.getTechnician();
    // this.setCustomer();
  }



 // setCustomer(){
 //    this.customerProvider.getCustomer().subscribe(res=>{
 //      this.data = res
 //      // console.log(this.data[0]);



 //    });
 // }


  getService(){
    this.serviceProvider.getService().subscribe(res=>{
      this.data = res
      // console.log(this.data);

    });

  }

  getProduct(){
    this.productProvider.getProduct().subscribe(res=>{
      this.prod = res
      // console.log(this.prod);

    

    });

  }

  getPackage(){

    this.packageProvider.getPackage().subscribe(res=>{
      this.pack = res



    });

  }

   getPromo(){
    this.promoProvider.getPromo().subscribe(res=>{
      this.prom = res
      // console.log(this.prom);

    });

  }

  getDiscount(){
    this.discountProvider.getDiscount().subscribe(res=>{
      this.disc = res
      // console.log(this.disc);

    });

  }

   getTechnician(){
    this.technicianProvider.getTechnician().subscribe(res=>{
      this.tech = res
      // console.log(this.tech);

    });

  }

  goEvBack(){
    this.navCtrl.push(evFormPage);
  }

  modalClose(){
    this.navCtrl.pop();
  }

  goEvedJobOrder(){
    this.navCtrl.push(evedJobOrderPage);
  }

  submit(){
    // console.log(this.data.tech);
    // console.log(this.data.discount);
    // console.log(this.data.promo);
    // console.log(this.data.packages);
    // console.log(this.data.product);
    // console.log(this.data.services);
    let first = this.data.first;
    let middle = this.data.middle;
    let last = this.data.last;
    let st = this.data.st;
    let brgy = this.data.brgy;
    let city = this.data.city;
    let contact = this.data.contact;
    let email = this.data.email;
    let plate = this.data.plate;
    let make = this.data.make;
    let model = this.data.model;
    let year = this.data.year;
    let type = this.data.type;
    let engine = this.data.engine;
    let mileage = this.data.mileage;
    let tech = this.data.tech; 
    let discount = this.data.discount;
    let promo = this.data.promo;
    let packages = this.data.package;
    let product = this.data.product;
    let services = this.data.services;
    let desc = this.data.desc;
    let data = JSON.stringify({first,middle,last,st,brgy,city,contact,email,plate,make,model,year,type,engine,mileage,tech,discount,promo,packages,product,services,desc});
    let link = "http://localhost/Sample/insert.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(evTabPage);
        let toast = this.toastCtrl.create({
          message: 'Register Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Register Failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  }


  plateChange(){
    this.data.plate = this.select.plate; 
    var plate = document.getElementById("plate");
    plate.innerHTML = "";
  }

}
