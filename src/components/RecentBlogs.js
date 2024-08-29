import React from 'react';

function RecentBlogs(props) {
    return (
        <div className="blogs flex-center-colum">
            <div className="body-cover">
                <div className="grid-3x">
                    <a href="#" className="no-decoration">
                    <div className="tab flex-center-colum">
                        <img className="blog-image-small" src="/assets/images/images.jpg" alt="" style={{maxWidth:'100%'}}/>
                                   <p style={{color: 'black'}}>
                            <strong>
                                the practice of protecting systems, networks, and programs from digital attacks
                            </strong>
                        </p>

                    </div>
                </a>

                <a href="#" className="no-decoration">
                    <div className="tab flex-center-colum">
                        <img className="blog-image-small" src="/assets/images/images.jpg" alt="" style={{maxWidth:'100%'}}/>
                                   <p style={{color: 'black'}}>
                            <strong>
                                the practice of protecting systems, networks, and programs from digital attacks
                            </strong>
                        </p>

                    </div>
                </a>
                <a href="#" className="no-decoration">
                    <div className="tab flex-center-colum">
                        <img className="blog-image-small" src="/assets/images/images.jpg" alt="" style={{maxWidth:'100%'}}/>
                                   <p style={{color: 'black'}}>
                            <strong>
                                the practice of protecting systems, networks, and programs from digital attacks
                            </strong>
                        </p>

                    </div>
                </a>

                </div>
            </div>
        </div>
    );
}

export default RecentBlogs;