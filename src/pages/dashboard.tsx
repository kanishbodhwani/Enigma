import {useState} from 'react';
import Feed from '../components/Feed/Feed';
import Sidebar from '../components/Sidebar/Sidebar';
import Spaces from '../components/Spaces/Spaces';


export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Feed />
      <Spaces />
    </div>
  )
}