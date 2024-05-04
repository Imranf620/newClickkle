import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const fileManager = [
    {
        name: 'My Files',
        icon: <FolderOutlinedIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Users',
        icon: <PersonIcon fontSize='small' />,
        to: '/users',
    },
    {
        name: 'Users Details',
        icon: <ManageAccountsIcon fontSize='small' />,
        to: '/user',
    },
    {
        name: 'Recent',
        icon: <AccessTimeOutlinedIcon fontSize='small' />,
        to: '/recent',
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
