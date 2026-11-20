import style from './index.css';

import { withSolid } from '@solidjs/element';
import { register, compose } from 'component-register';
/* eslint-disable @typescript-eslint/no-namespace */
import { createSignal } from 'solid-js';

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <style>{style}</style>
      <button onClick={() => setCount((prev) => (prev > 0 ? count() - 1 : prev))}>-</button>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
};

declare module '@solidjs/web' {
  namespace JSX {
    interface IntrinsicElements {
      'solid-counter': HTMLAttributes<HTMLElement>;
    }
  }
}

compose(register('solid-counter'), withSolid)(Counter);
