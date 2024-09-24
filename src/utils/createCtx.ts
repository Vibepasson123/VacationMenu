import React, { Context } from 'react';

type CreateCtx<A> = readonly [() => A, Context<A>];

// create context with no upfront defaultValue
// without having to do undefined check all the time
const createCtx = <A>(name: string, defaultValue?: A | undefined) => {
  const ctx = React.createContext<A | undefined>(defaultValue);
  ctx.displayName = name;

  const useCtx = (): A => {
    const c = React.useContext(ctx);
    if (c === undefined) {
      throw new Error(`useCtx must be inside a ${name} Provider with a value`);
    }
    return c;
  };
  return [useCtx, ctx] as CreateCtx<A>;
};

export default createCtx;
