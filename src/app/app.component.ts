import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { ChildComponent } from './components/child/child.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    UserComponent,
    ChildComponent,
    CommentsComponent,
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
}
