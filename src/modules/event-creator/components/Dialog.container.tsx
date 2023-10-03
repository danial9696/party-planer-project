import { Dialog } from '@radix-ui/themes';
import Creator from './Creator';
import useDialog from '@lib/hooks';
import { DialogContainerProps } from './types';

function DialogContainer(props: DialogContainerProps) {
  const { dialogOpen, handleClose } = useDialog(props.open, props.closeHandler);

  return (
    <Dialog.Root open={dialogOpen}>
      <Dialog.Content>
        <Creator model={[]} />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default DialogContainer;
