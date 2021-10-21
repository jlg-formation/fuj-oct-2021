import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('Tournevis', [Validators.required]),
    price: new FormControl(1.5, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(private router: Router) {}

  submit() {
    console.log('submit');
    // ajout article dans la liste
    this.router.navigateByUrl('/stock');
  }
}
