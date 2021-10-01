import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useIndexedDBStore } from 'use-indexeddb';
import { Link } from 'react-router-dom';

import CountdownClock from '../../CountdownClock/CountdownClock';

import dbConfig from '../../../dbConfig';

// https://stackoverflow.com/questions/57649904/how-to-use-typescript-with-react-router-and-match
interface RouterProps {
  // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

interface ICountdownProps extends RouteComponentProps<RouterProps> {}

function Countdown({ match, ...props }: ICountdownProps): JSX.Element {
  const { getOneByIndex } = useIndexedDBStore(dbConfig.stores[0].name);

  const [title, setTitle] = useState('');
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [startDate, setstartDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log('qwer');
    getOneByIndex('uid', match.params.id)
      .then((data) => {
        console.log({ data });
        // @ts-ignore
        setTitle(data.name);
        // @ts-ignore
        setTargetDate(data.targetDate);
        // @ts-ignore
        setstartDate(data.startDate);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>{title}</h1>
      {targetDate && startDate && (
        <CountdownClock targetDate={targetDate} startDate={startDate} />
      )}
      <Link to="/">Home</Link>
    </main>
  );
}

export default withRouter(Countdown);
