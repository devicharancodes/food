import React from 'react';

function Items({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div class='card' style={{ width: '18rem' }}>
          <img
            class='card-img-top'
            src={data.recipe.image}
            alt='card image cap'
          />
          <div className='card-body'>
            <center>
              <h5 class='card-title'>{data.recipe.label}</h5>
              <p>total calories : {Math.round(data.recipe.calories)}</p>
              <a href='#home' class='btn btn-primary'>
                Buy
              </a>
            </center>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
