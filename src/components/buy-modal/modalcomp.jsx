import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputBox from './inputbox';
import './buy-modal.scss';
import ThankyouModal from './thankyoumodal';
import MultipleDate from './multipledate';
import DateComp from './datecomp';
import { RadioGroup } from '@mui/material';
import RadioBtn from './radiobtn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '5px solid gray',
    borderRadius:'50px',
    boxShadow: 24,
    p: 7,
};

export default function ModalComp({ isOpen, toClose }) {

    const [changeModal, setChangeModal] = React.useState(0);

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
                            <>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
                                    Delivery Information
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2, }}>
                                    <div className='row-1'>
                                        <InputBox lname={'Name'} widthLen={'48%'} />
                                        <InputBox lname={'Mobile Number'} widthLen={'48%'} />
                                    </div>
                                    <div className='row-1'>
                                        <InputBox lname={'Email'} widthLen={'48%'} />
                                        <InputBox lname={'City'} widthLen={'48%'} />
                                    </div>
                                    <div className='row-1'>
                                        <InputBox lname={'State'} widthLen={'48%'} />
                                        <InputBox lname={'Zip'} widthLen={'22%'} />
                                        <InputBox lname={'District'} widthLen={'22%'} />
                                    </div>
                                    <div className='row-1'>
                                        <InputBox lname={'Address'} widthLen={'100%'} />
                                    </div>
                                    <div style={{ textAlign: 'end', marginTop: '2rem' }}>
                                        <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal + 1)}>Next</Button>
                                    </div>
                                </Typography>
                            </>
                            :
                            changeModal === 1 ?
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                                        Schedule Delivery
                                    </Typography>
                                    <div>
                                        <div style={{ marginBottom: '1rem' }}>
                                            <p>Date</p>
                                        {/* <MultipleDate /> */}
                                            <DateComp />
                                        </div>

                                        <div style={{ marginBottom: '1rem' }}>
                                            <InputBox lname={'Note'} widthLen={'100%'} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                        <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal - 1)}>Previous</Button>
                                        <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal + 1)}>Next</Button>
                                    </div>
                                </>
                                :
                                changeModal === 2 ?
                                    <>
                                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                                            Payment Method
                                        </Typography>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <RadioBtn label={'Online Payment'} value={'OP'} />
                                            <RadioBtn label={'Cash on Delivery'} value={'COD'} />
                                            <RadioBtn label={'POS on Delivery'} value={'POD'} />
                                        </RadioGroup>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                            <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal - 1)}>Previous</Button>
                                            <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal + 1)}>Next</Button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <ThankyouModal />
                                    </>
                    }

                </Box>
            </Modal>
        </div>
    );
}
