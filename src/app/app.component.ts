import { Component } from '@angular/core';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initialAmount: number = 1000;
  months: number = 12;
  result: any;

  constructor(private investmentService: InvestmentService) {}

  calculate() {
    this.investmentService.calculateInvestment(this.initialAmount, this.months)
      .subscribe(response => {
        this.result = {
          grossResult: response.GrossAmount,
          netResult: response.NetAmount
        };
      }, error => {
        console.error('Error calculating investment', error);
      });
  }
}
