import { HomePage } from './../../pages/home/home.page';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private menu: MenuController, public popover: PopoverController) { }

  openFirst() { 
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: HomePage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ViewTittle(){
    document.getElementById("titulo").style.visibility = "visible";
  }

  OutTittle(){
    document.getElementById("titulo").style.visibility = "hidden";
  }
}
