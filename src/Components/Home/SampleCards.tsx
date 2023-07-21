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


interface cardPropsType {
    title: string,
    assets: Array<{ url: string, id: string }>,
    link: string,
    category: string,
    content: string
}

export default function SampleCards({ title, assets, link, category, content }: cardPropsType) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {assets.map((asset) => <SwiperSlide key={asset.id}><img src={asset.url} alt="assets" /></SwiperSlide>)}
            </Swiper>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={link} target="_blank">Share</Button>
            </CardActions>
        </Card>)
}
