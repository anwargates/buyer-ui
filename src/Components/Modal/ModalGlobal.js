import React from "react";
import "./modalglobal.css";



const ModalGlobal = (props) => {
    // const [first, setfirst] = useState(second);
    function clickHandler(param) {
        switch(param) {
          case 1:
            return (props.onHide());
            case 1:
            return (props.onHide());
          default:
            return (props.onHide());
        }
      }      

    return (
        <>
            <Modal
            {...props}
                // show={props}
                // className="modal-buyer"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-xs-12">
                        <div className="row-modal">
                            <h1>
                                {/* Masukkan Harga Tawarmu */}
                                {props.titleModal}
                            </h1>
                            <p>
                                {/* Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual. */}
                                {props.descModal}
                            </p>
                        </div>
                        <div className="row-modal-item">

                            <div class="col-4 profile">
                                <Link to="/"><img class="" src={props.imgSource} alt="" /></Link>
                            </div>
                            <div class="col-8 seller-name">
                                <h1>
                                    {/* Jam Tangan Casio */}
                                    {props.judulProduk}
                                </h1>
                                <h4 class="price">
                                    {/* Rp 250.000 */}
                                    {props.hargaProduk}
                                </h4>
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
                                () => { props.onHide(); props.alertOnHide(); props.disableOnHide() }
                            }
                            >
                                <div className="btn-text">Kirim</div>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalGlobal