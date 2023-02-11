import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Badge,
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Logo from 'components/Logo';
import TMenu from 'components/TItemDrawer';

import { ReactComponent as IcnChallenge } from 'assets/icons/icon_challenge.svg';
import { ReactComponent as IcnClose } from 'assets/icons/icon_close.svg';
import { ReactComponent as IcnInfo } from 'assets/icons/icon_info.svg';
import { ReactComponent as IcnProfile } from 'assets/icons/icon_memo.svg';
import { ReactComponent as IcnMenu } from 'assets/icons/icon_menu.svg';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  toolbar: {
    backgroundColor: theme.colors.dark[500],
    padding: theme.spacing(0, 20),
  },
}));
function TAppBar() {
  const { classes } = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const iconButtons = [
    {
      icon: <IcnProfile />,
      label: '自分の記録',
      path: '/record',
    },
    {
      icon: <IcnChallenge />,
      label: 'チャレンジ',
      path: '/record',
    },
    {
      icon: <IcnInfo />,
      label: 'お知らせ',
      path: '/record',
      badge: 1,
    },
  ];

  const menuItem = [
    {
      label: '自分の記録',
      onClick: () => {},
    },
    {
      label: '体重グラフ',
      onClick: () => {},
    },
    {
      label: '目標',
      onClick: () => {},
    },
    {
      label: '選択中のコース',
      onClick: () => {},
    },
    {
      label: 'コラム一覧',
      onClick: () => {
        navigate('/columns');
        handleClose();
      },
    },
    {
      label: '設定',
      onClick: () => {},
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.toolbar} disableGutters={true}>
        <Box
          width='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <IconButton onClick={() => navigate('/')}>
            <Logo />
          </IconButton>
          <Box>
            {iconButtons.map((btn) => (
              <Button
                key={btn.label}
                sx={{ mr: 2 }}
                className='center'
                onClick={() => navigate(btn.path)}
              >
                {btn.badge ? (
                  <Badge badgeContent={4} color='primary'>
                    {btn.icon}
                  </Badge>
                ) : (
                  btn.icon
                )}
                <Typography
                  sx={{ ml: 1 }}
                  color='white'
                  fontSize={theme.spacing(2)}
                  fontWeight='300'
                >
                  {btn.label}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
        <IconButton
          sx={{ ml: 1 }}
          onClick={(e) => {
            if (open) {
              return handleClose();
            }
            handleClick(e);
          }}
        >
          {open ? <IcnClose /> : <IcnMenu />}
        </IconButton>
        <TMenu
          id='demo-customized-menu'
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {menuItem.map((item) => (
            <MenuItem key={item.label} onClick={item.onClick} disableRipple>
              {item.label}
            </MenuItem>
          ))}
        </TMenu>
      </Toolbar>
    </AppBar>
  );
}

export default TAppBar;
