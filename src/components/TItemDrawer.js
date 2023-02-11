import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

const TMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    backgroundColor: theme.colors.gray[400],
    '& .MuiMenu-list': {
      minWidth: theme.spacing(35),
      padding: 0,
    },
    '& .MuiMenuItem-root': {
      color: 'white',
      fontSize: '18px',
      fontWeight: 300,
      height: theme.spacing(9),
      padding: theme.spacing('23px', 0, '23px', 4),
      borderBottom: '1px solid #868686',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
}));

export default TMenu;
