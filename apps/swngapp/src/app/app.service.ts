import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isSidebarOpened = signal(false);

  closeSidebar() {
    this.isSidebarOpened.set(false);
  }

  openSidebar() {
    this.isSidebarOpened.set(true);
  }
}