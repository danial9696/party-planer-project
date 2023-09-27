import { Button } from '@radix-ui/themes';
import styles from '../../styles/scss/06-components/box/box.module.scss';
import Props from './types';

function Box(props: Props) {
  return (
    <div className={styles['c-box']}>
      <div className='c-box__wrapper'>
        <h5 className={styles['c-box__title']}>{props.title}</h5>

        {props.subtitle ? <h6 className={styles['c-box__subtitle']}>{props.subtitle}</h6> : null}

        <Button onClick={props.button.onClick} type='button'>
          {props.button.text}
        </Button>
      </div>
    </div>
  );
}

export default Box;
