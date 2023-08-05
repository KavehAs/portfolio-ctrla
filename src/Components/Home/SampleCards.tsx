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
        <Card className='w-full xs:max-w-[650px] lg:max-w-[870px] xl:max-w-[1000px] bg-lightBlack rounded-lg'>
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
                <Typography className='text-lightText text-3xl md:text-4xl' gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography className='text-greyText text-lg md:text-xl xl:text-2xl text-justify' variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>

            <CardActions className='pb-3'>
                <Button className='text-lg md:text-xl xl:text-2xl text-pureWhite bg-backDark hover:bg-darkBlack ' size="large" href={link} target="_blank">مشاهده سایت</Button>
            </CardActions>
        </Card>)
}
