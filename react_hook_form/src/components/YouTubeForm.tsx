import React from 'react'

export const YouTubeForm = () => {
  return (
   <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='chennel'>Chennel</label>
        <input type='text' id='chennel' name='chennel' />

        <button>Submit</button>
      </form>
   </div>
  );
};

export default YouTubeForm