import React, { useState, useEffect } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  // ↑ 给定状态的初始值(这里是0),就不需要给状态声明类型
  // 这里类型会被自动推断为number

  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    if (count > 5) {
      setText("休息一下");
    }
  }, [count])

  return (
    <>
      <p>count: {count} {text}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Hello {props.name}
      </Button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: "",
  lastName: "",
};

export default HelloHooks;
