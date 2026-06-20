import style from '../ButtonGroup.module.css'
import classNames from 'classnames/bind';
import {useState} from "react";


export default function ButtonGroup({initialButtons}: {
  initialButtons: { id: number; label: string; icon: string; isDisabled: boolean; }[];
}) {

  const cx = classNames.bind(style);

  const activeState: { [key: string]: boolean } = {}
  initialButtons.forEach((item) => {
    activeState[item.id] = false;
  })

  const [initActive, setInitActive] = useState(activeState);

  const handleActiveToggle = (id: number) => {
    if(id === 3) return
    setInitActive((initActive) => ({
      ...initActive,
      [id]: !initActive[id]
    }))
  }

  const count = Object.values(initActive).filter(Boolean).length;
  console.log(count);

  const handleReset = () => {
    const resetState: { [key: string]: boolean } = {}
    initialButtons.forEach((item) => {
      resetState[item.id] = false;
    })
    setInitActive(resetState);
  }


  return (
    <>
      <h1>Active Count: {count}</h1>
      {
        initialButtons.map((btn) =>
          <button key={btn.id} className={cx(
            "button",
            {
              "disabled": btn.isDisabled,
              "highlight": btn.id === 2,
              "active": initActive[btn.id],
            }
          )}
            onClick={() => handleActiveToggle(btn.id)}
          >{btn.icon} {btn.label}</button>)
      }
      <button className={cx("button")} onClick={handleReset}>reset</button>
    </>
  );
};