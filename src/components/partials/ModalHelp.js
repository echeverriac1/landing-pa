import React from 'react'
import $ from "jquery";

export default class ModalHelp extends React.Component {
    constructor(props){
        super(props)
    }
    
    closeModal(){
        $(document).ready(function(){
            $('#modal').slideDown(500).fadeOut(500);
            $('#data-togle').slideUp( 30 ).delay( 80 ).fadeIn( 10 );
        }) 
    }
    
    handleModal(){
        $(document).ready(function(){
            $('#data-togle').slideUp( 30 , "linear");
            $('#modal').slideUp( 280 ).delay( 200 ).fadeIn( 90 );
        })
    }
    
    render(){
        return(
            <div id="vozitel" className="cookies-margin">
                <div id="modal" class="visible-form fade-in-top">
                  <div class="form-header">
                    <div class="form-title">¿Necesitas ayuda?</div>
                    <div class="close-form" onClick={this.closeModal}>×</div>
                  </div>
                  <div class="form">
                    <form id="vozitel-form"> <input type="hidden" value="click2call" name="support_type" id="support_type"/>
                      <div class="form-row two-items"> 
                        <input type="text" name="name" placeholder="Nombre *"
                          class="form-control input-pangea  " required=""/> 
                        <input type="text" name="surname"
                          placeholder="Apellidos *" class="form-control input-pangea  " required=""/>
                    </div>
                    <div class="form-row two-items"> 
                        <input type="email" name="email" placeholder="Email *"
                          class="form-control input-pangea  " required=""/> 
                        <input type="tel" name="phone" placeholder="Teléfono *"
                          class="form-control input-pangea  " pattern="(9|8|7|6)[0-9]{8}$" required=""/>
                    </div>
                    <div class="form-row hidden" id="support_time"> 
                        <select name="call-when" class="form-control input-pangea ">
                          <option value="" selected="selected">¿Cuándo prefieres que te llamemos?</option>
                          <option value="09:00">9:00 a 14:00</option>
                          <option value="14:00">14:00 a 16:00</option>
                          <option value="16:00">16:00 a 19:00</option>
                          <option value="19:00">19:00 a 21:00</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <input id="lea_newsletter_vozitel" class="lea_newsletter css-checkbox hidden"
                          type="checkbox" name="lea_newsletter" value="false" data-parsley-multiple="lea_newsletter" />
                        
                          <label
                          class="white-label lea_newsletter" for="lea_newsletter_vozitel">Acepto recibir informacion comercial y
                          ofertas exclusivas de PANGEA
                          </label>
                    </div> 
                    <button class="btn btn-block submit-form waves-effect waves-light" id="click-to-call">
                        <span class="ico-btn fa fa-phone"></span> <span class="text">Te llamamos gratis</span>
                    </button>
                    </form>
                  </div>
                  <div class="loading-form"><span class="fa fa-spin fa-spinner"></span></div>
                  <div class="success">
                    <div class="title">Gracias por contactar con <strong>PANGEA</strong></div>
                    <div class="description">Muy pronto uno de nuestros asesores expertos se pondrá en contacto contigo.
                      Nuestro horario es de lunes a viernes de 09:00 a 21:00</div>
                    <div class="btn btn-outline-white close-vozitel waves-effect waves-light">Seguir buscando viajes</div>
                  </div>
                  <div class="error">
                    <div class="description">Se ha producido un error, por favor, vuelve a intentarlo.</div>
                  </div>
                  <div class="background"></div>
                </div>
                <div id="data-togle" class="action-button slide-in-bottom" style={{display: "block"}} onClick={this.handleModal}>
                  <div class="close-vozitel">×</div>
                  <div class="btn btn-block waves-effect waves-light"><span className="ico-btn fa fa-phone"></span> <span
                      class="text">Te llamamos gratis</span></div>
                </div>
              </div>    
            
        );
    }
}