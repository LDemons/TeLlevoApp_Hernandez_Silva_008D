import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  usuario={
    email:'',
    password:''

  }

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  //método que envia un mensaje
  async Saludar() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenid@',
      message: 'Que tengas un gran día!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  // Login
  async EnviarLogin(){
    const alert = await this.alertController.create({
      header: 'Login',
      message: 'Te has logueado exitosamente!',
      buttons: ['OK'],
    });

    await alert.present();

    this.usuario.email="";
    this.usuario.password="";
  
  }
   
  //metodo que permite ingresar datos 
  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Acerca de ti..',
        },
      ],
    });

    await alert.present();
  }

  
}

