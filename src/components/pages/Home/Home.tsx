import React from 'react';

function Home({ ...props }): JSX.Element {
  const countdowns = [];

  return (
    <main>
      {countdowns.length > 0 ? (
        <div>asdf</div>
      ) : (
        <div>
          <button>Create</button>
        </div>
      )}
    </main>
  );
}

export default Home;
