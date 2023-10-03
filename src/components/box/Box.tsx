import { Button } from '@radix-ui/themes';
import styles from '../../styles/scss/06-components/box/box.module.scss';
import Props from './types';

function Box(props: Props) {
  return (
    <div className={styles['c-box']}>
      <div className='c-box__wrapper'>
        <p className={styles['c-box__title']}>{props.title}</p>

        {props.subtitle ? <p className={styles['c-box__subtitle']}>{props.subtitle}</p> : null}

        <Button onClick={props.button.onClick} type='button'>
          {props.button.text}
        </Button>
      </div>
    </div>
  );
}

export default Box;
