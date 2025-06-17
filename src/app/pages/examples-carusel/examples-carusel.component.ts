import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-examples-carusel',
  templateUrl: './examples-carusel.component.html',
  styleUrls: ['./examples-carusel.component.scss']
})
export class ExamplesCaruselComponent {
  activeIndex = 0;
  lightboxOpen = false;
  lightboxIndex = 0;
  
  images = [
    { 
      src: 'images/students.jpg', 
      alt: 'Students in classroom', 
      caption: 'Dasturlash kursi o\'quvchilari bilan amaliy mashg\'ulot' 
    },
    { 
      src: 'images/image1.jpeg', 
      alt: 'Teacher giving lesson', 
      caption: 'Online darsidan lavha' 
    },
    { 
      src: 'images/image2.jpeg', 
      alt: 'Group study session', 
      caption: 'O\'quvchilar o\'rtasida teambuilding' 
    }
  ];

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.activeIndex = index;
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      if (event.key === 'Escape') this.closeLightbox();
      if (event.key === 'ArrowRight') this.lightboxIndex = (this.lightboxIndex + 1) % this.images.length;
      if (event.key === 'ArrowLeft') this.lightboxIndex = (this.lightboxIndex - 1 + this.images.length) % this.images.length;
    } else {
      if (event.key === 'ArrowRight') this.nextImage();
      if (event.key === 'ArrowLeft') this.prevImage();
    }
  }
}