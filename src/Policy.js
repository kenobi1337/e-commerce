import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Policy() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				variant="primary"
				onClick={handleShow}>
				Read our returns and policy
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>
						Our Returns and refund Policy
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{`Thank for purchasing our product at https://good-lifes-all-shop.company/ operated by GOOD LIFE ALL, LLC.`}
				</Modal.Body>
				<Modal.Body>{`Due to our product we selling is a personal use product, and we currently in a big pandemic situation we care about healthy of our customer and health care of our product, we wanted our customer to get a newly product that never used by someone before. `}</Modal.Body>
				<Modal.Body>
					{`However you still can return the product and get refund if our product didn't been schedule for shipping yet.`}
				</Modal.Body>
				<Modal.Body>
					{`If our product arrived damaged, rotten, or contaminated in anyway, please contact us right away and we will be happy to send a free replacement.`}
				</Modal.Body>
				<Modal.Body>
					{`If anything is unclear, or you have more question, or requesting a refund feel free to contact us.`}
				</Modal.Body>
				<Modal.Body>
					{`Phone: (786)-320-1891 Email: goodlifes.llc@gmail.com`}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={handleClose}>
						I agree
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Policy;
