import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorRepresentComponent } from "../color-represent/color-represent.component";

@Component({
    selector: 'app-month',
    standalone: true,
    templateUrl: './month.component.html',
    styleUrl: './month.component.css',
    imports: [CommonModule, ColorRepresentComponent]
})
export class MonthComponent {
  @Input() monthData : any;

}
