import ArchitectureIcon from '@mui/icons-material/Architecture';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ScrollToTop from "react-scroll-to-top";

const actions = [

  {
    icon: (
      <ScrollToTop className='relative' smooth />
    ), name: 'Top'
  }
];


const DialSx = {
  zIndex: '9999999',
  ".MuiSpeedDial-fab": {
    backgroundColor: '#000000',
    boxShadow: 'var(--box-shadow-4)',
    border: '1px var(--red-100) solid',
    "&:hover": {
      backgroundColor: 'var(--gray-900)',
    },
  },
  position: 'fixed', bottom: 16, right: 16, border: '2px', zIndex: '9999999999'
}


export default function FloatingNavigator() {
  return (

    <SpeedDial
      ariaLabel="Desirable Solutions Navigator"
      sx={DialSx}
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
