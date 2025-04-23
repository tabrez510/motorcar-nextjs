import React from 'react';
import { Modal, Box } from '@mui/material';

 const modalStyl = (theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backdropFilter: "blur(2px)",
  });
  
  const modalBoxStyl = (theme) => ({
	backgroundColor: "#fff",
	padding: { xs: "3rem 1rem 1rem 1rem", md: "2rem 3rem" },
	borderRadius: "8px",
	boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
	width: { xs: "100vw", md: "55vw" },
	height: { xs: "100vh", md: "550px" },
	position: "relative",
  });
  


const WithModalHOC = (WrappedComponent, customStyles = {}) => {
	const ModalComponent = ({ open, handleClose, isIconHide = false, ...props }) => {

		return (
			<Modal
				open={open}
				onClose={handleClose}
				sx={theme => ({ ...modalStyl(theme) })}
			>
				<Box
					sx={theme => ({
						...modalBoxStyl(theme),
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						...customStyles.box,
						outline: 'none',
						border: 'none', 
					})}
				>
					<WrappedComponent handleClose={handleClose} {...props} />
				</Box>
			</Modal>
		);
	};
	return React.memo(ModalComponent);
};

export default WithModalHOC;
