type InputProps = {
  name: string;
  value?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
};

const Input = ({
  type = "text",
  name,
  value,
  className,
  disabled,
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`flex-1 bg-transparent border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300 ${className}`}
      placeholder={`Enter ${name}`}
    />
  );
};

export default Input;
