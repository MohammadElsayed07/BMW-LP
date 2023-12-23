import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import style from './footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start">
                <div className="social" style={{ backgroundColor: '#D3D3D3' }}>
                    <section className={style.footerSection}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-7 col-lg-8 text-center text-md-start order-md-1'></div>
                                <div className='col-md-5 col-lg-4 order-md-2'>
                                    <section className={style.social}>
                                        <a className="btn btn-floating m-2 text-gray" role="button"><i className="fa-brands fa-youtube"></i></a>
                                        <a className="btn btn-floating m-2 text-gray" role="button"><i className="fa-brands fa-instagram"></i></a>
                                        <a className="btn btn-floating m-2 text-gray" role="button"><i className="fab fa-facebook-f"></i></a>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} />

                    <section className={style.explore}>
                        <div className='container'>
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-2">
                                    Explore BMW
                                </div>
                                <div className="p-2">
                                    <text>Sitemop</text>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <hr className="my-0" />
                <div className="container p-3">
                    <div className='row'>
                        <div className='col-md-7 col-lg-8 text-center text-md-start order-md-1' style={{fontSize:'14px'}}>
                            © Global Auto Egypt 2023
                        </div>
                        <div className='col-md-5 col-lg-4 order-md-2'>
                            <a href="#terms-of-use" className={style.link}>Terms of Use</a>
                            <a href="#imprint" className={style.link}>Imprint</a>
                            <a href="#legal-disclaimer" className={style.link}>BMW Egypt: Legal Disclaimer</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
