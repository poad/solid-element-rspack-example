/* eslint-disable @typescript-eslint/no-namespace */
import { createSignal } from 'solid-js';

import { register, compose } from 'component-register';
import { withSolid } from 'solid-element';

import style from './index.css';

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <style>{style}</style>
      <button
        onClick={() => setCount((prev) => (prev > 0 ? count() - 1 : prev))}
      >
        -
      </button>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
};

 
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "solid-counter": Record<string, never>;
    }
  }
}

compose(
  register('solid-counter'),
  withSolid,
)(Counter);
