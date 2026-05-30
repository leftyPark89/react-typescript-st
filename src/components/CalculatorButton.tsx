export default function CalculatorButton({
                                           value,
                                           classname,
                                           onClick
                                         }: {
  value: string;
  classname: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}) {
  return (
    <>
      <input type="button" className={classname} value={value} onClick={onClick}/>
    </>
  );
};