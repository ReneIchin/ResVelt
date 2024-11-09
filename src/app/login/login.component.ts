import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form : FormGroup;

  constructor(private fb: FormBuilder, private apiServe: ApiService, private router: Router){
    this.form = this.fb.group({
      username : ['',[Validators.required,Validators.max(100)]],
      password : ['',[Validators.required]]
    });
  }

  onLogin(){
    const loginData = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    };

    this.apiServe.create('Login/LoginUser', loginData).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          console.log('Login exitoso:', response.body);
        } else {
          console.log(`Estado de respuesta: ${response.status}`);
        }
      },
      error => {
        if (error.status === 404) {
          console.error('Usuario no encontrado.');
        } else if (error.status === 500) {
          console.error('Error en el servidor.');
        } else {
          console.error('Error en el Login:', error);
        }
      }

    );

  }


}
