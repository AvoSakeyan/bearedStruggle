import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  submitted = false;
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  onSubmit() {
    this.submitted = true;
    localStorage.setItem('login', JSON.stringify(this.form.value))
    this.router.navigateByUrl('/product-list');
  }

}
