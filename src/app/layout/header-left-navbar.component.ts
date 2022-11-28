import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { LayoutStoreService } from '@shared/layout/layout-store.service';

@Component({
  selector: 'header-left-navbar',
  templateUrl: './header-left-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLeftNavbarComponent implements OnInit {
  sidebarExpanded: boolean;
  events: string[] = [];
  opened: boolean;
  organizationName: any;
  userName: any;
  constructor(private _layoutStore: LayoutStoreService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this._layoutStore.sidebarExpanded.subscribe((value) => {
      this.sidebarExpanded = value;

    });
  }

  toggleSidebar(): void {
    // debugger
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
    this.ref.detectChanges()
  }
}
