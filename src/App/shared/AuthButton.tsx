import { Button, styled } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../../styles/colors';

interface IProps {
    page: string;
    children: any;
}

const SignInButton = styled(Button)(({ theme }) => ({
    backgroundColor: `${theme.palette.myCustomTheme?.myBtn}`,
    width: '80%',
    borderRadius: '10px',
    textTransform: 'capitalize',
    fontWeight: '600',
    marginBottom: '8px',
    marginTop: '10px',
    color: `${colors.white}`,
    '&:hover': {
        backgroundColor: `${theme.palette.myCustomTheme?.myBtn}`
    }
})) as typeof Button;

const SignUpButton = styled(Button)(({ theme }) => ({
    backgroundColor: `${theme.palette.myCustomTheme?.myBtn}`,
    width: '80%',
    borderRadius: '10px',
    textTransform: 'capitalize',
    fontWeight: '600',
    marginBottom: '8px',
    marginTop: '10px',
    color: `${colors.white}`,
    '&:hover': {
        backgroundColor: `${theme.palette.myCustomTheme?.myBtn}`
    }
})) as typeof Button;

const SubmitButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#111111',
    padding: '10px 20px ',
    textTransform: 'capitalize',
    border: '1px solid #111111',
    marginTop: '10px'
}) as typeof Button;

const AuthButton: FC<IProps> = ({ page, children }) => {
    const navigate = useNavigate();
    const handleMovePage = () => {
        switch (page) {
            case 'sign-in':
                navigate('/');
                break;
            case 'sign-up':
                navigate('/login');
                break;
            default:
                break;
        }
    };

    return (
        <>
            {page === 'sign-in' ? (
                <SignInButton onClick={handleMovePage} size="large">
                    {children}
                </SignInButton>
            ) : page === 'sign-up' ? (
                <SignUpButton onClick={handleMovePage} size="large">
                    {children}
                </SignUpButton>
            ) : (
                <SubmitButton type="submit" size="large">
                    {children}
                </SubmitButton>
            )}
        </>
    );
};

export default AuthButton;
