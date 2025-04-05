import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, CssBaseline, Box, Container, Fab, Fade, Button, Menu, MenuItem,
  Drawer, IconButton, List, ListItem, ListItemText, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ block: 'center' });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElTrainings, setAnchorElTrainings] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openTutorials, setOpenTutorials] = React.useState(false);
  const [openTrainings, setOpenTrainings] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Desktop Tutorials Menu
  const handleTutorialsClick = (event) => setAnchorEl(event.currentTarget);
  const handleTutorialsClose = () => setAnchorEl(null);
  const handleSQLClick = () => {
    navigate('/sql');
    handleTutorialsClose();
  };

  // Desktop Trainings Menu
  const handleTrainingsMenuOpen = (event) => setAnchorElTrainings(event.currentTarget);
  const handleTrainingsMenuClose = () => setAnchorElTrainings(null);
  const handleFECivilClick = () => {
    navigate('/fe_civil');
    handleTrainingsMenuClose();
  };
  const handleSnowflakeClick = () => {
    navigate('/snowflake');
    handleTrainingsMenuClose();
  };

  const handleEngClick = () => {
    navigate('/eng');
    handleTrainingsMenuClose();
  };

  const handleSqlClick = () => {
    navigate('/sql_course');
    handleTrainingsMenuClose();
  };

  // Mobile Drawer Handlers
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMobileTutorialsClick = () => setOpenTutorials(!openTutorials);
  const handleMobileTrainingsClick = () => setOpenTrainings(!openTrainings);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={`${process.env.PUBLIC_URL}/logo.jpg`}
      alt="Logo"
      style={{ width: "180px", height: "50px", marginRight: "10px", cursor: "pointer" }}
      onClick={() => navigate("/")}
    />
    {isMobile ? (
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
    ) : (
      <Typography variant="h6" component="div">
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Tutorials Button */}
          <Button color="inherit" onClick={handleTutorialsClick} disableRipple sx={{ position: 'relative', '&:hover::after': { content: '""', position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: '#233c7b', } }}> Tutorials </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleTutorialsClose}>
            <MenuItem onClick={handleSQLClick}>SQL</MenuItem>
          </Menu>

          {/* Exercise Button */}
          <Button color="inherit" onClick={() => navigate('/exercise')} disableRipple sx={{ position: 'relative', '&:hover::after': { content: '""', position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: '#233c7b', } }}> Exercise </Button>

          {/* Trainings Button */}
          <Button color="inherit" onClick={handleTrainingsMenuOpen} disableRipple sx={{ position: 'relative', '&:hover::after': { content: '""', position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: '#233c7b', } }}> Trainings </Button>
          <Menu anchorEl={anchorElTrainings} open={Boolean(anchorElTrainings)} onClose={handleTrainingsMenuClose}>
            <MenuItem onClick={() => { navigate('/'); handleTrainingsMenuClose(); }}>DATA ENG.</MenuItem>
            <MenuItem onClick={handleFECivilClick}>FE Civil</MenuItem>
            <MenuItem onClick={handleSnowflakeClick}>SNOWFLAKE</MenuItem>
            <MenuItem onClick={handleEngClick}>ENGLISH SPEAKING</MenuItem>
          </Menu>

          {/* Udemy Button */}
          <Button color="inherit" onClick={() => navigate('/udemy_course')} disableRipple sx={{ position: 'relative', '&:hover::after': { content: '""', position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: '#233c7b', } }}> Udemy </Button>
        </Box>
      </Typography>
    )}
  </Box>

  {/* Login Button (Moved to the Right)
  <Box sx={{ marginLeft: 'auto' }}>
    <Button variant="contained" color="primary" onClick={() => navigate('/admin')}>
      Login
    </Button>
  </Box> */}
</Toolbar>

      </AppBar>

       {/* Mobile Drawer */}
       <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {/* Tutorials Section */}
          <ListItem button onClick={handleMobileTutorialsClick}>
            <ListItemText primary="Tutorials" />
            {openTutorials ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openTutorials} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => { navigate('/sql'); handleDrawerToggle(); }}>
                <ListItemText primary="SQL" />
              </ListItem>
            </List>
          </Collapse>

          {/* Exercise Section */}
          <ListItem button onClick={() => { navigate('/exercise'); handleDrawerToggle(); }}>
            <ListItemText primary="Exercise" />
          </ListItem>

          {/* Trainings Section */}
          <ListItem button onClick={handleMobileTrainingsClick}>
            <ListItemText primary="Trainings" />
            {openTrainings ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openTrainings} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
  <ListItem button sx={{ pl: 4 }} onClick={() => { navigate('/'); handleDrawerToggle(); }}>
      <ListItemText primary="DATA ENG." />
    </ListItem>
    <ListItem button sx={{ pl: 4 }} onClick={() => { navigate('/fe_civil'); handleDrawerToggle(); }}>
      <ListItemText primary="FE Civil" />
    </ListItem>
    <ListItem button sx={{ pl: 4 }} onClick={() => { navigate('/snowflake'); handleDrawerToggle(); }}>
      <ListItemText primary="SNOWFLAKE" />
    </ListItem>
    <ListItem button sx={{ pl: 4 }} onClick={() => { navigate('/eng'); handleDrawerToggle(); }}>
      <ListItemText primary="ENGLISH SPEAKING" />
    </ListItem>
    
    {/* Mobile Udemy Option */}
    <ListItem button onClick={() => { navigate('/udemy_course'); handleDrawerToggle(); }}>
      <ListItemText primary="Udemy" />
    </ListItem>
  </List>
</Collapse>

        </List>
      </Drawer>

      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}></Box>
      </Container>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
