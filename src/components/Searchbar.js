import { useState, useContext } from 'react';

// CONTEXT
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';

// COMPOMENTS
import Alert from './Alert';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchShows } = useContext(ShowsContext);

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = e => {
    e.preventDefault();

    if (searchTerm === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchShows(searchTerm);
    }
  };
  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

      <form className='searchbar__form'>
        <input
          type='text'
          placeholder='Search Your Favorite TV Shows'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-block' onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
