import React from 'react'

export default class MobileNavBar extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <nav id="navbarMobileDest" class="navbar navbar-fixed-top navbar-pangea navbar-destinations navbar-destinations-movile hidden-lg-up">
              <div class="navbar-section col-xs-5"> <a href="https://www.pangea.es/" alt="Inicio Pangea">
              <img class="middle-align navbar-img img-fluid" alt="Logo pangea" title="Logo pangea" data-src="https://www.pangea.es/web/img/pangea-horizontal-white.png.pagespeed.ce.Id3Tt_TBtk.png"/></a></div>
              <div class="navbar-actions col-xs-7">
                <div class="navbar-section toggle-mobile-menu" data-toggle="collapse" data-parent="#navbarMobile"
                  href="#collapseMenuDest" aria-expanded="true" aria-controls="collapseMenu"><span
                    class="navbar-icon fa fa-bars"></span><span class="hidden navbar-icon fa fa-close"></span></div>
                <div class="navbar-section search-nav"><a href="https://www.pangea.es/ES/search" alt="Búsqueda"><span
                      class="navbar-icon fa fa-search"></span></a></div>
                <div class="navbar-section contact-nav" alt="Contacto"><a href="https://www.pangea.es/ES/telefono-pangea"><span
                      class="navbar-icon fa fa-phone"></span></a></div>
              </div>
              <div class="clearfix"></div>
              <ul id="collapseMenuDest" class="pangea-list list-menu-dest collapse" role="tablist" aria-multiselectable="true">
                <div class="list-main-menu" id="accordion-list">
                  <div class="card"><a href="">
                      <li class="list-menu collapsed" data-toggle="collapse" data-parent="#accordion-list" href="#listMenu-0"
                        aria-expanded="false"> <span class="title-lg">Destinos</span>
                        <div class="toggle-list"><span class="closed fa fa-angle-down"></span><span
                            class="opened fa fa-angle-up hidden"></span></div>
                      </li>
                    </a>
                    <ul id="listMenu-0" class="submenu-collapse collapse" aria-expanded="false">
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-0"> <a
                          href="https://www.pangea.es/es/viaje-a/asia"><span class="title-category">Asia</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-0" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/asia">Asia</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/butan">Bután</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/camboya">Camboya</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/china">China</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/emiratos-arabes-unidos">Emiratos Árabes</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/filipinas">Filipinas</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/india">India</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/indonesia">Indonesia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/israel">Israel</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/japon">Japón</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/jordania">Jordania</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/laos">Laos</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/libano">Líbano</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/malasia">Malasia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/maldivas">Maldivas</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/mongolia">Mongolia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/birmania-myanmar">Myanmar</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/nepal">Nepal</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/sri-lanka">Sri Lanka</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/tailandia">Tailandia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/uzbekistan">Uzbekistán</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/asia/vietnam">Vietnam</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-1"> <a
                          href="https://www.pangea.es/es/viaje-a/norteamerica"><span
                            class="title-category">Norteamérica</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-1" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/norteamerica">Norteamérica</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/canada">Canadá</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos">Estados Unidos</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/mexico">México</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-2"> <a
                          href="https://www.pangea.es/es/viaje-a/africa"><span class="title-category">África</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-2" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/africa">África</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/botsuana">Botsuana</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/egipto">Egipto</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/kenia">Kenia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/madagascar">Madagascar</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/marruecos">Marruecos</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/mauricio">Mauricio</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/namibia">Namibia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/santo-tome-y-principe">Santo Tomé y
                                Príncipe</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/sudafrica">Sudáfrica</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/tanzania">Tanzania</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/tunez">Túnez</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/africa/uganda">Uganda</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-3"> <a
                          href="https://www.pangea.es/es/viaje-a/latinoamerica"><span
                            class="title-category">Latinoamérica</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-3" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/latinoamerica">Latinoamérica</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/argentina">Argentina</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/brasil">Brasil</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/chile">Chile</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/colombia">Colombia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/costa-rica">Costa Rica</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/cuba">Cuba</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/ecuador">Ecuador</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/guatemala">Guatemala</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/latinoamerica/peru">Perú</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-4"> <a
                          href="https://www.pangea.es/es/viaje-a/europa"><span class="title-category">Europa</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-4" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/europa">Europa</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/croacia">Croacia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/escocia">Escocia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/espa%C3%B1a">España</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/francia">Francia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/grecia">Grecia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/inglaterra">Inglaterra</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/islandia">Islandia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/italia">Italia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/noruega">Noruega</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/polonia">Polonia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/rumania">Rumanía</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/suecia">Suecia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/europa/turquia">Turquía</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-0-5"> <a
                          href="https://www.pangea.es/es/viaje-a/pacifico"><span class="title-category">Pacífico</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-0-5" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Destinos</div>
                        <div class="card list-submenu2"> <span class="title-category"><a
                              href="https://www.pangea.es/es/viaje-a/pacifico">Pacífico</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/australia">Australia</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/fiyi">Islas Fiji</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/islas-cook">Islas Cook</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/nueva-zelanda">Nueva Zelanda</a></li>
                            <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/polinesia-francesa">Polinesia Francesa</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div class="card"><a href="">
                      <li class="list-menu collapsed" data-toggle="collapse" data-parent="#accordion-list" href="#listMenu-1"
                        aria-expanded="false"> <span class="title-lg">Estilos de viaje</span>
                        <div class="toggle-list"><span class="closed fa fa-angle-down"></span><span
                            class="opened fa fa-angle-up hidden"></span></div>
                      </li>
                    </a>
                    <ul id="listMenu-1" class="submenu-collapse collapse" aria-expanded="false">
                      <li class="category-detail open-submenu2li" href="#listSubMenu-1-0"> <a><span
                            class="title-category">¿Cuándo quieres viajar?</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-1-0" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Estilos de viaje</div>
                        <div class="card list-submenu2"> <span class="title-category"><a>¿Cuándo quieres viajar?</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/experiencias/verano">Verano</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/otono">Otoño</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/invierno">Invierno</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/primavera">Primavera</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-1-1"> <a><span
                            class="title-category">Fechas especiales</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-1-1" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Estilos de viaje</div>
                        <div class="card list-submenu2"> <span class="title-category"><a>Fechas especiales</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/experiencias/semana-santa">Semana Santa</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-1-2"> <a><span class="title-category">¿Con
                            quién viajas?</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-1-2" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Estilos de viaje</div>
                        <div class="card list-submenu2"> <span class="title-category"><a>¿Con quién viajas?</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/experiencias/"></a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/en-familia">En familia</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/en-pareja">En pareja</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/con-amigos">Con amigos</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/en-grupo">En grupo</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/viajar-solo">Viajar solo</a></li>
                          </ul>
                        </div>
                      </div>
                      <li class="category-detail open-submenu2li" href="#listSubMenu-1-3"> <a><span class="title-category">Tipos
                            de viaje</span></a>
                        <div class="open-submenu2"><span class="fa fa-chevron-right"></span></div>
                        <div class="clearfix"></div>
                      </li>
                      <div id="listSubMenu-1-3" class="submenu2 hidden">
                        <div class="card back"><span class="fa fa-chevron-left"></span> Estilos de viaje</div>
                        <div class="card list-submenu2"> <span class="title-category"><a>Tipos de viaje</a></span>
                          <ul>
                            <li> <a href="https://www.pangea.es/ES/experiencias/playas-del-mundo">Playas del mundo</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/islas-del-mundo">Islas del mundo</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/safaris">Safaris</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-autor">Viajes de autor</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/fly-drive">Fly &amp; drive</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-lujo">Viajes de lujo</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/"></a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza">Aventura y naturaleza</a>
                            </li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/urban">Urban</a></li>
                            <li> <a href="https://www.pangea.es/ES/experiencias/cruceros">Cruceros</a></li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div class="card"><a href="">
                      <li class="list-menu collapsed" data-toggle="collapse" data-parent="#accordion-list" href="#listMenu-2"
                        aria-expanded="false"> <span class="title-lg">¿Qué es Pangea?</span>
                        <div class="toggle-list"><span class="closed fa fa-angle-down"></span><span
                            class="opened fa fa-angle-up hidden"></span></div>
                      </li>
                    </a>
                    <ul id="listMenu-2" class="submenu-collapse collapse" aria-expanded="false">
                      <li class="category-detail open-submenu2li"> <a href="https://www.pangea.es/ES/que-es-pangea"><span
                            class="title-category">Conócenos</span></a></li>
                      <li class="category-detail open-submenu2li"> <a
                          href="https://www.pangea.es/ES/the-travel-store-madrid"><span class="title-category">Tienda
                            Madrid</span></a></li>
                      <li class="category-detail open-submenu2li"> <a
                          href="https://www.pangea.es/ES/the-travel-store-barcelona"><span class="title-category">Tienda
                            Barcelona</span></a></li>
                      <li class="category-detail open-submenu2li"> <a
                          href="https://www.pangea.es/ES/nuestros-especialistas"><span
                            class="title-category">Asesores</span></a></li>
                    </ul>
                  </div>
                  <div class="card"><a href="https://www.pangea.es/es/imperdibles">
                      <li class="list-menu"> <span class="title-lg">Imperdibles</span></li>
                    </a></div>
                  <div class="card"><a href="https://www.pangea.es/agenda/">
                      <li class="list-menu"> <span class="title-lg">Agenda</span></li>
                    </a></div>
                  <div class="card"><a href="https://www.pangea.es/ES/presupuesto-viaje">
                      <li class="list-menu"> <span class="title-lg">PRESUPUESTO GRATUITO</span></li>
                    </a></div>
                  <div class="card"><a href="https://blog.pangea.es/">
                      <li class="list-menu"> <span class="title-lg">BLOG PANGEA</span></li>
                    </a></div>
                  <div class="card"><a href="https://doityourself.pangea.es/" target="_new" alt="Diséñalo tú mismo">
                      <li class="list-menu"> <span class="title-lg">Diséñalo tú mismo</span></li>
                    </a></div>
                </div>
                <div class="list-contact-menu">
                  <li class="list-menu contact"> <span class="title-md">Información y reservas</span>
                    <div class="clearfix"></div> <span class="title-lg"><a class="only-mobile" href="tel:91 083 79 76">91 083 79
                        76</a></span><br/> <span class="title-lg"><a class="only-mobile" href="tel:93 018 51 23">93 018 51
                        23</a></span>
                  </li>
                  <li class="list-menu contact"> <span class="title-md">Escríbenos por Whatsapp</span>
                    <div class="clearfix"></div> <span class="title-lg"><a class="only-mobile"
                        href="https://api.whatsapp.com/send?phone=34682804429&amp;text=Hola%20Pangea">682 80 44 29</a></span>
                  </li>
                </div>
                <div class="list-login-menu">
                  <li class="list-menu login"><a data-toggle="modal" data-target="#ModalLogin" class="login-item">
                      <div>Entrar</div>
                    </a><a href="https://www.pangea.es/ES/register" class="login-item">
                      <div>Registrarse</div>
                    </a></li>
                </div>
              </ul>
            </nav>
        );
    }
}