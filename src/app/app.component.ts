import { Component, inject } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { ChildComponent } from './components/child/child.component';
import { CommentsComponent } from './components/comments/comments.component';
import {
  CommonModule,
  LowerCasePipe,
  NgOptimizedImage,
  UpperCasePipe,
} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from './services/car/car.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    UserComponent,
    ChildComponent,
    CommentsComponent,
    UpperCasePipe,
    LowerCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
  city = 'TP.HCM';
  isServerRunning = true;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  message = '';
  items = new Array();
  logoUrl = '/assets/image/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  carService = inject(CarService);

  display;

  //Cách khác khi sử dụng service
  // constructor(private carService: CarService) {

  // }

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }

  addItem(item: string) {
    this.items.push(item);
  }

  greet() {
    alert('Hello, there 👋');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
    console.log(this.message);
  }

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
