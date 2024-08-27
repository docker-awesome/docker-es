import Taro from "@tarojs/taro";

class Loading {
  static #count = 0;

  static start(args?: { title?: string; mask?: boolean }) {
    Loading.#count++;
    const options = typeof args === "object" ? args : {};
    Taro.showLoading({
      title: "加载中",
      mask: true,
      ...options,
    });
  }

  static end() {
    if (Loading.#count > 0) Loading.#count--;
    if (Loading.#count === 0) Taro.hideLoading();
  }

  static reset() {
    Loading.#count = 0;
    Taro.hideLoading();
  }
}

export default Loading;
