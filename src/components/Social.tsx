import React, { FunctionComponent } from 'react';

const Social: FunctionComponent = () => {
  return (
    <div className='home__social'>
        <a href="https://github.com/SkibA4" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/jakub-skibinski/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/jskib16/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-facebook"></i>
        </a>
    </div>
  );
}

export default Social