import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import Service from '../component/Service'
import FeatureRooms from '../component/FeatureRooms'

const Home = () => {
    return (
    <>
        <Hero>
            <Banner title="luxurious rooms"
                    subtitle="deluxe rooms started at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
            </Banner>
        </Hero>
        <Service/>
        <FeatureRooms/>
    </>
    )
}

export default Home
