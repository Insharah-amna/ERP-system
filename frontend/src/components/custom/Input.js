import { Input } from '../ui/input';

const CustomInput = ({
  id,
  label ='',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  defaultValue = '',
  className = '',
  alerts = { show: false, msg: '' }
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-gray-700 ml-1">
        {label}
      </label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className}`}
        defaultValue={defaultValue}
      />

      {
        alerts.show && (
          <p className="text-sm text-red-500 ml-1">{alerts.msg}</p>
        )
      }
    </div>
  );
};

export default CustomInput;
