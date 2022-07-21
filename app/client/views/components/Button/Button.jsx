import { Button as MuiButton } from '@mui/material';


const Button = ({ children, icon, variant }) => {


    const buttonStylizer = {
        fontFamily: 'var(--font-family-heading)',
    }


    const utilityClasses = {
        button: `inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 mr-3 text-center 
                text-white font-medium border border-gray-700 hover:border-gray-600 rounded`
    }

    
    return (
        <MuiButton
           startIcon={icon} 
           variant={variant}
           sx={{
            fontFamily: 'var(--font-primary)',
            color: 'white',
            textTransform: 'none',
            "&:hover": {
                border: '1px solid #DDD',
            },
        }} className={utilityClasses.button}>
            {children}
        </MuiButton>
    )
}

export default Button

