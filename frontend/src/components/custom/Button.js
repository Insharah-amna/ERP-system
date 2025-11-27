import { Button } from "@/components/ui/button";

const CustomButton = ({buttonText, className}) => {
  return (
     <Button className={`cursor-pointer ${className}`}>
        {buttonText}
     </Button>
  )
}

export default CustomButton
