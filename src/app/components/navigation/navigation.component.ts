import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  isProfileMenuOpen = false;

  constructor(private authService: AuthService, private eRef: ElementRef) {}

  signOut() {
    this.authService.signOut();
  }


  @HostListener('document:click', ['$event'])
  clickOutside(event: { target: any; }) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isProfileMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
