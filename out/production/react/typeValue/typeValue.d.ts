interface ValueType {
  numberValue: number,
  stringValue: string,
  booleanValue: true | false,
  arrayValue: [],
  objectValue: { name:string, age:number },
  handleClick: () =>{}
}

type CalculatorState = {
  currentNumber: string;
  previousNumber: string;
  operation: null | string;
  isNewNumber: boolean;
}