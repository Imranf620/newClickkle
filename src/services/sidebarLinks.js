import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const fileManager = [
    {
        name: 'My Files',
        icon: <FolderOutlinedIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Recent',
        icon: <AccessTimeOutlinedIcon fontSize='small' />,
        to: '/recent',
    },
    {
        name: 'Data and Privacy',
        icon: <PrivacyTipOutlinedIcon fontSize='small' />,
        to: '/data',
    },
    {
        name: 'Storage',
        icon: <CloudOutlinedIcon fontSize='small' />,
        to: '/storage',
    },
    {
        name: 'Payment & Subs',
        icon: <PaymentIcon fontSize='small' />,
        to: '/payment',
    },
    {
        name: 'Personal Info',
        icon: <AccountCircleIcon fontSize='small' />,
        to: '/personal',
    },
    {
        name: 'Favorite',
        icon: <GradeOutlinedIcon fontSize='small' />,
        to: '/favorite',
    },
    {
        name: 'Trash',
        icon: <DeleteOutlinedIcon fontSize='small' />,
        to: '/trash',
    },
];

const sharedFile = [
    {
        name: 'Shared with me',
        icon: <PeopleIcon fontSize='small' />,
        to: '/shared-with-me',
    },
    {
        name: 'Shared by me',
        icon: <PersonIcon fontSize='small' />,
        to: '/shared-by-me',
    },
];

export { fileManager, sharedFile };
