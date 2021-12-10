import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export default function NavigationDrawer({ isOpen, onToggle }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onToggle}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
