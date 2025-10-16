import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // changed


@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss'],
  standalone: true,
  imports: [IonInput, ReactiveFormsModule, RouterModule, CommonModule], // use CommonModule (provides JsonPipe)
})
export class ReactivoComponent implements OnInit {

  username = new FormControl(null, [Validators.email]);
  password = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit(): void {}
}
