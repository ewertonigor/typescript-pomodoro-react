import React from 'react';
import { useInterval } from '../hooks/use-interval';

type Props = {
  defaultPomodoroTime: number;
};

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá Mundo {mainTime}</div>;
}
