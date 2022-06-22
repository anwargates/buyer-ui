import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './buyer.css'
import { Button, Alert, Carousel } from 'react-bootstrap'
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
            <div class="back-nav">
                <Link to="/"><img src="/img/fi_arrow-left.png" alt="" /></Link>
                {/* <a href=""><img src="img/fi_arrow-left.png" alt=""></a> */}
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 g-4 carousel-mobile">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/product.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/product.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/product.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/product.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 g-4 harga-mobile">
                        <div class="row gy-4 alignment-mobile">
                            <div class="col-12">
                                <div class="row harga">
                                    <h1>Jam Tangan Casio</h1>
                                    <h3>Aksesoris</h3>
                                    <h4 class="price">Rp 250.000</h4>
                                    <Button
                                        disabled={disable}
                                        className='button shadow-none button-disable'
                                        onClick={() => setShow(true)}>
                                        <p className='btn-text'>{buttonText}</p>
                                    </Button>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row seller">
                                    <div class="col-4 profile">
                                        <Link to="/"><img class="" src="/img/profile.png" alt="" /></Link>
                                        {/* <img src="/img/profile.png" alt=""> */}
                                    </div>
                                    <div class="col-8 seller-name">
                                        <h1>Nama Penjual</h1>
                                        <h3>Kota</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8 g-4 desc-mobile">
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
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {/* <img src="/img/close.png" alt="" /> */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col-xs-12">
                            <div className="row-modal">
                                <h1>
                                    Masukkan Harga Tawarmu
                                </h1>
                                <p>
                                    Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
                                </p>
                            </div>
                            <div className="row-modal-item">

                                <div class="col-4 profile">
                                    <Link to="/"><img class="" src="/img/hero.png" alt="" /></Link>
                                </div>
                                <div class="col-8 seller-name">
                                    <h1>Jam Tangan Casio</h1>
                                    <h4 class="price">Rp 250.000</h4>
                                </div>
                            </div>
                            <div className="input-harga my-4">
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
                                <Button className='button shadow-none button-kirim' onClick={
                                    () => { setShow(false); setAlertShow(true); setDisable(true) }
                                }
                                >
                                    <div className="btn-text">Kirim</div>
                                </Button>
                            </div>


                            {/* <div className="button button-kirim">
                            <Button onClick={AlertDismissibleExample}>
                                Kirim
                            </Button>
                        </div> */}
                        </div>

                    </Modal.Body>
                </Modal>
            </div>





        </>

    )
}


export default Buyer