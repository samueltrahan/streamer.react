import React, {useState} from "react";
import { STREAMERS } from '../../constants';
import {Timeline} from 'react-twitter-widgets'

export default function Tweets() {

  

  return (
    <div>
    <Timeline 
    dataSource={{
      sourceType: 'profile',
      screenName: 'scump'
    }}
    options={{
      width: '40vw',
      height: '1000'
    }}
    />
     
    </div>
  );
}
