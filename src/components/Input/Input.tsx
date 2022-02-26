import React from 'react';

import styles from './Input.module.scss';

export type InputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  placeholder = 'Введите название организации',
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <input
      className={styles['search-input']}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default React.memo(Input);
