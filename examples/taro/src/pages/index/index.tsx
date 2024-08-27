import {
  Base64,
  Builder,
  classnames,
  DateTime,
  debounce,
  Formatter,
  Getter,
  HttpStatus,
  Logger,
  Qs,
  throttle,
  URIBuilder,
  Validator,
  Storage as WebStorage,
} from "@docker-es/hub";
import { Loading, Storage } from "@docker-es/taro";
import { Button } from "@docker-es/taro-ui";
import { Button as TaroButton, Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [text, setText] = useState("-");
  const [
    { base, uri, url, code, str, random, currency, time, storage, isEmpty },
  ] = useState(() => {
    return {
      base: Base64.encode("Hello, world!"),
      uri: Builder.URI({
        protocol: "https",
        hostname: "js.org",
        pathname: "/guide",
      }),
      url: URIBuilder.URI({
        protocol: "https",
        hostname: "js.org",
        pathname: "/guide",
      }),
      time: DateTime().format(DateTime.$formats.ymdhms),
      code: HttpStatus.OK,
      storage: WebStorage.count(),
      isEmpty: `${Validator.isEmpty(0)}`,
      str: Qs.stringify({ name: "Qs" }),
      random: Getter.random(1, 10),
      currency: Formatter.currency({ number: Getter.round(298237.58734) }),
    };
  });
  useLoad(() => {
    Logger.warn("信息:", "loading...");
    Loading.start();

    const txt = Storage.get("text");
    if (txt) {
      setText(txt);
    } else {
      const res = Storage.set("text", "Hello world!");
      if (res) {
        setText(Storage.get("text"));
      }
    }
    setTimeout(() => {
      Loading.end();
    }, 1000);
  });

  const handleDebounce = debounce(() => {
    Logger.success("信息:", "debounce fn click.");
  }, 500);

  const handleThrottle = throttle(() => {
    Logger.success("信息:", "throttle fn click.");
  }, 1000);

  return (
    <View
      className={classnames([
        "index",
        { main: true, foo: false },
        ["container"],
      ])}
    >
      <Text>{text}</Text>
      <View>time: {time}</View>
      <View>base: {base}</View>
      <View>decode base: {Base64.decode(base)}</View>
      <View>uri: {uri}</View>
      <View>url: {url}</View>
      <View>code: {code}</View>
      <View>str: {str}</View>
      <View>random: {random}</View>
      <View>isEmpty: {isEmpty}</View>
      <View>storage: {storage}</View>
      <View>currency: {currency}</View>
      <TaroButton onClick={handleDebounce}>debounce fn</TaroButton>
      <TaroButton onClick={handleThrottle}>throttle fn</TaroButton>
      <Button
        onClick={() => {
          Logger.success("信息:", "debounce button click.");
        }}
      >
        debounce button
      </Button>
    </View>
  );
}
