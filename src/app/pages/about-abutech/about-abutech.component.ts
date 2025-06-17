import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-abutech',
  templateUrl: './about-abutech.component.html',
  styleUrls: ['./about-abutech.component.scss']
})
export class AboutAbutechComponent implements OnInit {
  showTitle = false;
  showCards = [false, false, false];

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const titleElement = document.querySelector('.section-title');
    const cardElements = document.querySelectorAll('.card');
    
    if (this.isInViewport(titleElement)) {
      this.showTitle = true;
    }

    cardElements.forEach((card, index) => {
      if (this.isInViewport(card)) {
        setTimeout(() => {
          this.showCards[index] = true;
        }, index * 800);
      }
    });
  }

  isInViewport(element: Element | null): boolean {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
}