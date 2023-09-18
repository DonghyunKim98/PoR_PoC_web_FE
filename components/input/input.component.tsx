import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { className } = props;

  return (
    <input
      className={`bg-opacity-[0.15] bg-white rounded px-6 py-3 prose prose-body1 text-white max-w-[340px] ${className}`}
      {...props}
    />
  );
};
