import React from 'react';
import { Link } from 'react-router-dom'
import Err from '../Assets/error.jpg'

const Error = () => {
  return (<>
  <div 
  style={{
          backgroundImage: `url(${Err})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
  }}
  >
        <div className="rounded-lg shadow-md w-96 p-6 text-center text-white">
      <div className="m-2 p-2  text-white font-serif font-extrabold text-7xl">Oops!
      </div><br />
      <p>404 - Page not found</p><br />
      <p>The page you are looking for might have been removed, had its name changes or temporarily unavailable.</p><br />
      <Link to="/">
                <button type="button" className=" text-white py-2 px-4 border hover:bg-red-200 transition duration-300">Back to Home</button>
                </Link>
      </div>
    
    </div>
    </>
  );
}

export default Error;
