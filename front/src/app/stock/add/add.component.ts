import { ArticleService } from './../../services/article.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';

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

  constructor(private router: Router, private articleService: ArticleService) {}

  submit() {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigateByUrl('/stock');
  }
}
