import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public result = '';
  public operator = '';
  public num1: number;
  public num2: number;
  constructor() { }

  ngOnInit() {
  }

  readInput(keyId: string) {
    console.log(keyId);
    if (keyId === '/' || keyId === 'x' || keyId === '-' || keyId === '+') {
      console.log(keyId);
      this.num1 = parseFloat(this.result);
      this.operator = keyId
    }

    this.result += keyId;
    console.log('result:' + this.result);
  }

  showResults() {
    // Show basic calculation
    console.log('num1:'+ this.num1);
    this.num2 = parseFloat(this.result.split(this.operator)[1]);
    console.log('num2:'+ this.num2);


    if (this.operator === '/') {
      this.result = (this.num1 / this.num2).toString();
      console.log('answer:' + this.result);
    } else if (this.operator === 'x') {
      this.result = (this.num1 * this.num2).toString();
      console.log('answer:' + this.result);
    } else if (this.operator === '-') {
      this.result = (this.num1 - this.num2).toString();
      console.log('answer:' + this.result);
    } else if (this.operator === '+') {
      this.result = (this.num1 + this.num2).toString();
      console.log('answer:' + this.result);
    } else {
      this.result = 'Error operation';
    }
    return this.result;
  }

  allClear() {
    this.result = '';
  }

}
