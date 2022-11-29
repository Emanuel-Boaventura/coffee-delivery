import styles from './Coffees.module.scss';
import { useState, useRef } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
} from '@mantine/core';

const Coffes = () => {
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();
  return (
    <main className={styles.main}>
      <h2 className={styles.sectionTitle}>Nossos cafés</h2>

      <div className={styles.card}>
        <div className={styles.cardText}>
          <span>TRADICIONAL</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>
        <div className={styles.cardPrice}>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <Group className={styles.groupBtn} spacing={5}>
            <ActionIcon
              size={32}
              variant='default'
              className={styles.minusBtn}
              onClick={() => handlers.current && handlers.current.decrement()}
            >
              –
            </ActionIcon>

            <NumberInput
              className={styles.numberInput}
              hideControls
              value={value}
              onChange={(val: number) => setValue(val)}
              handlersRef={handlers}
              type='number'
              min={0}
              max={50}
              step={1}
            />

            <ActionIcon
              className={styles.plusBtn}
              size={32}
              variant='default'
              onClick={() => handlers.current && handlers.current.increment()}
            >
              +
            </ActionIcon>
          </Group>
        </div>
      </div>
    </main>
  );
};

export default Coffes;
