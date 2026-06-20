// import ChildA from "./ChildA.tsx";
// import ChildB from "./ChildB.tsx";
import React, {Suspense, useState} from "react";
import {ErrorBoundary} from "react-error-boundary";

const ChildA = React.lazy(() => import("./ChildA.tsx"))
const ChildB = React.lazy(() => import("./ChildB.tsx"))

export default function TestApp() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>toggle</button>
      {isShow && (
        <>
          <Suspense fallback={<h1>Child A loading ...</h1>}>
            <ChildA/>
          </Suspense>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<h1>Child B loading ...</h1>}>
              <ChildB/>
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </>
  );
};