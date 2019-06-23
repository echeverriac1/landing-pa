import React from 'react'
import '../../public/assets/css/A.css'

export default class landing extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <nav class="navbar navbar-fixed-top navbar-destinations hidden-md-down">
              <div class="dest-menu-top">
                <a data-toggle="modal" data-target="#ModalLogin" rel="nofollow">
                  <div class="dest-menu-top-item">
                    <span>
                      <span class="fa fa-user-o" aria-hidden="true">
        
                      </span> Entrar en tu cuenta</span>
                  </div>
                </a>
                <a href="https://www.pangea.es/blog/" target="_new" alt="Blog Pangea">
                  <div class="dest-menu-top-item">
                    <span>Blog Pangea</span>
                  </div>
                </a>
                <a href="https://doityourself.pangea.es/" target="_new" alt="Diséñalo tú mismo">
                  <div class="dest-menu-top-item mark-menu-top">
                    <span>Diséñalo tú mismo</span>
                  </div>
                </a>
                <a href="https://www.pangea.es/ES/presupuesto-viaje" rel="nofollow">
                  <div class="dest-menu-top-item mark-menu-top-primary"><span>Presupuesto gratuito</span></div>
                </a></div>
              <div class="dest-menu">
                <div class="section-nav left-menu"> <a href="https://www.pangea.es/">
                <img class="navbar-img img-fluid"
                      alt="Logo pangea" title="Logo pangea"
                      data-src="https://www.pangea.es/web/img/logo-header.png.pagespeed.ce.L1cAmHTeZM.png"
                      src="pangeas_files/logo-header.png"/></a></div>
                <div class="section-nav center-menu">
                  <div class="navigation-dest-navbar">
                    <div class="item-navigation-dest">
                      <div class="item-navigation-dest-menu"><a href="https://www.pangea.es/es/destinos">
                          <div class="title"><span class="closed fa fa-angle-down"></span><span
                              class="opened fa fa-angle-up hidden"></span> <span>Destinos</span></div>
                        </a></div>
                      <div class="item-navigation-dest-submenu hidden">
                        <div class="submenu-separator"></div>
                        <div class="dest-submenu-content col-sm-9">
                          <div class="col-content col-sm-6">
                            <div class="dest-submenu-title"> Viajes por el Mundo</div>
                            <div class="dest-submenu-list">
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/asia" class="dest-submenu-subtitle">Asia</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/asia/butan">Bután</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/asia/camboya">Camboya</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/asia/china">China</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/asia/emiratos-arabes-unidos">Emiratos Árabes</a>
                                </li>
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
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/norteamerica"
                                    class="dest-submenu-subtitle">Norteamérica</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/canada">Canadá</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos">Estados Unidos</a>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/norteamerica/mexico">México</a></li>
                              </ul>
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/africa" class="dest-submenu-subtitle">África</a>
                                </li>
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
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/latinoamerica"
                                    class="dest-submenu-subtitle">Latinoamérica</a></li>
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
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa" class="dest-submenu-subtitle">Europa</a>
                                </li>
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
                              <ul>
                                <li> <a href="https://www.pangea.es/es/viaje-a/pacifico"
                                    class="dest-submenu-subtitle">Pacífico</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/australia">Australia</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/fiyi">Islas Fiji</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/islas-cook">Islas Cook</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/nueva-zelanda">Nueva Zelanda</a></li>
                                <li> <a href="https://www.pangea.es/ES/viaje-a/pacifico/polinesia-francesa">Polinesia
                                    Francesa</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="dest-submenu-bottom"> <a href="https://www.pangea.es/es/destinos"
                              class="btn btn-sm btn-sec waves-effect waves-light">Ver todos los destinos</a></div>
                          <div class="col-content col-sm-3 col-med-space">
                            <div class="dest-submenu-title"> Escapadas por España</div>
                            <div class="dest-submenu-list">
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle"></div>
                                </li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/andalucia">Andalucía</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/aragon">Aragón</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/asturias">Asturias</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/cantabria">Cantábria</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/castilla-la-mancha">Castilla -
                                    La Mancha</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/castilla-y-leon">Castilla y
                                    León</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/catalu%C3%B1a">Cataluña</a>
                                </li>
                                <li> <a
                                    href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/comunidad-valenciana">Comunidad
                                    Valenciana</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/extremadura">Extremadura</a>
                                </li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/galicia">Galicia</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/islas-baleares">Islas
                                    Baleares</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/islas-canarias">Islas
                                    Canarias</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/la-rioja">La Rioja</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/madrid">Madrid</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/murcia">Murcia</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/navarra">Navarra</a></li>
                                <li> <a href="https://www.pangea.es/es/viaje-a/europa/espa%C3%B1a/pais-vasco">País Vasco</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-content col-sm-3 hidden-lg-down col-small-space">
                            <div class="dest-submenu-title"> Destacados</div>
                            <div class="dest-submenu-list">
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle"></div>
                                </li>
                                <li> <a href=""></a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/nieve">Nieve</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/lunas-de-miel">Lunas de miel</a></li>
                                <li> <a href=""></a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza">Aventura y
                                    Naturaleza</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-autor">Viajes de Autor</a></li>
                                <li> <a href=""></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="dest-submenu-promo col-sm-3">
                          <div class="dest-submenu-promo-item img-over-card"><a
                              href="https://www.pangea.es/ES/viaje-a/asia/vietnam" class="img-over-wrapper">
                              <div class="over-img">
                                <div class="middle-align"> <span class="title">Vietnam</span></div>
                              </div>
                              <div class="card-img"> <img class="img-fluid"
                                  data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/30/vietnam-menu-min.jpg"
                                  src="pangeas_files/vietnam-menu-min.jpg"/></div>
                            </a></div>
                          <div class="dest-submenu-promo-item img-over-card"><a
                              href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos" class="img-over-wrapper">
                              <div class="over-img">
                                <div class="middle-align"> <span class="title">Estados Unidos</span></div>
                              </div>
                              <div class="card-img"> <img class="img-fluid"
                                  data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/31/estados-unidos-menu-min.jpg"
                                  src="pangeas_files/estados-unidos-menu-min.jpg"/></div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-navigation-dest">
                      <div class="item-navigation-dest-menu"><a href="https://www.pangea.es/es/experiencias">
                          <div class="title"><span class="closed fa fa-angle-down"></span><span
                              class="opened fa fa-angle-up hidden"></span> <span>Estilos de viaje</span></div>
                        </a></div>
                      <div class="item-navigation-dest-submenu hidden">
                        <div class="submenu-separator"></div>
                        <div class="dest-submenu-content col-sm-9">
                          <div class="col-content col-sm-8">
                            <div class="dest-submenu-title"> Viajes por el Mundo</div>
                            <div class="dest-submenu-list">
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">¿Cuándo quieres viajar?</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/verano">Verano</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/otono">Otoño</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/invierno">Invierno</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/primavera">Primavera</a></li>
                              </ul>
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">Fechas especiales</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/semana-santa">Semana Santa</a></li>
                              </ul>
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">¿Con quién viajas?</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/"></a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/en-familia">En familia</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/en-pareja">En pareja</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/con-amigos">Con amigos</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/en-grupo">En grupo</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/viajar-solo">Viajar solo</a></li>
                              </ul>
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">Tipos de viaje</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/playas-del-mundo">Playas del mundo</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/islas-del-mundo">Islas del mundo</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/safaris">Safaris</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-autor">Viajes de autor</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/fly-drive">Fly &amp; drive</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-lujo">Viajes de lujo</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/"></a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza">Aventura y
                                    naturaleza</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/urban">Urban</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/cruceros">Cruceros</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="dest-submenu-bottom"> <a href="https://www.pangea.es/ES/experiencias"
                              class="btn btn-sm btn-sec waves-effect waves-light">Ver otras ideas de viajes</a></div>
                          <div class="col-content col-sm-3 col-med-space">
                            <div class="dest-submenu-title"> DESTACADOS</div>
                            <div class="dest-submenu-list">
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">SOMOS EXPERTOS EN</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/lunas-de-miel">Lunas de miel</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/nieve">Nieve</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza">Aventura y
                                    Naturaleza</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/viajes-de-autor">Viajes de autor</a></li>
                              </ul>
                              <ul>
                                <li>
                                  <div class="dest-submenu-subtitle">ESCAPADAS POR ESPAÑA</div>
                                </li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/gastronomia">Gastronomía</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/"></a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/romantico">Romántico</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/playas-espanolas">Playas españolas</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/islas-espanolas">Islas españolas</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/familiar">Familiar</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/naturaleza-y-aventura">Naturaleza y
                                    Aventura</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/bienestar">Bienestar</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/cultura">Cultura</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/espectaculos-y-eventos">Espectáculos y
                                    eventos</a></li>
                                <li> <a href="https://www.pangea.es/ES/experiencias/golf">Golf</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="dest-submenu-promo col-sm-3">
                          <div class="dest-submenu-promo-item img-over-card"><a
                              href="https://www.pangea.es/ES/experiencias/aventura-y-naturaleza" class="img-over-wrapper">
                              <div class="over-img">
                                <div class="middle-align"> <span class="title">Aventura y Naturaleza</span></div>
                              </div>
                              <div class="card-img"> <img class="img-fluid"
                                  data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/47/aventura-y-naturaleza-big-menu.jpg"
                                  src="pangeas_files/aventura-y-naturaleza-big-menu.jpg"/></div>
                            </a></div>
                          <div class="dest-submenu-promo-item img-over-card"><a
                              href="https://www.pangea.es/l/tarjeta-regalo-pangea/?utm_source=web&amp;utm_medium=SEO&amp;utm_campaign=inspirate_home"
                              class="img-over-wrapper">
                              <div class="over-img">
                                <div class="middle-align"> <span class="title">Tarjetas regalo</span></div>
                              </div>
                              <div class="card-img"> <img class="img-fluid"
                                  data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/46/tarjeta-regalo-pangea.jpg"
                                  src="pangeas_files/tarjeta-regalo-pangea.jpg"/></div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-navigation-dest">
                      <div class="item-navigation-dest-menu"><a href="https://www.pangea.es/ES/que-es-pangea">
                          <div class="title"><span class="closed fa fa-angle-down"></span><span
                              class="opened fa fa-angle-up hidden"></span> <span>¿Qué es Pangea?</span></div>
                        </a></div>
                      <div class="item-navigation-dest-submenu hidden">
                        <div class="submenu-separator"></div>
                        <div class="images-menu">
                          <div class="dest-submenu-content image-menu-item"><a href="https://www.pangea.es/ES/que-es-pangea">
                              <div class="col-content gallery">
                                <div class="dest-submenu-title">Conócenos</div>
                                <div class="dest-submenu-promo-item img-over-card">
                                  <div class="img-over-wrapper">
                                    <div class="over-img">
                                      <div class="middle-align"></div>
                                    </div>
                                    <div class="card-img"> <img class="img-fluid"
                                        data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/35/por-que-pangea-min.jpg"
                                        src="pangeas_files/por-que-pangea-min.jpg"/></div>
                                  </div>
                                </div>
                                <div class="block-where-cont">
                                  <p class="subtitle">Descubre por qué elegirnos</p>
                                </div>
                              </div>
                            </a></div>
                          <div class="dest-submenu-content image-menu-item"><a
                              href="https://www.pangea.es/ES/the-travel-store-madrid">
                              <div class="col-content gallery">
                                <div class="dest-submenu-title">Tienda Madrid</div>
                                <div class="dest-submenu-promo-item img-over-card">
                                  <div class="img-over-wrapper">
                                    <div class="over-img">
                                      <div class="middle-align"></div>
                                    </div>
                                    <div class="card-img"> <img class="img-fluid"
                                        data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/36/pangea-the-travel-store-peque-min.jpg"
                                        src="pangeas_files/pangea-the-travel-store-peque-min.jpg"/></div>
                                  </div>
                                </div>
                                <div class="block-where-cont">
                                  <p class="subtitle">Príncipe de Vergara, 26</p>
                                </div>
                              </div>
                            </a></div>
                          <div class="dest-submenu-content image-menu-item"><a
                              href="https://www.pangea.es/ES/the-travel-store-barcelona">
                              <div class="col-content gallery">
                                <div class="dest-submenu-title">Tienda Barcelona</div>
                                <div class="dest-submenu-promo-item img-over-card">
                                  <div class="img-over-wrapper">
                                    <div class="over-img">
                                      <div class="middle-align"></div>
                                    </div>
                                    <div class="card-img"> <img class="img-fluid"
                                        data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/38/300x200-tienda-bcn-big-menu-min.jpg"
                                        src="pangeas_files/300x200-tienda-bcn-big-menu-min.jpg"/></div>
                                  </div>
                                </div>
                                <div class="block-where-cont">
                                  <p class="subtitle">Rambla de Catalunya, 23</p>
                                </div>
                              </div>
                            </a></div>
                          <div class="dest-submenu-content image-menu-item"><a
                              href="https://www.pangea.es/ES/nuestros-especialistas">
                              <div class="col-content gallery">
                                <div class="dest-submenu-title">Asesores</div>
                                <div class="dest-submenu-promo-item img-over-card">
                                  <div class="img-over-wrapper">
                                    <div class="over-img">
                                      <div class="middle-align"></div>
                                    </div>
                                    <div class="card-img"> <img class="img-fluid"
                                        data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/ItemCustom/37/Asesores-madrid-min.jpg"
                                        src="pangeas_files/Asesores-madrid-min.jpg"/></div>
                                  </div>
                                </div>
                                <div class="block-where-cont">
                                  <p class="subtitle">Expertos en destinos y viajeros</p>
                                </div>
                              </div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-navigation-dest">
                      <div class="item-navigation-dest-menu"><a href="https://www.pangea.es/es/imperdibles">
                          <div class="title"> <span>Imperdibles</span></div>
                        </a></div>
                    </div>
                    <div class="item-navigation-dest">
                      <div class="item-navigation-dest-menu"><a href="https://www.pangea.es/agenda/">
                          <div class="title"><span class="closed fa fa-angle-down"></span><span
                              class="opened fa fa-angle-up hidden"></span> <span>Agenda</span></div>
                        </a></div>
                      <div id="submenu-agenda" class="item-navigation-dest-submenu hidden">
                        <div class="submenu-separator"></div>
                        <div class="dest-submenu-content">
                          <div class="agenda-store">
                            <div class="dest-submenu-title">Agenda Madrid</div>
                            <div class="agenda-event-navbar">
                              <div class="events"><a
                                  href="https://www.pangea.es/agenda/evento/celebramos-dia-internacional-del-yoga-una-sesion-especial-practica-bodymind-la-mano-holmes-place-mad/"
                                  class="event-card" target="_blank">
                                  <div class="event-data">
                                    <div class="date">
                                      <div class="day">21</div>
                                      <div class="month">JUN</div>
                                    </div>
                                    <div class="main-img"> <img
                                        data-src="https://www.pangea.es/agenda/wp-content/uploads/2019/06/xyoga-768x382.png.pagespeed.ic.QxYnGrlZwt.jpg"
                                        class="img-fluid" src="pangeas_files/xyoga-768x382.jpg"/></div>
                                    <div class="info">
                                      <div class="event-title">CELEBRAMOS EL DÍA INTERNACIONAL DEL YOGA CON UNA SESIÓN ESPECIAL
                                        DE PRÁCTICA BODY&amp;MIND DE LA MANO DE HOLMES PLACE</div>
                                      <div class="date-time">Viernes 21 de Junio, 19:00</div>
                                      <div class="description">Celebramos
                                        el Día Internacional del Yoga con una sesión especial de esta práctica
                                        body&amp;mind en la que contaremos con la presencia de uno de los
                                        expertos de Holmes Place, especialistas en la búsqueda del esti...</div>
                                    </div>
                                  </div>
                                </a><a href="https://www.pangea.es/agenda/evento/presentacion-libro-en-mi-regazo/"
                                  class="event-card" target="_blank">
                                  <div class="event-data">
                                    <div class="date">
                                      <div class="day">24</div>
                                      <div class="month">JUN</div>
                                    </div>
                                    <div class="main-img"> <img
                                        data-src="https://www.pangea.es/agenda/wp-content/uploads/2019/06/ximagen-1-768x382.png.pagespeed.ic.zuDyksY8fk.png"
                                        class="img-fluid" src="pangeas_files/ximagen-1-768x382.png"/></div>
                                    <div class="info">
                                      <div class="event-title">Presentación libro “En mi regazo”, de Gabriela de la Fuente</div>
                                      <div class="date-time">Lunes 24 de Junio, 19:00</div>
                                      <div class="description">Acting Art Editorial se complace en invitarte a la Presentación
                                        del libro “En mi regazo” de Gabriela de la Fuente.&nbsp;
                                        Intervendrán como ponentes la directora de cine Mabel Lozano, la escritora Laura Freixas
                                        y el...</div>
                                    </div>
                                  </div>
                                </a></div>
                            </div> <a href="https://www.pangea.es/agenda/eventos/categoria/pangea-madrid/" target="_blank"
                              class="btn btn-sec waves-effect waves-light">Agenda Madrid</a>
                          </div>
                          <div class="agenda-store">
                            <div class="dest-submenu-title">Agenda Barcelona</div>
                            <div class="agenda-event-navbar">
                              <div class="events"><a
                                  href="https://www.pangea.es/agenda/evento/especial-yoga-wanderlust-108-cuencos-tibetanos-dia-internacional-del-yoga-bcn/"
                                  class="event-card" target="_blank">
                                  <div class="event-data">
                                    <div class="date">
                                      <div class="day">21</div>
                                      <div class="month">JUN</div>
                                    </div>
                                    <div class="main-img"> <img
                                        data-src="https://www.pangea.es/agenda/wp-content/uploads/2019/06/xyoga-768x382.png.pagespeed.ic.QxYnGrlZwt.jpg"
                                        class="img-fluid" src="pangeas_files/xyoga-768x382.jpg"/></div>
                                    <div class="info">
                                      <div class="event-title">ESPECIAL YOGA WANDERLUST 108 CON CUENCOS TIBETANOS EN EL DÍA
                                        INTERNACIONAL DEL YOGA</div>
                                      <div class="date-time">Viernes 21 de Junio, 19:00</div>
                                      <div class="description">Celebramos
                                        el Día Internacional del Yoga con una sesión especial de esta práctica
                                        body&amp;mind en la que contaremos con la presencia de Clàudia Arias,
                                        profesora de yoga de Wanderlust 108.</div>
                                    </div>
                                  </div>
                                </a><a href="https://www.pangea.es/agenda/evento/el-limite-te-lo-pones-tu/" class="event-card"
                                  target="_blank">
                                  <div class="event-data">
                                    <div class="date">
                                      <div class="day">25</div>
                                      <div class="month">JUN</div>
                                    </div>
                                    <div class="main-img"> <img
                                        data-src="https://www.pangea.es/agenda/wp-content/uploads/2019/05/xfff-768x381.jpg.pagespeed.ic.jwFaenzupV.jpg"
                                        class="img-fluid" src="pangeas_files/xfff-768x381.jpg"/></div>
                                    <div class="info">
                                      <div class="event-title">“EL LÍMITE TE LO PONES TÚ”</div>
                                      <div class="date-time">Martes 25 de Junio, 18:00</div>
                                      <div class="description">“EL
                                        LÍMITE TE LO PONES TÚ”. Este es el lema de Alex Roca, un joven de 27
                                        años con una discapacidad física del 76% que arrastra desde los seis
                                        meses, pero con un objetivo muy claro: comerse el mundo....</div>
                                    </div>
                                  </div>
                                </a></div>
                            </div> <a href="https://www.pangea.es/agenda/eventos/categoria/pangea-barcelona/" target="_blank"
                              class="btn btn-sec waves-effect waves-light">Agenda Barcelona</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-nav right-menu">
                  <div class="contact-dest-navbar">
                    <div class="search-menu hidden-md-down">
                      <form id="form-search-menu" action="/ES/search" method="get" class=" waves-effect waves-light"> 
                            <input></input>
                          <span class="search-icon">
                          </span>
                      </form>
                    </div>
                    <div class="search-menu hidden-lg-up"><a href="https://www.pangea.es/ES/search" alt="Búsqueda"><span
                          class="fa fa-search" aria-hidden="true"></span></a></div>
                    <div class="contact-menu">
                      <div class="item-contact-dest">
                        <div class="title hidden-md-down"> <span>Información y reservas</span></div>
                        <div class="telephone hidden-md-down"> <span>910 837 976</span><br/> <span>930 185 123</span></div>
                        <div class="telephone hidden-lg-up"><span class="fa fa-phone" aria-hidden="true"></span></div><span
                          class="closed fa fa-angle-down"></span><span class="opened fa fa-angle-up"></span>
                      </div>
                      <div class="contact-submenu">
                        <div class="contact-submenu-list"><a href="#" class="contact-submenu-item  hidden-lg-up">
                            <div class="contact-submenu-titles"> <span class="title-sm">Atención al cliente</span> <span
                                class="title-lg">MAD 910 837 976</span><br/> <span class="title-lg">BCN 930 185 123</span></div>
                            <span class="fa fa-phone contact-submenu-icon" aria-hidden="true"></span>
                          </a><a href="https://www.pangea.es/ES/contacto" class="contact-submenu-item" rel="nofollow">
                            <div class="contact-submenu-titles"> <span class="title-sm">correo electronico</span> <span
                                class="title-lg">contacto@pangea.es</span></div><span
                              class="fa fa-envelope-o contact-submenu-icon" aria-hidden="true"></span>
                          </a><a a="" href="https://api.whatsapp.com/send?phone=34682804429&amp;text=Hola%20Pangea"
                            class="contact-submenu-item" rel="nofollow">
                            <div class="contact-submenu-titles"> <span class="title-sm">whatsapp</span> <span
                                class="title-lg">682 80 44 29</span></div><span class="fa fa-whatsapp contact-submenu-icon"
                              aria-hidden="true"></span>
                          </a><a href="https://www.pangea.es/ES/pedir-cita" class="contact-submenu-item" rel="nofollow">
                            <div class="contact-submenu-titles"> <span class="title-sm">ven a vernos</span> <span
                                class="title-lg">solicita cita previa</span></div><span
                              class="fa fa-calendar contact-submenu-icon" aria-hidden="true"></span>
                          </a><a href="https://www.pangea.es/ES/te-llamamos-gratis" class="contact-submenu-item" rel="nofollow">
                            <div class="contact-submenu-titles"> <span class="title-sm">hablamos</span> <span
                                class="title-lg">te llamamos gratis</span></div><span
                              class="pangea-icon-extra-support contact-submenu-icon" aria-hidden="true"></span>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            
        );
    }
}

