import { Box, Card, Text } from '@radix-ui/themes';
import Props from './types';

function Showcase(props: Props) {
  return (
    <Card>
      <Text as='p' size='2' weight='bold'>
        {props.title}
      </Text>

      <Text as='p' size='1' weight='light'>
        {props.detail}
      </Text>

      <Box></Box>
    </Card>
  );
}

export default Showcase;
