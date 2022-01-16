import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const redirect = (path) => {
    history.push(path);
  };
  return (
    <div className="header">
      <div style={{cursor: 'pointer'}} onClick={_ => redirect('/')}>SANTUY NO LIFE</div>
      <div className='menu'>
        <div onClick={_ => redirect('intro')}>TEAM</div>
        <div onClick={_ => redirect('login')}>LOGIN</div>
        <div onClick={_ => redirect('signup')}>SIGNUP</div>
      </div>
    </div>
  )
}
