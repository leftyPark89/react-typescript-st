import StopWatch from "./StopWatch.tsx";

export default function CountApp() {
  // const [isShow, setIsShow] = useState(false);
  return (
    <>
      {/*<button onClick={() => setIsShow((isShow) => !isShow)}>노출 변경</button>*/}
      {/*{isShow && <Count/>}*/}
      <StopWatch></StopWatch>
    </>
  );
};