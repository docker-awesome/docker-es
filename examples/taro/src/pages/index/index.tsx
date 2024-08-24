import { Storage } from "@docker-es/taro";
import { Button } from "@docker-es/taro-ui";
import { Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [text, setText] = useState("-");
  useLoad(() => {
    console.log("Page loaded.");

    const txt = Storage.get("text");
    console.debug("🎯 >>> txt:", txt);
    if (txt) {
      setText(txt);
    } else {
      const res = Storage.set("text", "Hello world!");
      if (res) {
        setText(Storage.get("text"));
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
