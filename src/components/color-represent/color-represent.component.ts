import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-color-represent',
  standalone: true,
  imports: [],
  templateUrl: './color-represent.component.html',
  styleUrl: './color-represent.component.css'
})
export class ColorRepresentComponent implements AfterViewInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  }
  @Input() contributionCount: number | undefined;
  @Input() day: any;
  @ViewChild('colorEle') colorEle : any;
  colorCollection = [
    {
      range : [0,0], color: '#EBEDF0'
    },
    {
      range : [1,2], color: '#9BE9A8'
    },
    {
      range : [3,4], color: '#40C463'
    },
    {
      range : [4,5], color: '#30A14E'
    },
    {
      range : [5,10], color: '#216E39'
    }
  ]
  ngAfterViewInit(): void {
   console.log(this.day)
   this.colorEle.nativeElement.style.backgroundColor = this.getBackgroundColor(this.day.contibutionsCount);
  }
  getBackgroundColor(range: number){
    let color = null
    this.colorCollection.forEach((colorRange)=>{
      if(range> colorRange.range[0] && range < colorRange.range[1]){
        color = colorRange.color;
      }
    })
    return color;
  }
}
