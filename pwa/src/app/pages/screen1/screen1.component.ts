import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { UserState, setCredential } from 'src/app/store/user';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss'],
})
export class Screen1Component implements OnInit {
  form!: FormGroup;
  userData$!: Observable<UserState>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,15}$'),
      ]),
    });

    this.userData$ = this.store.pipe(select((state) => state.user));
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  submit() {
    this.store.dispatch(
      setCredential({ email: this.email.value, password: this.password.value })
    );
    this.router.navigate(['/screen2']);
  }
}
