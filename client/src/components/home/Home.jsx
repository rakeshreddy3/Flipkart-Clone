import { useEffect } from 'react';

// components
import NavBar from './NavBar'
import Banner from './Banner'
import Slides from './Slides';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
 
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {
  const dispatch = useDispatch()

  const {products} = useSelector(state => state.getProducts)
  console.log(products);

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  
  return (
    <>
        <NavBar/>
        <Component> 
              <Banner/>
              <MidSlide products={products} title="Deal of the Day" timer={true}/>
              <MidSection/>
              <Slides products={products} title="Discounts for You" timer={false}/>
              <Slides products={products} title="Suggestions for you" timer={false}/>
              <Slides products={products} title="Top selection" timer={false}/>
              <Slides products={products} title="Recommended Items" timer={false}/>
              <Slides products={products} title="Trending Offers" timer={false}/>
        </Component>
        
    </>
  )
}

export default Home
