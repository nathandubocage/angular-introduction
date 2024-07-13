import {
  Component,
  computed,
  effect,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { CountComponent } from './count/count.component';
import { AppService } from './app.service';
import { FormsModule, NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ItemsComponent } from './items/items.component';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonPrimaryComponent,
    CountComponent,
    FormsModule,
    AsyncPipe,
    ItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public showContent = false;
  public val: number = 0;

  private usersService = inject(AppService);
  public users = this.usersService.users.asReadonly();

  public testSignal = signal('Nathan');

  public user = new BehaviorSubject({
    id: 1,
    name: 'Nathan',
    username: 'nathan',
    email: 'nathan@gmail.com',
  });

  public userDisplay = this.user.asObservable();

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor() {
    effect(() => {
      console.log('Compteur :', this.completedTaskCount());
    });
  }

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe();

    this.user.subscribe((user) => {});
  }

  public up(): void {
    this.val++;
  }

  public countSignal = signal(1);

  public completedTaskCount = computed(() => {
    return this.countSignal() * 2;
  });

  public completeTask(): void {
    this.countSignal.update((count) => count * 2);
  }

  public onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
