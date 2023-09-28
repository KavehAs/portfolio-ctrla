import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar } from 'swiper/modules';

import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';


interface featuresType {
  content: String,
  logo: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
}


export default function Slider() {

  const features: featuresType[] = [
    {
      content: "بهینه سازی سایت",
      logo: BeenhereOutlinedIcon,
    },
    {
      content: "سئو اولیه سایت",
      logo: SpeedIcon,
    },
    {
      content: "آموزش تولید محتوا",
      logo: LightbulbOutlinedIcon,
    },
    {
      content: "آموزش مدیریت سایت",
      logo: ManageAccountsOutlinedIcon,
    },
    {
      content: "پشتیبانی",
      logo: SupportAgentOutlinedIcon,
    },
    {
      content: "مشاوره رایگان",
      logo: ForumOutlinedIcon,
    },

  ];

  return (
    <div className='h-auto my-24 '>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        spaceBetween={30}
        freeMode={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper w-full h-full"
      >

        {features.map((feature, index) => <SwiperSlide key={index}
          className=' bg-lightBlack text-center pt-3 rounded-lg h-40 flex flex-col justify-center items-center text-greyText
          text-xl sm:text-2xl '>
          <feature.logo fontSize='large' />
          <h4>{feature.content}</h4>
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}
