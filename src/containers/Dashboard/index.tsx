/*
 * Dashboard --> "/"
 *
 */

import React, { useState, useEffect } from 'react';
import { RouteProps } from 'react-router';

// Components
import Button from '../../components/Button';
import H1 from '../../components/H1';
import HistoryTable from '../../components/HistoryTable';
import Section from './Section';

// Helpers
import utils from '../../utils';

export default function Dashboard(props: RouteProps) {
  const [url, setUrl] = useState('');

  // When url param path is specified, submit the form to run service status on load
  useEffect(() => {
    if (props.location) {
      const urlSearch: any = new URLSearchParams(props.location.search);
      const curUrl: string = urlSearch.get('url') || ' ';
      if (utils.isURL(curUrl)) alert("You are submitting " + curUrl);
    }
  }, []);

  const onAddUrl = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    alert("You are submitting " + url);
  }

  // Validate url
  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidUrl: Boolean = utils.isURL(e.target.value);
    if (isValidUrl) setUrl(e.target.value);
    else setUrl('');
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

          <Button label="LAUNCH ANALYSIS" onClick={onAddUrl} disabled={!url}/>
        </form>
      </Section>

      <Section>
        <H1>HISTORY</H1>
        <HistoryTable />
      </Section>
    </article>
  );
}
