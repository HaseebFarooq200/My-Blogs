import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Card, CardGroup,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import pic1 from './img1.jpg'
import pic2 from './img2.jpg'
import pic3 from './img3.jpg'


export default function About() {

  const navigate = useNavigate();
  const callAboutPage = async () => {

    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json', 'Content-type': 'application/json'
        },
        credentials: 'include'
      })

      await res.json()
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error
      }
    } catch (error) {
      navigate('/')
    }

  }

  useEffect(() => {
    callAboutPage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <>
    <CardGroup className='mt-5'>
        <Card className='mr-3 ml-3 '>
    
          <Card.Img variant="top" src={pic1}/>
          <Card.Body>
            <Card.Title>Blog 1</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Link to={'/blog1'}> 
             <Button variant="success">Read More</Button>
            </Link> 
          </Card.Body>
        </Card>

        <Card className='mr-3 ml-3'>
          <Card.Img variant="top" src={pic2} style={{transform: (1.5)}}/>
          <Card.Body>
            <Card.Title>Blog 2</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
            <Link to={'/blog2'}> 
            <Button variant="success" >Read More</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className='mr-3 ml-3'>
          <Card.Img variant="top" src={pic3} />
          <Card.Body>
            <Card.Title>Blog 3</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Link to={'/blog3'}> 
            <Button variant="success">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      
    </>
  )
}
