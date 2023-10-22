import { ChangeEvent, useState } from 'react';

type UsePaginationType = {
	page: number;
	handleChangePage: (_: ChangeEvent<unknown>, value: number) => void;
};

const usePagination = (): UsePaginationType => {
	const [page, setPage] = useState<number>(1);

	const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return { page, handleChangePage };
};

export default usePagination;
