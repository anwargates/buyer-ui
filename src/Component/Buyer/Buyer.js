import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './buyer.css'
import { Button, Alert } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input-field'

const Buyer = () => {
    const [show, setShow] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const buttonText = disable ? "Menunggu respon penjual" : "Saya Tertarik dan ingin Nego";

    return (
        <>

            <Alert 
            className='cust-alert'
            show={alertShow}
            variant="success" 
            onClose={() => setAlertShow(false)} 
            dismissible>
                <p>
                Harga tawarmu berhasil dikirim ke penjual
                </p>
            </Alert>
            <div class="nav">
                <Link to="/"><img src="/img/fi_arrow-left.png" alt="" /></Link>
                {/* <a href=""><img src="img/fi_arrow-left.png" alt=""></a> */}
            </div>
            <header class="hero">
                <div id="carouselExampleIndicators" class="carousel slide" data-touch="true" data-ride="carousel">
                    <ol class="carousel-indicators crsl">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Link to="/"><img class="d-block w-100" src="/img/hero.png" alt="First slide" /></Link>
                            {/* <img class="d-block w-100" src="/img/hero.png" alt="First slide"> */}
                        </div>
                        <div class="carousel-item">
                            <Link to="/"><img class="d-block w-100" src="/img/hero.png" alt="Second slide" /></Link>
                            {/* <img class="d-block w-100" src="/img/hero.png" alt="Second slide"> */}
                        </div>
                        <div class="carousel-item">
                            <Link to="/"><img class="d-block w-100" src="/img/hero.png" alt="Third slide" /></Link>
                            {/* <img class="d-block w-100" src="/img/hero.png" alt="Third slide"> */}
                        </div>
                        <div class="carousel-item">
                            <Link to="/"><img class="d-block w-100" src="/img/hero.png" alt="Fourth slide" /></Link>
                            {/* <img class="d-block w-100" src="/img/hero.png" alt="Fourth slide"> */}
                        </div>
                    </div>
                </div>

            </header>

            <div className="container menu">
                <div className="col-xs-12">
                    <div class="row harga">
                        <h1>Jam Tangan Casio</h1>
                        <h3>Aksesoris</h3>
                        <h4 class="price">Rp 250.000</h4>
                    </div>
                    <div class="row seller">
                        <div class="col-4 profile">
                            <Link to="/"><img class="d-block w-100" src="/img/profile.png" alt="" /></Link>
                            {/* <img src="/img/profile.png" alt=""> */}
                        </div>
                        <div class="col-8 seller-name">
                            <h1>Nama Penjual</h1>
                            <h3>Kota</h3>
                        </div>
                    </div>
                    <div class="row desc">
                        <h1>Deskripsi</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Exercitationem cupiditate excepturi assumenda ipsum molestias, aut, odit quod
                            quibusdam quos consequuntur libero incidunt impedit, nam possimus explicabo totam quam qui tempore.
                        </p>
                    </div>

                </div>
            </div>

            <Button 
            disabled={disable}
            className='button shadow-none button-disable'
            onClick={() => setShow(true)}>
                {buttonText}
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <img src="/img/close.png" alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-xs-12">
                        <div className="row desc row-modal">
                            <h1>
                                Masukkan Harga Tawarmu
                            </h1>
                            <p>
                                Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
                            </p>
                        </div>
                        <div className="row seller row-modal-item">

                            <div class="col-4 profile">
                                <Link to="/"><img class="d-block w-100 pic" src="/img/hero.png" alt="" /></Link>
                            </div>
                            <div class="col-8 seller-name">
                                <h1>Jam Tangan Casio</h1>
                                <h4 class="price">Rp 250.000</h4>
                            </div>
                        </div>
                        <div className="row input-harga">
                            <h3>
                                Harga Tawar
                            </h3>
                            <CurrencyInput
                                id="input-example"
                                class="modal-input"
                                name="input-name"
                                placeholder="Please enter a number"
                                defaultValue={100}
                                decimalsLimit={2}
                                prefix='Rp. '
                                onValueChange={(value, name) => console.log(value, name)}
                            />
                        </div>
                        <Button className='button shadow-none button-kirim' onClick={
                            () => { setShow(false); setAlertShow(true); setDisable(true) }
                        }
                        >
                            Kirim
                        </Button>

                        {/* <div className="button button-kirim">
                            <Button onClick={AlertDismissibleExample}>
                                Kirim
                            </Button>
                        </div> */}
                    </div>

                </Modal.Body>
            </Modal>


            {/* <div class="modal fade modal-dialog" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                <Link to="/"><img src="img/close.png" alt="" /></Link>
                                <img src="img/close.png" alt="">
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    )
}

// function AlertDismissibleExample() {

//     if (show) {
//         return (
//             <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//                 <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//                 <p>
//                     Change this and that and try again. Duis mollis, est non commodo
//                     luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//                     Cras mattis consectetur purus sit amet fermentum.
//                 </p>
//             </Alert>
//         );
//     }
//     // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }


export default Buyer