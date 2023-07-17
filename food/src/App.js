import React, { useState } from 'react';
import Items from './Items';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = '8406c1b0';
  const YOUR_APP_KEY = 'd749df913df4738548c77966b36bb223';

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div>
      <center>
        <h1>FOOD RECEIPE APP</h1>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='enter receipe'
            value={search}
            onChange={searchHandler}
          />
          <br />
          <input type='submit' value='search' className='btn btn-primary' />
        </form>
        {data.length >= 1 ? <Items data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
