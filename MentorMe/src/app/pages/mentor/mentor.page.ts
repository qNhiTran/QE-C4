import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.page.html',
  styleUrls: ['./mentor.page.scss'],
})
export class MentorPage {

  constructor(private router: Router) { }

  navToMentorLogin() {
    this.router.navigate(['/mentor-login']);
  }

  navToMentorSignUp() {
    this.router.navigate(['/mentor-signin']);
  }

}
