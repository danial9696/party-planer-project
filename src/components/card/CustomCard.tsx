import React from 'react';
// import styles from '@styles/06-components/cards/card.module.scss';
import { Card, Flex, Text } from '@radix-ui/themes';
import Props from './types';

function CustomCard(props: Props) {
  const { type = 'normal' } = props;

  return (
    <Card>
      <Flex direction='column' align={type === 'normal' ? 'start' : 'center'}>
        <i color='#ccc' className='uil uil-user-circle'></i>

        <Text as='p' size='2' weight='bold'>
          {props.title}
        </Text>

        <Text as='span' size='2' color='gray'>
          {props.date}
        </Text>

        <time>{props.time}</time>
      </Flex>
    </Card>
  );
}

export default CustomCard;
