import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonLabel, IonInput, IonButton, IonText, CommonModule, ReactiveFormsModule, RouterModule],
})
export class LoginComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  yaviracValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !value.toLowerCase().includes('yavirac')) {
      return { yaviracMissing: true };
    }
    return null;
  };

  // Validador personalizado: la contraseña debe contener "21"
  passwordContains21Validator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (value && !value.includes('21')) {
      return { missing21: true };
    }
    return null;
  };

  // Validador de grupo: confirma que password y confirm coincidan
  matchPasswordsValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const passCtrl = group.get('password');
    const confirmCtrl = group.get('confirm');
    if (!passCtrl || !confirmCtrl) return null;

    const pass = passCtrl.value;
    const confirm = confirmCtrl.value;

    if (pass !== confirm) {
      // añadir error notMatching sin borrar otros errores existentes
      confirmCtrl.setErrors({ ...(confirmCtrl.errors || {}), notMatching: true });
      return { notMatching: true };
    } else {
      // si antes tenía notMatching, eliminarlo
      if (confirmCtrl.errors) {
        const errors = { ...(confirmCtrl.errors) };
        delete errors['notMatching'];
        if (Object.keys(errors).length === 0) {
          confirmCtrl.setErrors(null);
        } else {
          confirmCtrl.setErrors(errors);
        }
      }
      return null;
    }
  };

  formRegister = this.formBuilder.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/@yavirac\.edu\.ec$/),
          this.yaviracValidator
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/(?=.*[!@#$%^&*(),.?":{}|<>])/), // al menos un carácter especial
          this.passwordContains21Validator // <-- validador que exige "21"
        ],
      ],
      confirm: ['', [Validators.required]],
    },
    {
      validators: this.matchPasswordsValidator // <-- validador de grupo para comparar password/confirm
    }
  );

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formRegister.valid) {
      // manejar envío
      console.log('Formulario válido', this.formRegister.value);
    } else {
      this.formRegister.markAllAsTouched();
    }
  }

  get username() {
    return this.formRegister.get('username');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get confirm() {
    return this.formRegister.get('confirm');
  }
}
