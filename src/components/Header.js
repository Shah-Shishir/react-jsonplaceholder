import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ onToggle }) {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          onClick={onToggle}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          JSON Placeholder API
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
