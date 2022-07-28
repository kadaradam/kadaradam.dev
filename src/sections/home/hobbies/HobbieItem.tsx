import { Box, Tooltip } from '@mui/material';
import { cloneElement } from 'react';
import { HobbieType } from 'src/types';

type HobbieItemProps = {
	item: HobbieType;
};

const HobbieItem = ({ item }: HobbieItemProps) => (
	<Box sx={{ textAlign: 'center' }}>
		<Tooltip title={item.name}>
			{cloneElement(item.iconElement as unknown as React.ReactElement<any>, {
				style: { fontSize: 48 },
			})}
		</Tooltip>
	</Box>
);

export default HobbieItem;
