import { Swiper, SwiperSlide } from 'swiper/react';
import { LoginImg1, LoginImg2, LoginImg3 } from '../../utils/dataImg';

import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay]);

interface dataSliderLogin {
    loginImg: string;
}

const sliderLogin: dataSliderLogin[] = [
    {
        loginImg: LoginImg1
    },
    {
        loginImg: LoginImg2
    },
    {
        loginImg: LoginImg3
    }
];

const LoginSlide = () => {
    return (
        <Swiper
            slidesPerView={1}
            loopFillGroupWithBlank={true}
            loop={true}
            autoplay={{
                delay: 1800
            }}
        >
            {sliderLogin.map(({ loginImg }) => (
                <SwiperSlide key={loginImg}>
                    <img
                        src={loginImg}
                        alt={loginImg}
                        style={{
                            width: '600px',
                            height: '360px',
                            objectFit: 'cover'
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LoginSlide;
