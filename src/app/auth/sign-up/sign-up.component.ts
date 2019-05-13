import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faGooglePlusG, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  faGooglePlusG = faGooglePlusG;
  faFacebook = faFacebook;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
