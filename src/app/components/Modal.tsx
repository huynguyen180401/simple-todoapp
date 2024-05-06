import React from 'react';

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}
export default function Modal({ modalOpen, setModalOpen, children }: ModalProps) {
    return (
        <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box relative">
                <label onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle absolute top-2 right-2">
                    x
                </label>
                {children}
            </div>
        </div>
    );
}
