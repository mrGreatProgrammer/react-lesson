import React from "react";
import { PropsApp } from "../../types/app";

const IsFive = React.memo(({ value }: PropsApp) => {
  const getResult = React.useMemo(() => {
    let i = 0;
    while (i < 600000) i++;
    return value === 5 ? "Thats five" : "Thats not five";
  }, [value]);

  return <div>{getResult}</div>;
}, (prevProps: Readonly<PropsApp>, nextProps: Readonly<PropsApp>)=>{
    console.log("shouldComponentUpdate", {prevProps, nextProps});
    return false

});

export default IsFive;
