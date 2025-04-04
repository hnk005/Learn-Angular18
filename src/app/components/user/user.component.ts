import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() occupation = '';
  username = 'youngTech';
  favoriteFramework = '';
  
}
