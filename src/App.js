import React, { useEffect, useMemo, useState } from 'react';
import { sunRiseAPI } from './lib/api';

function App() {
  const [sunriseAPIState, setSunriseAPIState] = useState({
    value: null,
    isLoading: false,
    error: null
  });
  useEffect(() => {
    setSunriseAPIState(state => ({ ...state, isLoading: true }));
    sunRiseAPI
      .getSunriseDate()
      .then(data =>
        setSunriseAPIState({
          value: data.results.sunrise,
          isLoading: false,
          error: null
        })
      )
      .catch(e =>
        setSunriseAPIState({ value: null, isLoading: false, error: e })
      );
  }, []);

  const date = useMemo(
    () => new Date(sunriseAPIState.value),
    [sunriseAPIState]
  );

  return (
    <div className='App'>
      {sunriseAPIState.isLoading
        ? '시간 정보를 불러오는 중...'
        : date.toLocaleTimeString()}
    </div>
  );
}

export default App;
