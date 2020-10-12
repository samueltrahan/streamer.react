import React, {useState} from "react";
import { STREAMERS } from '../../constants';

export default function Tweets({streamer}) {

  

  return (
    <div>
      <a
        class="twitter-timeline"
        href={`https://twitter.com/?${STREAMERS}ref_src=twsrc%5Etfw`}
      >
        Stream of Tweets
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
       ></script>
    </div>
  );
}
