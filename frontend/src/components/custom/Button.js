import { Button } from '@/components/ui/button';

const CustomButton = ({ buttonText, className, type = 'button', onClick }) => {
  return (
    <Button className={`cursor-pointer ${className}`} type={type} onClick={ onClick}>
      {buttonText}
    </Button>
  );
};

export default CustomButton;
