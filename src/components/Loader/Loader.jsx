import { Box } from 'components/Box';
import { ThreeDots  } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <Box 
            display='flex'
            justifyContent='center'
        >
            <ThreeDots   
            height="100"
            width="100"
            color='dark-gold'
            ariaLabel='loading'
        />
        </Box>
        
    );
};

