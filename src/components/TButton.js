import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const TButton = styled(Button)(({ theme }) => ({
  background: theme.colors.primary['gradient-300-400'],
  height: theme.spacing(7),
  minWidth: theme.spacing(37),
  padding: theme.spacing(1.75, 0.5, 2, 0.5),
  color: 'white',
}));
export default TButton;
