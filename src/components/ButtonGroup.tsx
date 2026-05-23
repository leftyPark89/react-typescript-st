import styles from '../ButtonGroup.module.css';
import classNames from 'classnames/bind';
import {useState} from "react";

export default function ButtonGroup({initialButtons}: {
  initialButtons: {
    id: number;
    label: string;
    icon: string;
    isDisabled: boolean;
  }[];
}) {
  const cx = classNames.bind(styles);

  const initActiveState: { [key: string]: boolean } = {};
  initialButtons.forEach((btn) => {
    initActiveState[btn.id] = false;
  })

  const [isActive, setIsActive] = useState(initActiveState);
  const handleToggle = (id: number) => {
    console.log(id)
    if (id === 3) return;
    setIsActive((isActive) => ({
      ...isActive,
      [id]: !isActive[id]
    }))
  }

  const handleResetBtn = () => {
    const resetActiveState: { [key: string]: boolean } = {};
    initialButtons.forEach((btn) => {
      resetActiveState[btn.id] = false;
    });
    setIsActive(resetActiveState);
  }

  const activeCnt = Object.values(isActive).filter(Boolean).length;
  console.log("activeCnt", activeCnt);

  return (
    <>
      <h1>Active Count : {activeCnt}</h1>
      {
        initialButtons.map((btn) =>
          <button key={btn.id}
                  className={cx("button",
                    {
                      "disabled": btn.isDisabled,
                      "active": isActive[btn.id],
                      "highlight": btn.id === 2
                    },
                  )}
                  onClick={() => handleToggle(btn.id)}
          >{btn.label} {btn.icon}</button>)
      }
      <button className={cx("button")} onClick={handleResetBtn}>reset</button>
    </>
  );
};