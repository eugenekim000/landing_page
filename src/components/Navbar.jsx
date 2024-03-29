import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar">
                <AnchorLink href="">
                    <p className='inline-block-element'>Home</p>
                </AnchorLink>
                <AnchorLink href="#qrs">
                    <p className='inline-block-element'>Downloads</p>
                    </AnchorLink>
                <AnchorLink href="#twitterContainer">
                    <p className='inline-block-element'>News</p>
                </AnchorLink>
                <AnchorLink href="#videos">
                    <p className='inline-block-element'>About</p>
                </AnchorLink>
                <AnchorLink href="#about">
                    <p className='inline-block-element'>Team</p>
                </AnchorLink>
            </div>
        );
    }
}

export default Navbar;