import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre: string;
  constructor(private alertController: AlertController) {}

  async presentAlert(form) {
    console.log(form)
    this.nombre=form.form.value.nombre
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: `${this.nombre} ${form.form.value.apellido}`,
      message: 'validación esxitosa',
      buttons: ['OK'],
    });

    await alert.present();
  }
}