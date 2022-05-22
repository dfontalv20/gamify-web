import React, { useState } from 'react'
import { Button, Form, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { login } from '../../services/auth.service'

export default function LoginModal({ show, onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubtmit(e) {
        try {
            e.preventDefault();
            setLoading(true);
            const res = await login({ username, password });
            if (res.status === 200) onClose();
        } catch (error) {
            if (error.response.data.message) setErrorMessage(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    function handleOnClose() {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        onClose();
    }

    return (
        <Modal show={show} onHide={handleOnClose}>
            <ModalHeader closeButton>Iniciar Sesion</ModalHeader>
            <ModalBody className='text-center'>
                <Form onSubmit={(e) => handleSubtmit(e)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control required type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Label className='text-danger'>{errorMessage}</Form.Label><br />
                    <Button type='submit' className='mt-3' disabled={loading}>
                        {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Iniciar Sesion'}
                    </Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
