import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
  <div [style.width]="size +'px'" [style.height]="size +'px'">
    <span class="loader" [style.width]="size +'px'" [style.height]="size +'px'" [style.border]="stroke + 'px' + ' solid ' + color"></span>
  </div>`,
  
  styles: [`
    .loader {
      border-bottom-color: transparent !important;
      border-radius: 50%;
      display: inline-block;
      animation: rotation 1.5s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
  `]
})
export class SpinnerComponent {
  @Input() size: string = '48';
  @Input() color: string = '#2081BE';
  @Input() stroke: string = '5';
}
