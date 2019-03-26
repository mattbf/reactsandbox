import { useState } from 'react';

 const useInput = ()  => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};

export default useInput
