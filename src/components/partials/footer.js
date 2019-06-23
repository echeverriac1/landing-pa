import React from 'react'


export default class landing extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <footer>
                <section id="footer-links">
                    <div className="row">
                        <div className="footer-col col-xs-12 col-sm-6 col-md-3">
                        <div className="title">Regiones</div>
                        <ul className="links">
                            <li><a href="https://www.pangea.es/es/viaje-a/asia"> Asia</a></li>
                            <li><a href="https://www.pangea.es/es/viaje-a/europa"> Europa</a></li>
                            <li><a href="https://www.pangea.es/es/viaje-a/africa"> África</a></li>
                            <li><a href="https://www.pangea.es/es/viaje-a/latinoamerica"> Latinoamérica</a></li>
                            <li><a href="https://www.pangea.es/es/viaje-a/norteamerica"> Norteamérica</a></li>
                            <li><a href="https://www.pangea.es/es/viaje-a/pacifico"> Pacífico</a></li>
                        </ul>
                        </div>
                        <div className="footer-col col-xs-12 col-sm-6 col-md-3">
                        <div className="title">Destinos</div>
                        <ul className="links">
                            <li><a href="https://www.pangea.es/ES/viaje-a/asia/israel">Viaje a Israel</a></li>
                            <li><a href="https://www.pangea.es/ES/viaje-a/africa/tunez">Viaje a Túnez</a></li>
                            <li><a href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos">Viaje a Estados Unidos</a></li>
                            <li><a href="https://www.pangea.es/ES/viaje-a/latinoamerica/brasil">Viaje a Brasil</a></li>
                            <li><a href="https://www.pangea.es/ES/viaje-a/pacifico/nueva-zelanda">Viaje a Nueva Zelanda</a></li>
                            <li><a href="https://www.pangea.es/ES/viaje-a/asia/jordania">Viaje a Jordania</a></li>
                        </ul>
                        </div>
                        <div className="footer-col col-xs-12 col-sm-6 col-md-3">
                        <div className="title">Experiencias</div>
                        <ul className="links">
                            <li><a href="https://www.pangea.es/ES/experiencias/en-pareja"> En pareja</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/argentina"> Argentina</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/bienestar"> Bienestar</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/en-familia"> En familia</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/grecia"> Grecia</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/japon"> Japón</a></li>
                        </ul>
                        </div>
                        <div className="footer-col col-xs-12 col-sm-6 col-md-3">
                        <div className="title">Destacados</div>
                        <ul className="links">
                            <li><a href="https://www.pangea.es/ES/experiencias/nieve"> Nieve</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza"> Aventura y Naturaleza</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/viajes-de-autor"> Viajes de Autor</a></li>
                            <li><a href="https://www.pangea.es/ES/experiencias/lunas-de-miel"> Lunas de miel</a></li>
                        </ul>
                        </div>
                    </div>
                    </section>

                
                <section className="pangea-footer presupuesto">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-3 img-parent"> <a href="https://www.pangea.es/"><img className="img-footer"
                            src="../../assets/images/logo-header.png"/></a>
                        </div>
                        <div className="col-xs-12 col-md-4 col-lg-3">
                        <h3>INFORMACIÓN</h3>
                        <ul>
                            <li><a href="https://www.pangea.es/ES/condiciones" rel="nofollow">Condiciones generales</a></li>
                            <li><a href="https://www.pangea.es/ES/privacidad" rel="nofollow">Política de privacidad</a></li>
                            <li><a href="https://www.pangea.es/ES/cookies" rel="nofollow">Política de Cookies</a></li>
                            <li><a href="https://www.pangea.es/ES/faqs" rel="nofollow">Preguntas frecuentes</a></li>
                            <li><a href="https://www.pangea.es/ES/contacto" rel="nofollow noindex">Contacto</a></li>
                        </ul>
                        </div>
                        <div className="col-xs-12 col-md-4 col-lg-3">
                        <h3>MÁS SOBRE NOSOTROS</h3>
                        <ul>
                            <li><a href="https://www.pangea.es/ES/que-es-pangea">Quiénes somos</a></li>
                            <li><a href="https://www.pangea.es/ES/the-travel-store-madrid">Tienda Madrid</a></li>
                            <li><a href="https://www.pangea.es/ES/the-travel-store-barcelona">Tienda Barcelona</a></li>
                            <li><a href="https://www.pangea.es/ES/unete-a-nosotros" rel="nofollow noindex">¿Quieres unirte a
                                nosotros?</a></li>
                            <li><a href="https://www.pangea.es/ES/proveedores" rel="nofollow noindex">¿Quieres ser nuestro partner?</a>
                            </li>
                            <li><a href="https://www.pangea.es/l/celebra-tu-evento-en-pangea/">Eventos Store</a></li>
                        </ul>
                        </div>
                        <div className="col-xs-12 col-md-4 col-lg-3 social-footer newsletter">
                        <h3>NEWSLETTER</h3>
                        <form id="leads-footer-newsletter" name="leads-footer-newsletter" method="post" action=""
                            data-parsley-validate="" novalidate="">
                            <div className="md-form"> <input type="email" name="email-newsletter-footer" id="email-newsletter-footer"
                                className="form-control input-pangea " data-parsley-trigger="focusout" required=""
                                data-parsley-required-message="Campo obligatorio." data-parsley-type="email"
                                data-parsley-type-message="Formato de E-Mail incorrecto."/> <label className="white-label"
                                for="email-newsletter-footer">Escribe tu email</label> <label className="white-label lea_newsletter">Acepto
                                la <a className="lea_newsletter" target="_blank" href="https://www.pangea.es/ES/privacidad">política de
                                privacidad</a> y <a className="lea_newsletter" target="_blank"
                                href="https://www.pangea.es/ES/condiciones">condiciones generales</a>.</label> <input
                                id="lea_newsletter_footer" className="lea_newsletter css-checkbox" type="checkbox" name="lea_newsletter"
                                data-parsley-required="true" data-parsley-trigger="click" value="false"
                                data-parsley-required-message="Campo obligatorio." data-parsley-multiple="lea_newsletter"/> <label
                                className="white-label lea_newsletter" for="lea_newsletter_footer">Acepto recibir informacion comercial y
                                ofertas exclusivas de PANGEA</label></div> <button type="submit" rel="nofollow"
                            className="btn btn-outline-white btn-xs btn-right waves-effect waves-light">Suscribirme</button>
                            <div className="loader-submit-white hidden"><span className="fa fa-spin fa-spinner"></span></div>
                        </form>
                        <div id="succes-msg" className="footer-newsletter">
                            <div className="alert alert-footer alert-dismissible" role="alert"> <button type="button" className="close"
                                data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>¡Gracias por
                                suscribirte!</strong> Ahora recibirás nuestras novedades en tu correo</div>
                        </div>
                        <ul className="inline-social">
                            <li><a href="https://www.facebook.com/pangeaesp/" alt="Facebook Pangea" target="_blank" rel="nofollow"><span
                                className="fa fa-facebook-official" aria-hidden="true"></span></a></li>
                            <li><a href="https://www.instagram.com/PangeaES/" alt="Instagram Pangea" target="_blank"
                                rel="nofollow"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
                            <li><a href="https://twitter.com/PangeaES" alt="Twitter Pangea" target="_blank" rel="nofollow"><span
                                className="fa fa-twitter" aria-hidden="true"></span></a></li>
                            <li><a href="https://www.youtube.com/channel/UCfRNl6be5zEzpbBerPM1-nw" alt="YouTube Pangea" target="_blank"
                                rel="nofollow"><span className="fa fa-youtube" aria-hidden="true"></span></a></li>
                            <li><a href="https://www.pangea.es/blog/" target="_blank" alt="Blog Pangea"><span className="fa fa-bookmark"
                                aria-hidden="true"></span></a></li>
                        </ul>
                        </div>
                    </div>
                </section>


                <section className="second-footer module">
                    <div className="inner">
                        <ul>
                            <li> <span className="iata">&nbsp;</span> <span className="visa">&nbsp;</span> <span className="mastercard">&nbsp;</span>
                                <span className="american">&nbsp;</span> <span className="paypal">&nbsp;</span> <span
                                className="confianza">&nbsp;</span> <span className="ministerio one">&nbsp;</span> <span
                                className="enisa one">&nbsp;</span> <span className="cert one">&nbsp;</span></li>
                            <li> <a href="https://itunes.apple.com/us/app/pangea-travel-store/id1045621316?l=es&amp;ls=1&amp;mt=8"
                                className="no-mobile" target="_blank" alt="iTunes Pangea"><span className="appstore">&nbsp;</span></a> <a
                                href="https://play.google.com/store/apps/details?id=com.pangea.travel" className="no-mobile" target="_blank"
                                alt="Google Play Pangea"><span className="googleplay">&nbsp;</span></a> <a
                                href="https://play.google.com/store/apps/details?id=com.pangea.travel" className="no-desktop"
                                alt="Google Play Pangea"><span className="googleplay">&nbsp;</span></a> <a
                                href="https://itunes.apple.com/us/app/pangea-travel-store/id1045621316?l=es&amp;ls=1&amp;mt=8"
                                className="no-desktop" alt="iTunes Pangea"><span className="appstore">&nbsp;</span></a> <span
                                className="ministerio two">&nbsp;</span> <span className="enisa two">&nbsp;</span> <span
                                className="cert two">&nbsp;</span></li>
                        </ul>
                        <p className="legal">
                        Viajes de autor, S.L. CICMA Nº 3099. Inscrita en el Registro Mercantil
                        de Madrid al Tomo 32.089, Folio 189, Hoja M-577512, CIF B-86980703. Con
                        domicilio social en Calle Príncipe de Vergara, 26, CP. 28001 Madrid
                        (España).Tel. 902 111 188 / 910837976.<br/><br/>Pangea dispone de un
                        sistema de gestión de la calidad certificado de acuerdo a la norma
                        UNE-EN-ISO 900x, UNE-EN-ISO 9001 por OCA CERT.</p>
                    </div>
                </section>
            </footer>
        );
    }
}