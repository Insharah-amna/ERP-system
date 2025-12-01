import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"
import CustomButton from "../Button"

export function CustomDialog({
  buttonText = 'Open Dialog',
  dialogTitle = 'Dialog Title',
  fields,
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <CustomButton
            buttonText={buttonText}
            className={'bg-teal-600 rounded-sm'}
          />
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{ dialogTitle }</DialogTitle>
          </DialogHeader>

          {fields}

          <DialogFooter className={'mt-4'}>
            <DialogClose asChild>
              <CustomButton
                buttonText={'Cancel'}
                variant="outline"
                className={'w-1/2'} />
            </DialogClose>

            <CustomButton
              buttonText={'Save'}
              type="submit"
              className={'hover:bg-teal-700 w-1/2'} />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
