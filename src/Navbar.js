import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'; // Import Menu
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem
import { useNavigate } from 'react-router-dom';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
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
  const [anchorEl, setAnchorEl] = React.useState(null); // Define anchorEl state
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Define handleClick
  };

  const handleClose = () => {
    setAnchorEl(null); // Define handleClose
  };

  const handleSQLClick = () => {
    navigate('/sql'); // Navigate to the SQL route
    handleClose(); // Close the menu
  };

  const handleExerciseClick = () => {
    navigate('/exercise'); // Updated to match the new route structure
    handleClose();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
      src={`${process.env.PUBLIC_URL}/logo.jpg`} // Path to your logo
      alt="Logo"
      style={{ width: "180px", height: "50px", marginRight: "10px" }} // Adjust size
      onClick={() => navigate("/")} // Redirect to "/" on click
      className="cursor-pointer" // Add pointer cursor for interactivity
    />
            <Typography variant="h6" component="div">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" onClick={handleClick}>
                  Tutorials
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleSQLClick}>SQL</MenuItem> 
                </Menu>
                <Button color="inherit"onClick={handleExerciseClick}>Exercise</Button>
              </Box>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          {/* Remove or comment out the unwanted text block */}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}