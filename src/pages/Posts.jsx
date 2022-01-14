import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Card, CardMedia, Pagination, CardContent, Typography, Grid } from '@mui/material';

import { getCities, getTotalAmount } from '../store/reducers/cities.reducer';
import { fetchCities } from '../store/actions/cities.actions';
import { DEFAULT_AMOUNT_EL } from '../constants/constants'
import image from '../images/image-earth.jpeg';

const Posts = () => {
  const dispatch = useDispatch();
  
  const cities = useSelector(getCities);
  const totalAmount = useSelector(getTotalAmount);
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const pagesAmount = Math.ceil(totalAmount / DEFAULT_AMOUNT_EL);
  
  useEffect(() => {
    dispatch(fetchCities(DEFAULT_AMOUNT_EL, currentPage));
  }, [currentPage]);

  const handleChangeAmountEl = (event, page) => {
    setCurrentPage(page)
  };

  return (
    <Box sx={{ display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Grid container spacing={1}>
        {cities.map(({ id, name, state_name }) => (
            <Card key={id} sx={{ m: 2, width: 250 }}>
              <CardMedia
              component="img"
              height="140"
              image={image}
              alt="City"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {state_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {name}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Grid>
      <Pagination 
        count={pagesAmount} 
        onChange={handleChangeAmountEl} 
        variant="outlined" 
        shape="rounded" 
        sx={{ margin:'auto', mt: 2 }} 
      />
    </Box>
  );
};

export default Posts;
