import { Button as MuiButton } from '@mui/material';


const Button = ({ children, icon, variant, href }) => {

    const utilityClasses = {
        button: `inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 mr-3 text-center 
                text-white font-medium border border-gray-700 hover:border-gray-600 rounded`
    }


    return (
        <MuiButton
            startIcon={icon}
            variant={variant}
            href={href}
            sx={{
                ".MuiButtonBase-root": {
                    cursor: ' not-allowed',
                    pointerEvents: 'auto',
                    outline: 'none',
                    color: 'white'
                },
                fontFamily: 'var(--font-primary)',
                outline: 'none',
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

