import type { ITouchEvent } from '@tarojs/components';
import { Button } from '@tarojs/components';
import classnames from 'classnames';
import React, { useRef } from 'react';
import type { TaroButtonProps } from './index.d';

const TaroButton: React.FC<TaroButtonProps> = (props) => {
  const { children, delay = 350, onClick, className, ...rest } = props;

  const timer = useRef<NodeJS.Timeout>();

  const handler = (event: ITouchEvent) => {
    if (!delay) return onClick?.(event);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onClick?.(event);
    }, delay);
  };

  return (
    <Button {...rest} onClick={handler} className={classnames(className)}>
      {children}
    </Button>
  );
};

export default TaroButton;
