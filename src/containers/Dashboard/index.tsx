/*
 * Dashboard --> "/"
 *
 */

import React, { useState, useEffect, useReducer } from 'react';
import { RouteProps } from 'react-router';
import axios, { AxiosPromise } from 'axios';
import reducer, { State } from './reducer';
import utils from '../../utils';

// Components
import Button from '../../components/Button';
import H1 from '../../components/H1';
import HistoryTable from '../../components/HistoryTable';
import Section from './Section';

const APIURL = '/api/getHeader?url='; // todo use a config file
const initialState: State[] = [];
let reqId = 0; // Todo --> use crypto rand instead

export default function Dashboard(props: RouteProps) {
  const [url, setUrl] = useState('');
  const [analysis, dispatch] = useReducer(reducer, initialState);

  // Retrieve HTTP Header using axios
  const getHeader = async (uri: string) => {
    let curId = reqId++;
    dispatch({ reqId: curId, reqUrl: uri, type: 'PENDING' });
    try {
      const axiosPromise: AxiosPromise<any> = axios.get(window.location.origin + APIURL + uri);
      const result = await axiosPromise;
      dispatch({ reqId: curId, type: 'SUCCESS', payload: result.data });
    } catch (error) {
      dispatch({ reqId: curId, type: 'ERROR' });
    }
  };

  // When url param path is specified, submit the form to run service status on load
  useEffect(() => {
    if (props.location) {
      const urlSearch: any = new URLSearchParams(props.location!.search);
      const curUrl: string = urlSearch.get('url') || ' ';
      if (utils.isURL(curUrl)) getHeader(curUrl);
    }
  }, []);

  const onAddUrl = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    getHeader(url);
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
        <HistoryTable {...analysis} />
      </Section>
    </article>
  );
}
