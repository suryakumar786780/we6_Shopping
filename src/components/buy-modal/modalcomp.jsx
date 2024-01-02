import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './buy-modal.scss';
import ThankyouModal from './thankyoumodal';

import Modal1 from './modals/modal_1';
import Modal2 from './modals/modal_2';
import Modal3 from './modals/modal_3';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '5px solid gray',
    borderRadius: '50px',
    boxShadow: 24,
    p: 7,
};

export default function ModalComp({ isOpen, toClose }) {

    const [changeModal, setChangeModal] = useState(0);

   
    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div style={{ textAlign: 'end' }}>
                        <Button variant="outlined" onClick={() => toClose(false)}>{changeModal === 3 ? 'Close' : 'Cancel'}</Button>
                    </div>
                    {
                        changeModal === 0 ?
                            <Modal1 changeModal={changeModal} setChangeModal={setChangeModal} />
                            :
                            changeModal === 1 ?
                                <Modal2 changeModal={changeModal} setChangeModal={setChangeModal} />
                                :
                                changeModal === 2 ?
                                    <Modal3 changeModal={changeModal} setChangeModal={setChangeModal} />
                                    :
                                    <ThankyouModal />
                    }
                </Box>
            </Modal>
        </div>
    );
}
