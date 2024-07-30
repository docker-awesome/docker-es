import { useStorage } from "@docker-es/taro";
import { Button } from "@docker-es/taro-ui";
import { Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const { get, set } = useStorage();
  const [text, setText] = useState("-");
  useLoad(() => {
    console.log("Page loaded.");

    const txt = get("text");
    console.debug("🎯 >>> txt:", txt);
    if (txt) {
      setText(txt);
    } else {
      const res = set("text", "Hello world!");
      if (res) {
        setText(get("text"));
      }
    }
  });

  return (
    <View className="index">
      <Text>{text}</Text>
      <Button
        onClick={() => {
          console.log("Submit");
        }}
      >
        Submit
      </Button>
    </View>
  );
}
