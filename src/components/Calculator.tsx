import CalculatorButton from "./CalculatorButton.tsx";
import {useState} from "react";


const performCalculator = ((
  prev: number,
  current: number,
  operator: string
) => {
  switch (operator) {
    case "+":
      console.log("++++++++++++")
      return prev + current;
    case "*":
      return prev * current;
    case "-":
      return prev - current;
    case "/":
      return prev / current;
    default:
      return current;
  }
});

const initState: CalculatorState = {
  currentNumber: "0", // 현재 입력/표시 되는 숫자
  previousNumber: "", // 이전에 입력된 숫자
  operation: null, // 현재 선태된 연산자
  isNewNumber: true // 새로운 숫자 입력 여부
}
export default function Calculator() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(initState);

  const handleClear = () => {
    setCalculatorState(initState);
  };

  const handleOperator = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    const operator = e.currentTarget.value;
    setCalculatorState((calculatorState) => {
      if(calculatorState.currentNumber === "" && operator) return calculatorState;

      const current = parseFloat(calculatorState.currentNumber);

      if (calculatorState.operation && calculatorState.previousNumber) {
        const prev = parseFloat(calculatorState.previousNumber);
        const result = performCalculator(prev, current, calculatorState.operation);
        // const result = performCalculator(prev, current, operator);
        console.log("계산 결과 : ", result);

        return operator === "=" ? {
          currentNumber: result.toString(),
          previousNumber: "",
          operation: null,
          isNewNumber: true,
        } : {
          currentNumber: "",
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true,
        }

      } else if (operator === "=") {
        return {...calculatorState, isNewNumber: true};
      } else {
        return {
          currentNumber: "",
          previousNumber: current.toString(),
          operation: operator,
          isNewNumber: true,
        };
      }

    })
  }

  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setCalculatorState(calculatorState => ({
      ...calculatorState,
      currentNumber: calculatorState.isNewNumber
        ? value
        : calculatorState.currentNumber + value,
      isNewNumber: false,
    }))

  }
  const handleDot = () => {
    setCalculatorState(calculatorState => {
      if (calculatorState.currentNumber.includes(".")) return calculatorState;
      return {
        ...calculatorState,
        currentNumber: calculatorState.currentNumber + ".",
        isNewNumber: false,
      };
    })
  }

  const buttonConfig = [
    {value: "C", classname: "calc-clear", onClick: handleClear},
    {value: "/", classname: "calc-operator", onClick: handleOperator},
    {value: "1", classname: "calc-num", onClick: handleNum},
    {value: "2", classname: "calc-num", onClick: handleNum},
    {value: "3", classname: "calc-num", onClick: handleNum},
    {value: "*", classname: "calc-operator", onClick: handleOperator},
    {value: "4", classname: "calc-num", onClick: handleNum},
    {value: "5", classname: "calc-num", onClick: handleNum},
    {value: "6", classname: "calc-num", onClick: handleNum},
    {value: "+", classname: "calc-operator", onClick: handleOperator},
    {value: "7", classname: "calc-num", onClick: handleNum},
    {value: "8", classname: "calc-num", onClick: handleNum},
    {value: "9", classname: "calc-num", onClick: handleNum},
    {value: "-", classname: "calc-operator", onClick: handleOperator},
    {value: ".", classname: "calc-dot", onClick: handleDot},
    {value: "0", classname: "calc-num", onClick: handleNum},
    {value: "=", classname: "calc-result", onClick: handleOperator},
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] flex justify-center items-center h-screen">
        <article className="w-[282px] border border-solid border-[#333] bg-[#ccc] p-[4px]">
          <form className="grid grid-cols-[repeat(4,65px)] auto-rows-[65px] gap-[4px]">
            <input type="text" name="output" className="calc-input" readOnly value={calculatorState.currentNumber}/>
            {
              buttonConfig.map((button) => (
                <CalculatorButton key={button.value} {...button}/>
              ))
            }

          </form>
        </article>
      </div>
    </>
  );
};