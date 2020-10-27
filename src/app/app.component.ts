import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'test2';

    public firstOperator: string;
    public secondOperator: string;
    public firstNumber: number;
    public secondNumber: number;
    public errorMsg: string;
    public result: boolean;

    onClick(): void {
        this.result = !this.result;

        let result: boolean;

        if (!this.secondOperator) {
           this.errorMsg = 'Отсутствует второй оператор';
        } else if ((this.firstNumber > 2 || this.firstNumber < 0) || (this.secondNumber > 2 || this.secondNumber < 0)) {
            this.errorMsg = 'Неправильно число';
        } else {
            this.errorMsg = null;
        }
        switch (this.secondOperator) {
            case '&&':
                result = Boolean(this.firstNumber && this.secondNumber);
                break;
            case '||':
                result = Boolean(this.firstNumber || this.secondNumber);
                break;
        }

        switch (this.firstOperator) {
            case '!':
                this.result = !result;
                break;
            default:
                this.result = result;
                break;
        }
    }
}
