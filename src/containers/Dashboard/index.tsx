/*
 * Dashboard --> "/"
 *
 */

import React, { useState } from 'react';

// Components
import Button from '../../components/Button';
import H1 from '../../components/H1';
import HistoryTable from '../../components/HistoryTable';
import Section from './Section';


export default function Dashboard() {
  const [url, setUrl] = useState('');

  const onAddUrl = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    alert("You are submitting " + url);
  }

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set null url if not valid
    setUrl(e.target.value);
  }

  return (
    <article>
      <Section>
        <H1>HTTP HEADER DEBUGGER</H1>
        <form className="App-form">
          <h2>Url to check</h2>
          <label htmlFor="url">
            <input  id="url" type="text" placeholder="https://exemple.io"
                    onChange={onChangeUrl} />
          </label>

          <Button label="LAUNCH ANALYSIS" onClick={onAddUrl} />
        </form>
      </Section>

      <Section>
        <H1>HISTORY</H1>
        <HistoryTable />
      </Section>
    </article>
  );
}
