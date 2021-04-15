import { useState, useContext } from 'react';

// CONTEXT
import ShowContext from '../context/shows/showsContext';

// COMPOMENTS
import Alert from './Alert';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchShows } = useContext(ShowContext);
  const onSearchHandler = e => {
    e.preventDefault();
    searchShows(searchTerm);
  };
  return (
    <div className='searchbar'>
      <Alert message='Please Enter something' type='danger' />
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
