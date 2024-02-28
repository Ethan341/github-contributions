import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MonthComponent } from "../components/month/month.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MonthComponent]
})
export class AppComponent {
  title = 'angular-webapp';

  monthWiseData = [
    {monthName: 'January',
    contibutions: [[{date:1 , contibutionsCount: 3}, {date:2 , contibutionsCount: 8}, {date:3 , contibutionsCount: 1},{date:4 , contibutionsCount: 1}, {date: 5, contibutionsCount: 0}, {date:6 , contibutionsCount: 2},{date:7 , contibutionsCount: 7}],
    [{date:8 , contibutionsCount: 7}, {date:8 , contibutionsCount: 5}, {date:10 , contibutionsCount: 2},{date:11 , contibutionsCount: 2}, {date: 12, contibutionsCount: 2}, {date:13 , contibutionsCount: 7},{date:14 , contibutionsCount: 3}],
    [{date:15 , contibutionsCount: 2}, {date:16 , contibutionsCount: 1}, {date:17 , contibutionsCount: 4},{date:18 , contibutionsCount: 2}, {date: 19, contibutionsCount: 5}, {date:10 , contibutionsCount: 5},{date:21 , contibutionsCount: 7}],
    [{date:22 , contibutionsCount: 4}, {date:23 , contibutionsCount: 2}, {date:24 , contibutionsCount: 1},{date:25, contibutionsCount: 7}, {date: 26, contibutionsCount: 5}, {date:27, contibutionsCount: 7},{date:28 , contibutionsCount: 3}],
    [{date:29 , contibutionsCount: 2}, {date:30 , contibutionsCount: 7}, {date:31, contibutionsCount: 7}]]},
    {monthName: 'February',
    contibutions:[[{date:1 , contibutionsCount: 3}, {date:2 , contibutionsCount: 5}, {date:3 , contibutionsCount: 7},{date:4 , contibutionsCount: 2}, {date: 5, contibutionsCount: 1}, {date:6 , contibutionsCount: 1},{date:7 , contibutionsCount: 4}],
    [{date:8 , contibutionsCount: 2}, {date:8 , contibutionsCount: 2}, {date:10 , contibutionsCount: 0},{date:11 , contibutionsCount: 2}, {date: 12, contibutionsCount: 5}, {date:13 , contibutionsCount: 7},{date:14 , contibutionsCount: 7}],
    [{date:15 , contibutionsCount: 9}, {date:16 , contibutionsCount: 0}, {date:17 , contibutionsCount: 7},{date:18 , contibutionsCount: 0}, {date: 19, contibutionsCount: 2}, {date:10 , contibutionsCount: 6},{date:21 , contibutionsCount: 2}],
    [{date:22 , contibutionsCount: 1}, {date:23 , contibutionsCount: 5}, {date:24 , contibutionsCount: 7},{date:25, contibutionsCount: 2}, {date: 26, contibutionsCount: 5}, {date:27, contibutionsCount: 7},{date:28 , contibutionsCount: 1}],
    [{date:29 , contibutionsCount: 2}]]}
  ]
}
