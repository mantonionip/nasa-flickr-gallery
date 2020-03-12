import React, { Fragment } from 'react';
import Nasa from '../assets/nasaLogo.png';
import Flickr from '../assets/flickrLogo.png';

const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="header-img-container">
                    <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" title="Nasa Webpage">
                        <img src={Nasa} alt="Nasa logo" />
                    </a>
                    <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer" title="Flickr Webpage">
                        <img className="flickr-logo" src={Flickr} alt="Flickr logo" />
                    </a>
                </div>
                <h1 className="heading">Nasa Image Gallery</h1>
            </header>
        </Fragment>
    );
}

export default Header;