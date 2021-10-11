import { useState } from 'react';

export default function UseIndex() {
  const [cep, setCep] = useState('');

  return { cep, setCep };
}
