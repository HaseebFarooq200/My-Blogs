import React from 'react';
import './Home.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <>
      <div className="about-header">
        <h1>
          Latest Blogs
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro voluptatibus at
          magni, vero vel quos totam amet perspiciatis repellendus.
        </p>
        <br /> <br /> <br />
        <Link to = '/About'>
        <Button variant="contained" color="success"> My BLOGS </Button>
        </Link>
      </div>
    </>
  )
}
