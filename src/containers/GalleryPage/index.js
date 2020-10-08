import React, { Component } from 'react'
import Gallery from 'react-photo-gallery';

import "./style.css"
import { PHOTO_SET } from "./photo"

class GalleryPage extends Component {
    render() {
        return(
            <div className="gallery__photos">
                <Gallery photos={PHOTO_SET} />
            </div>
        )
    }
}

export default GalleryPage