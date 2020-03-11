import { Component, OnInit } from '@angular/core';
import {HTTPService} from '../http.service';
import {DrugPoisoningMortality} from '../DrugPoisoningMortality';

@Component({
  selector: 'app-case-stats',
  templateUrl: './case-stats.component.html',
  styleUrls: ['./case-stats.component.css']
})
export class CaseStatsComponent implements OnInit {
  data: DrugPoisoningMortality[];
  constructor(private httpService: HTTPService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.httpService.getData().subscribe(tmp => this.data = tmp);
}

}
