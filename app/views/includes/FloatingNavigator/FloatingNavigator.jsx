import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from '@mui/icons-material/Menu';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import ScrollToTop from "react-scroll-to-top";

const actions = [

  {
    icon: (
      <ScrollToTop className='relative z-50' component={(
        <ArrowCircleUpIcon sx={{ zIndex: '9999999', color: 'var(--red-300)' }} />
      )} smooth />
    ), name: 'Top'
  }
];

export default function FloatingNavigator() {
  return (

    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        ".MuiSpeedDial-fab": {
          backgroundColor: '#000000',
          boxShadow: 'var(--box-shadow-2)',
          border: '1px var(--red-800) solid',
          "&:hover": {
            backgroundColor: 'var(--gray-900)',
            border: '1px var(--red-200) solid',
          },
        },
        position: 'fixed', bottom: 16, right: 16, border: '2px', zIndex: '9999999999'
      }}
      icon={<ArchitectureIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          tooltipOpen={true}
          icon={action.icon}
          tooltipTitle={<span className="text-black">{action.name}</span>}
        />
      ))}
    </SpeedDial>

  );
}
