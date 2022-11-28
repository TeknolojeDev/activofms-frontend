import { Component, ChangeDetectionStrategy, Input, SimpleChanges, } from '@angular/core';
import { LayoutStoreService } from '@shared/layout/layout-store.service';

@Component({
  selector: 'sidebar-logo',
  templateUrl: './sidebar-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SidebarLogoComponent {

  @Input() sidebarExpanded: boolean;

  constructor(private _layoutStore: LayoutStoreService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidebarExpanded != changes['sidebarExpanded'].currentValue) {
      this.sidebarExpanded = changes['sidebarExpanded'].currentValue
      console.log(changes, 'valueChange');
    }
    console.log(changes, 'hit');
  }
}








function closeNav() {
  document.getElementById("sidebar-menu").style.width = "0";
  document.getElementById("app/home").style.marginLeft = "0";
}
