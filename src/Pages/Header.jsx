import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
export const Header = () => {
    return (<>
        <Container className='text-center'>
            <h1 className='display-3'>AvsarSocialMedia</h1>
            <p className='lead'>Find Friends and share your thoughts...........💭</p>

            <Button variant='secondary' as={NavLink} to="/signup">Sign up</Button>
            <Button variant='secondary' as={NavLink} to="/signin">Sign in</Button>
        </Container>
    </>)
}