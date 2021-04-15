import { useContext } from 'react';

// CONTEXT
import ShowsContext from '../context/shows/showsContext';

// COMPONENTS
import Searchbar from '../components/Searchbar';
import ListItem from '../components/ListItem';

const Homepage = () => {
  const { loading, shows } = useContext(ShowsContext);
  return (
    <div className='homepage'>
      <Searchbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="homepage__list">
          {shows.map(item => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : 'https://bitsofco.de/content/images/2018/12/broken-1.png'
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : 'No Rating'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
