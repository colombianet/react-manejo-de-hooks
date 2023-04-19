import { memo } from 'react';

export const CounterMemo = memo(({ value }) => {
    console.log('object')
  return (
    <small>{ value }</small>
  )
});
