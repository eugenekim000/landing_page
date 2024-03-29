import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Twitter extends React.Component {
    render(){
        return(
                <div id="twitterContainer">
                    <h1>News</h1>
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="lexi_verse"
                        options={{width: 470, height: 600}}
                     />
                </div>
        );
    }

}

export default Twitter; 