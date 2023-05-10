import { MovieItemType } from '@pages/home/Home';
import { Dispatch, SetStateAction } from 'react';

type SwiperThumbsType = {
	list: MovieItemType[];
	hasButton: boolean;
	setActiveImage: Dispatch<SetStateAction<string | null | undefined>>;
};

export default SwiperThumbsType;
