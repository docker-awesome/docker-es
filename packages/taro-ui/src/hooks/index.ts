import Taro from '@tarojs/taro';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

export const useSystemInfo = () => {
  const [state, setstate] = useState<{
    ios?: boolean;
    paddingRight?: string;
    leftWidth?: string;
    safeAreaTop?: CSSProperties;
    paddingTop?: any;
  }>({
    ios: undefined,
    paddingRight: undefined,
    leftWidth: undefined,
    safeAreaTop: undefined,
    paddingTop: undefined
  });

  useEffect(() => {
    const rect = Taro.getMenuButtonBoundingClientRect();
    // console.debug("🎯 >>> rect:", rect);

    Taro.getSystemInfo({
      success(res) {
        // console.debug("🎯 >>> res:", res);
        const { platform, windowWidth, safeArea = { top: 0 } } = res || {};
        const isAndroid = platform === 'android';
        const isDevtools = platform === 'devtools';

        setstate({
          ios: !isAndroid,
          paddingRight: Taro.pxTransform(windowWidth - rect.left),
          leftWidth: `width: ${Taro.pxTransform(windowWidth - rect.left)}`,
          paddingTop: Taro.pxTransform(safeArea.top),
          safeAreaTop:
            isDevtools || isAndroid
              ? {
                  height: `calc(var(--height) + ${Taro.pxTransform(
                    safeArea.top
                  )})`,
                  paddingTop: Taro.pxTransform(safeArea.top)
                }
              : {}
        });
      }
    });

    return () => {};
  }, []);

  return state;
};

export class Formatter {
  static digit = (number: number, options?: Intl.NumberFormatOptions) => {
    const { maximumFractionDigits = 2, minimumFractionDigits = 2 } =
      options || {};
    return new Intl.NumberFormat('en-us', {
      ...(options || {}),
      maximumFractionDigits:
        Math.max(minimumFractionDigits, maximumFractionDigits) || 2,
      minimumFractionDigits:
        Math.min(minimumFractionDigits, maximumFractionDigits) || 2
    }).format(number);
  };
}
