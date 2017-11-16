import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BonusPage } from '../pages';
import {Http, Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the Pickup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pickup2',
  templateUrl: 'pickup2.html',
})
export class Pickup2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pickup2Page');
  }

  send_notification(){
  	this.navCtrl.push(BonusPage);

  	const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Basic MGQxN2YwMTktMmM3My00ZGQxLWJhMWEtMGI3MDA3Nzc4ODIy`);

	const options = new RequestOptions({headers: headers});
	this.http.post(
	   "https://onesignal.com/api/v1/notifications",
	   JSON.stringify({ 
			  "app_id": "cf3dc23f-9d5e-4ce0-a3f3-91232716575d",
			  "contents": {"en": "Joonas Hattunen is going to Kesko. Order now!"},
			  "included_segments": ["All"]
			}),
	   options
	).subscribe(res => {
		console.log(res);
		
	});
  }

}
