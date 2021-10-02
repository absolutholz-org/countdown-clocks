import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useIndexedDBStore } from 'use-indexeddb';
import uniqid from 'uniqid';

import dbConfig from '../../../dbConfig';
import CountdownList from '../../CountdownList/CountdownList';
import type { ICountdown } from '../../CountdownListTeaser';
import CountdownForm from '../../CountdownForm';
import { ICountdownFormData } from '../../CountdownForm';

function Home({ ...props }): JSX.Element {
  const [countdowns, setCountdowns] = useState<ICountdown[]>([]);
  const history = useHistory();

  // https://github.com/hc-oss/use-indexeddb
  const { add, getAll } = useIndexedDBStore(dbConfig.stores[0].name);
  const elCreateCountdownDialog = useRef<HTMLDialogElement>(null);

  const handleCreateClick = () => {
    if (elCreateCountdownDialog.current) {
      // @ts-ignore
      elCreateCountdownDialog.current.showModal();
    }
  };

  const handleCountdownCreation = ({
    name,
    targetDate,
    startDate,
  }: ICountdownFormData) => {
    const newCountdown = {
      uid: uniqid(),
      name,
      targetDate,
      startDate,
    };
    console.log(newCountdown);
    add(newCountdown)
      .then((d) => {
        console.log(`Added countdown with ID ${d}`);
        history.push(`/countdown/${newCountdown.uid}`);
      })
      .catch(console.error);
    if (elCreateCountdownDialog.current) {
      // @ts-ignore
      elCreateCountdownDialog.current.close();
    }
  };

  useEffect(() => {
    getAll()
      .then((data) => {
        console.log({ data });
        // @ts-ignore
        setCountdowns(data);
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div>
        <button onClick={handleCreateClick}>Create a countdown</button>
      </div>
      {countdowns.length > 0 && <CountdownList countdowns={countdowns} />}
      <dialog ref={elCreateCountdownDialog}>
        <CountdownForm onSubmit={handleCountdownCreation} />
      </dialog>
    </main>
  );
}

export default Home;
