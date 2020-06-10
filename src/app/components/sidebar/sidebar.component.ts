import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  collapsed = false;
  showLabel = true;

  isConfiguracoesCollapsed = true;

  constructor() { }

  async ngOnInit() {
  }

  get logo() {
    return `assets/logo${this.collapsed ? '-small' : ''}.svg`;
  }

  toggleCollapse() {
    if (this.collapsed) {
      setTimeout(() => this.showLabel = true, 350);
    } else {
      this.showLabel = false;
    }

    this.collapsed = !this.collapsed;
  }

}
