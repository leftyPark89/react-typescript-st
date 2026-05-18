


interface ValueType {
  numberValue: number,
  stringValue: string,
  booleanValue: true | false,
  arrayValue: [],
  objectValue: { name:string, age:number },
  handleClick: () =>{}
}


export default function Test(props : ValueType) {
  return (
    <>
      <h1>number : {props.numberValue}</h1>
      <h1>string : {props.stringValue}</h1>
      <h1>boolean : {props.booleanValue.toString()}</h1>
      <h1>array : {props.arrayValue}</h1>
      <h1>object : {JSON.stringify(props.objectValue)}</h1>
      <h1>function : {props.handleClick.toString()}</h1>
    </>
  );
};