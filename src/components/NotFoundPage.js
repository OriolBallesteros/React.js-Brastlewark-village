import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <Fragment>
        404! - <Link to="/">Go home</Link>
    </Fragment>
);

export default NotFoundPage;