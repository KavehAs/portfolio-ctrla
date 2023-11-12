// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { Fade } from "react-awesome-reveal";

interface cardPropsType {
    title: string,
    assets: Array<{ url: string, id: string }>,
    link: string,
    category: string,
    content: string
}

export default function SampleCards({ title, assets, link, category, content }: cardPropsType) {
    return (
        <Fade duration={1200} triggerOnce={true}
            fraction={0.1}  className='w-full flex justify-center items-center'>
            <Card className='w-full xs:max-w-[620px] lg:max-w-[700px] xl:max-w-[800px] bg-lightBlack rounded-lg'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full"
                >
                    {assets.map((asset) =>
                        <SwiperSlide key={asset.id} className='w-full'>
                            <img src={asset.url} alt="assets" className='w-full' />
                        </SwiperSlide>)}
                </Swiper>

                <CardContent>
                    <Box component={"div"} className='flex justify-between items-center gap-8'>
                        <Typography className='text-lightText text-2xl md:text-3xl' gutterBottom variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography variant='h6' component={'div'} className='text-base md:text-lg  py-1 px-4 bg-backDark rounded-full text-lightText'>
                            {category}
                        </Typography>
                    </Box>
                    <Typography className='text-greyText md:text-xl mt-3' variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: content }}>
                    </Typography>
                </CardContent>

                <CardActions className='pb-3'>
                    <Button className='text-sm sm:text-xl text-pureWhite bg-backDark hover:bg-darkBlack ' size="large" href={link} target="_blank">مشاهده سایت</Button>
                </CardActions>
            </Card>
        </Fade>
    )
}
