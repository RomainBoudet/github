import React from 'react';
import './style.scss';

import ClipLoader from 'react-spinners/ClipLoader';
import PulseLoader from 'react-spinners/PulseLoader';

// export default () => <div className="spinner" />;

export default () => <div className="spinner"><ClipLoader /> <p>Chargement en cours... <PulseLoader size={4} /></p> </div>;

//! https://www.davidhu.io/react-spinners/
