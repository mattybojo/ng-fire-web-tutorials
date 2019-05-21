import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  isSidebarOpen = false;

  @Output() onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.onSidebarToggle.emit(this.isSidebarOpen);
  }
}
