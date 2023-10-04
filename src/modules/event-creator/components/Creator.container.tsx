import { Dialog } from '@radix-ui/themes';
import Creator from './Creator';
import useDialog from '@lib/hooks';
import { DialogContainerProps } from './types';

function CreatorContainer(props: DialogContainerProps) {
  const { dialogOpen, handleClose } = useDialog(props.open, props.closeHandler);

  return (
    <Dialog.Root open={dialogOpen}>
      <Dialog.Content>
        <Creator />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default CreatorContainer;
