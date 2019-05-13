import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
