import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
	Badge,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Popover,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

const NOTIFICATION_LIST = [
	{
		_id: 'notif-0',
		text: "I'm only open to freelance, contractor opportunities. [Contact me](mailto:contact@kadaradam.dev).",
		viewed: false,
	},
];

export const NotificationsButton = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [notifications, setNotifications] = useState(NOTIFICATION_LIST);
	const [hasNotification, setHasNotification] = useState<boolean>(false);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuOpen = Boolean(anchorEl);

	const markNotificationSeen = (index: number) => {
		const newNotificationArray = notifications;

		newNotificationArray[index].viewed = true;
		setNotifications(newNotificationArray);

		setHasNotification(notifications.some((item) => !item.viewed));
	};

	const listButtonClickHandler = (index: number) => {
		markNotificationSeen(index);
	};

	useEffect(() => {
		setHasNotification(notifications.some((item) => !item.viewed));
	}, [notifications]);

	return (
		<>
			<IconButton onClick={handleClick} aria-label="notifications" sx={{ color: 'white' }}>
				<Badge invisible={!hasNotification} variant="dot" overlap="circular">
					<NotificationsNoneIcon />
				</Badge>
			</IconButton>
			<Popover
				open={menuOpen}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<List sx={{ width: 250 }}>
					{notifications.map((item, index) => (
						<ListItem key={item._id} disablePadding>
							<ListItemButton
								onClick={() => listButtonClickHandler(index)}
								selected={!item.viewed}
							>
								{!item.viewed && (
									<ListItemIcon sx={{ flexShrink: 'unset', minWidth: 23 }}>
										<FiberManualRecordIcon
											sx={(theme) => ({
												fontSize: '0.65rem',
												color: theme.palette.azure.main,
											})}
										/>
									</ListItemIcon>
								)}
								<ListItemText
									primary={
										// eslint-disable-next-line react/no-children-prop
										<Markdown components={{ p: 'span' }} children={item.text} />
									}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Popover>
		</>
	);
};
