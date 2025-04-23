"use client"

import { fonts } from "../ThemeRegistry/theme";
import { Box, CardContent, Typography, Grid, styled } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const services = [
    { title: "Wheel Alignment", desc: "City Centre Deira. Dubai", image: "/images/car-towing.svg" },
    { title: "Car Care", image: "/images/car-care.svg" },
    { title: "Car Detailing", image: "/images/car-detailing.svg" },
    { title: "Car Repair", image: "/images/car-repair.svg" },
    { title: "Car Insurance", image: "/images/car-insurance.svg" },
    { title: "Car Towing", image: "/images/car-towing.svg" },
    { title: "Car Repair", image: "/images/car-repair.svg" },
    { title: "Car Care", image: "/images/car-care.svg" },
];

const HeaderContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
});

const SectionHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 600,
    opacity: 0.75,
    color: theme.palette.text.secondary,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: theme.spacing(1),
    fontWeight: 600,
    fontSize: '1.4rem',
    fontFamily: fonts.secondary,
}));

const ServiceCard = styled(Box)(({ theme }) => ({
    width: '24%',
    height: '31vh',
    // border: '1px solid #1A1A1A',
    // padding: '1%',
    // paddingRight: '2%',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    gap: 15,
    borderRadius: '15px',
    overflow: 'hidden'
}));

const ServiceContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    pl: 2,
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
    width: '25%',
    lineHeight: 1.3,
    fontWeight: 500,
    color: '#1A1A1A',
}));

const FeaturesOffer = () => {
    return (
        <Box component="section" sx={{ width: '98%', position: 'relative', left: '8px', }}>
            <HeaderContainer mb={4}>
                <Box>
                    <SectionHeader>
                        <Box component="img" src="/icons/separator-carsblue.svg" alt="Section separator" />
                        <SectionSubtitle variant="subtitle2">
                            Featured OFFERS
                        </SectionSubtitle>
                    </SectionHeader>
                    <SectionTitle>
                        View All Offers
                    </SectionTitle>
                </Box>
                <Box component="img" src="/icons/view-all.svg" alt="View all services" />
            </HeaderContainer>

            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '14.5px' }}>
                {services.map((service, index) => (
                    <ServiceCard key={`${service.title}-${index}`}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/icons/offer-card-bg.svg)',
                            // backgroundSize: 'center',
                            backgroundSize: '120% 120%',
                            borderRadius:'12px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            paddingRight: 2
                        }} >
                            <Box sx={{ py: 2, pl: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography variant="h6" fontWeight={700}>
                                        {service.title || 'Wheel Alignment'}
                                    </Typography>
                                    <Typography variant="body2" fontWeight={600} color="white">
                                        {service.location || 'City Centre Deira. Dubai'}
                                    </Typography>
                                    <Typography variant="body2" fontWeight={600} color="white">
                                        <span style={{ textDecoration: 'line-through', color: '#666666' }}>
                                            {service.originalPrice ? `AED ${service.originalPrice}` : 'AED450'}
                                        </span>{" "}
                                        from{" "}
                                        <span style={{ fontSize: '1rem' }}>
                                            {service.discountedPrice ? `AED ${service.discountedPrice}` : 'AED450'}
                                        </span>
                                    </Typography>
                                </Box>
                                <ArrowForwardIosIcon sx={{ color: 'white' }} />
                            </Box>

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                            }}>
                                <Box component={'img'} src="/images/car.svg" />
                                <Box sx={{
                                    width: '60px',
                                    height: '60px',
                                    bgcolor: '#212121',
                                    borderRadius: '50%',
                                    mt: -2,
                                    pl: 1.5,
                                    pt: 1.5
                                }}>
                                    <Typography sx={{
                                        color: '#FFD600',
                                        fontFamily: fonts.primary,
                                        fontSize: '1.1rem',
                                        fontStyle: 'italic',
                                        lineHeight: '1.1rem',
                                        transform: 'rotate(-10deg)',
                                    }}>
                                        56% off
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </ServiceCard>
                ))}
            </Box>

        </Box>
    )
}

export default FeaturesOffer