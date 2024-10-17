import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from './home/Navbar';
import Banner from './home/Banner';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import MidSlide from './home/MidSlide';
import MidSection from './home/MidSection';
import Slide from './home/Slide';


const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts); 
    const dispatch = useDispatch();

    const {products,error} = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
               
            </Component>
        </>
    )
}

export default Home;