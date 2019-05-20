import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  isSidebarOpen = false;

  @Output() onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.onSidebarToggle.emit(this.isSidebarOpen);
  }
}
