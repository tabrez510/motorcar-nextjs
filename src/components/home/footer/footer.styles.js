// FooterStyles.js
import { styled } from '@mui/material/styles';
import { Box, Typography, Link, Divider } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
    width: '98%',
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderTop: '1px solid rgb(174, 172, 172)',
    position: 'relative',
    top: '25vh',
    left:'8px'

}));

export const FooterGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(4),
}));

export const FooterColumn = styled(Box)(({ theme }) => ({
    minWidth: '180px',
    marginBottom: theme.spacing(3),
}));

export const FooterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
    display: 'block',
    color: '#898989',
    fontSize:'15px',
    marginBottom: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));
export const FooterLinks = styled(Link)(({ theme }) => ({
    display: 'block',
    color: '#307EBC',
    fontSize:'15px',
    marginBottom: theme.spacing(1),
    textDecoration: 'underline',
}));

export const BottomBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    width: '100%',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '25%',
        width: '50%',
        height: '1px',
        backgroundColor: 'rgb(174, 172, 172)',
        justifyContent: 'center',
    },
}));


export const PolicyLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
}));

export const SocialIcons = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    marginTop: theme.spacing(2),
}));
