import React, {useState} from "react";
import { STREAMERS } from '../../constants';
import {Timeline} from 'react-twitter-widgets'

export default function Tweets({streamer}) {

 

  return (
    <div className="tweets">
    <Timeline 
    dataSource={{
      sourceType: 'profile',
      screenName: `${streamer}`
    }}
    options={{
      width: '40vw',
      height: '1000'
    }}
    />
     
    </div>
  );
}
