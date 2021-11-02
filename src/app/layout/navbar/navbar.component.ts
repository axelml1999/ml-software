import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.activeMenu("hamburger", "menu");
    this.activeMenuLink();
  }

  activeMenu(hamburgerId: any, menuId: any){
    const hamburger = document.getElementById(hamburgerId),
    menu:any = document.getElementById(menuId),
    btn:any = document.getElementById(hamburgerId);
  let menuOpen = false;

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      if (!menuOpen) {
        btn.classList.add("open");
        menuOpen = true;
      } else {
        btn.classList.remove("open");
        menuOpen = false;
      }
      menu.classList.toggle("show");
    });
  }
  }

  activeMenuLink() {
    const menu = document.getElementById("menu");
    if (menu) {
      const links = Array.from(menu.querySelectorAll("a"));
      links.map((link) => {
        if (
          link.href === location.href ||
          link.href === location.href.slice(0, -1)
        )
          link.classList.add("menu__link--active");
      });
    }
  }

}
