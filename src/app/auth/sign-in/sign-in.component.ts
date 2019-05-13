import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faGooglePlusG, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  faGooglePlusG = faGooglePlusG;
  faFacebook = faFacebook;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
