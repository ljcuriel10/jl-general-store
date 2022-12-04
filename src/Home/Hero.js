import React from 'react'
import { Carousel } from 'react-bootstrap'

const Hero = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1600581808739-a53bc241c37c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='First Slide'
            />

            <Carousel.Caption>
                <h3>June Lake Loop</h3>
                <p>est. 1901</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1634259504001-d7be629b2ae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1426&q=80'
                alt='second slide'
            />

            <Carousel.Caption>
                <h3>Welcome to June Lake</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1664327257749-3da3a0db8f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='third slide'
            />
        </Carousel.Item>
    </Carousel>
  )
}

export default Hero;