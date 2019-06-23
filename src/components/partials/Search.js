import React from 'react'

export default class Luna extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
            <section class="new-search new-search-v2 is-home">
              <div class="module search-box-container">
                <form id="search_swiper_home" action="/ES/search" method="get">
                  <div class="col-xs-12 col-lg-8 offset-lg-2 super-box-cont">
                    <div class="row">
                      <div class="col-xs-12 col-sm-7 offset-sm-0 col-lg-7 offset-lg-0 col-xl-8 offset-xl-0 search-input"> 
                      <input
                          class="search-home is-sphere" type="text" placeholder="¿A dónde quieres viajar?" name="q"
                          id="search-home"/></div>
                      <div class="col-xs-12 col-sm-5 col-lg-5 col-xl-4 search-button"> <button type="submit"
                          class="btn btn-search btn-block btn-primary semi-tall waves-effect waves-light"
                          data-action="none">Buscar</button></div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section id="section-travellers-xl">
              <div class="content-travellers-xl">
                <div class="title-section">
                  <h2 class="title">Mucho más que una agencia de viajes</h2>
                </div>
                <div class="items-travellers-xl">
                  <div class="item-travellers-xl">
                    <div class="item-content">
                      <div class="item-img"><img data-src="/web/img/inspirate-icon.png.pagespeed.ce.fcbE4TM9jh.png"
                          src={"../../assets/images/inspirate-icon.png"}/></div>
                      <div class="item-text-cont">
                        <div class="item-title">Inspírate</div>
                        <div class="item-text">Miles de metros cuadrados dedicados a tu pasión y a la nuestra: viajar.</div>
                      </div>
                    </div>
                  </div>
                  <div class="item-travellers-xl">
                    <div class="item-content">
                      <div class="item-img"><img data-src="/web/img/conoce-icon.png.pagespeed.ce.MKEDi0jP1B.png"
                          src={"../../assets/images/conoce-icon.png"} /></div>
                      <div class="item-text-cont">
                        <div class="item-title">Conoce</div>
                        <div class="item-text">Somos especialistas en viajeros y te ayudamos diseñar el viaje de tus sueños
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-travellers-xl">
                    <div class="item-content">
                      <div class="item-img"><img data-src="/web/img/viaja-icon.png.pagespeed.ce.EHiFiH4Wbi.png"
                          src={"../../assets/images/viaja-icon.png"} /></div>
                      <div class="item-text-cont">
                        <div class="item-title">Viaja</div>
                        <div class="item-text">Hemos recorrido miles de kilómetros para descubrirte un mundo a tu medida</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom-travellers-xl"> <a href="https://www.pangea.es/ES/que-es-pangea"
                    class="btn btn-sec waves-effect waves-light">Conoce más sobre pangea</a></div>
                <div class="background"></div>
              </div>
            </section>
            <section id="section-inspiration">
              <div class="title-module">
                <h2 class="title-pangea-primary">Si puedes soñarlo... ¡Podemos hacerlo!</h2>
              </div>
              <div class="inspirations-grid inspirations-grid-desktop">
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/egipto"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Egipto</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_750x268.jpg 1400w"/> 
                          <img
                          data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_750x268.jpg"
                          title="Egipto" alt="Egipto" class="" src={"../../assets/images/viaje-egipto_750x268.jpg"} />
                          </picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/europa/italia"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Italia</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_750x268.jpg 1400w"/> 
                          <img
                          data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_750x268.jpg"
                          title="Italia" alt="Italia" class="" src="pangeas_files/viaje-italia_750x268.jpg"/></picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/tunez"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Túnez</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_750x268.jpg 1400w"/> <img
                          data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_750x268.jpg"
                          title="Túnez" alt="Túnez" class="" src="pangeas_files/viajar-a-tunez_750x268.jpg"/></picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a
                    href="https://www.pangea.es/ES/viaje-a/latinoamerica/costa-rica" class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Costa Rica</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_750x268.jpg 1400w"/>
                        <img data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_750x268.jpg"
                          title="Costa Rica" alt="Costa Rica" class="" src="pangeas_files/viaje-costa-rica_750x268.jpg"/>
                      </picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/asia/tailandia"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Tailandia</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_750x268.jpg 1400w"/>
                        <img data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_750x268.jpg"
                          title="Tailandia" alt="Tailandia" class="" src="pangeas_files/viaje-tailandia-1_750x268.jpg"/>
                      </picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/kenia"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Kenia</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_750x268.jpg 1400w"/>
                        <img data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_750x268.jpg"
                          title="Kenia" alt="Kenia" class="" src="pangeas_files/viaje-a-kenia-1_750x268.jpg"/></picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/europa/grecia"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Grecia</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_750x268.jpg 1400w"/> <img
                          data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_750x268.jpg"
                          title="Grecia" alt="Grecia" class="" src="pangeas_files/viaje-grecia_750x268.jpg"/></picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/asia/japon"
                    class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Japón</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_750x268.jpg 1400w"/> <img
                          data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_750x268.jpg"
                          title="Japón" alt="Japón" class="" src="pangeas_files/viaje-a-japon_750x268.jpg"/></picture>
                    </div>
                  </a></div>
                <div class="inspirations-grid-item img-over-card"><a
                    href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos" class="img-over-wrapper">
                    <div class="over-img">
                      <div class="middle-align"><span class="title">Estados Unidos</span></div>
                    </div>
                    <div class="card-img">
                      <picture>
                        <source media="(max-width: 575px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_750x268.jpg 575w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_750x268.jpg 575w"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_359x210.jpg 768w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_359x210.jpg 768w"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_290x170.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_290x170.jpg 991w"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_359x210.jpg 991w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_359x210.jpg 991w"/>
                        <source media="(min-width: 1200px)"
                          data-srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_750x268.jpg 1400w"
                          sizes="100vw"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_750x268.jpg 1400w"/>
                        <img data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_750x268.jpg"
                          title="Estados Unidos" alt="Estados Unidos" class=""
                          src="pangeas_files/viaje-estados-unidos_750x268.jpg"/></picture>
                    </div>
                  </a></div>
              </div>
              <div class="inspirations-grid inspirations-grid-mobile">
                <div id="InspirationSlider" class="swiper-container swiper-container-horizontal">
                  <div class="swiper-wrapper" style={{transitionDuration: "0ms"}}>
                    <div class="swiper-slide swiper-slide-active">
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/egipto"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Egipto</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/11/viaje-egipto_359x210.jpg"
                              title="Egipto" alt="Egipto"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/europa/italia"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Italia</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/125/viaje-italia_359x210.jpg"
                              title="Italia" alt="Italia"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/tunez"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Túnez</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/50/viajar-a-tunez_359x210.jpg"
                              title="Túnez" alt="Túnez"/></div>
                        </a></div>
                    </div>
                    <div class="swiper-slide swiper-slide-next">
                      <div class="inspirations-grid-item img-over-card"><a
                          href="https://www.pangea.es/ES/viaje-a/latinoamerica/costa-rica" class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Costa Rica</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/155/viaje-costa-rica_359x210.jpg"
                              title="Costa Rica" alt="Costa Rica"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a
                          href="https://www.pangea.es/ES/viaje-a/asia/tailandia" class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Tailandia</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/89/viaje-tailandia-1_359x210.jpg"
                              title="Tailandia" alt="Tailandia"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/africa/kenia"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Kenia</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/20/viaje-a-kenia-1_359x210.jpg"
                              title="Kenia" alt="Kenia"/></div>
                        </a></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/europa/grecia"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Grecia</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/120/viaje-grecia_359x210.jpg"
                              title="Grecia" alt="Grecia"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a href="https://www.pangea.es/ES/viaje-a/asia/japon"
                          class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Japón</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/71/viaje-a-japon_359x210.jpg"
                              title="Japón" alt="Japón"/></div>
                        </a></div>
                      <div class="inspirations-grid-item img-over-card"><a
                          href="https://www.pangea.es/ES/viaje-a/norteamerica/estados-unidos" class="img-over-wrapper">
                          <div class="over-img">
                            <div class="middle-align"><span class="title">Estados Unidos</span></div>
                          </div>
                          <div class="card-img"> <img class="img-fluid"
                              data-src="https://d12xfnpxdgf5zf.cloudfront.net/files/Country/157/viaje-estados-unidos_359x210.jpg"
                              title="Estados Unidos" alt="Estados Unidos"/></div>
                        </a></div>
                    </div>
                  </div>
                  <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
                </div>
              </div>
            </section>
            <section id="reviews-pangea" class="module reviews-pangea">
              <h2 class="title-pangea-primary">Opiniones de nuestros viajeros</h2>
              <p class="subtitle-pangea-primary">No lo decimos nosotros, lo dicen nuestros viajeros</p>
              <div class="super-cont hidden-xs-down">
                <div class="item col-xs-12 col-sm-3 centered"><a href="https://www.pangea.es/ES/pangea-opiniones">
                    <ul>
                      <li>
                        <p class="score-review">4.6</p>
                      </li>
                      <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                          class="fa fa-star"></span><span class="fa fa-star-half-o"></span></li>
                      <li> <span class="num-opinions">339 Opiniones</span></li>
                      <li> <img class="logo-review-img"
                          data-src="https://www.pangea.es/web/img/logo-pangea.png.pagespeed.ce.rgOCY7WPpr.png" alt="Logo pangea"
                          title="Logo pangea" src="pangeas_files/logo-pangea.png"/></li>
                    </ul>
                  </a></div>
                <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                    href="https://www.google.es/search?q=pangea&amp;oq=pangea&amp;lrd=0xd4228bcfcdc5e39:0x226ebab21e400e0,1%27"
                    rel="nofollow">
                    <ul>
                      <li>
                        <p class="score-review">4,4</p>
                      </li>
                      <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                          class="fa fa-star"></span><span class="fa fa-star-o"></span></li>
                      <li> <span class="num-opinions">1003 Opiniones</span></li>
                      <li> <img class="logo-review-img"
                          data-src="https://www.pangea.es/web/img/logo-google.png.pagespeed.ce.y9owg2bxFI.png" alt="Logo google"
                          title="Logo google" src="pangeas_files/logo-google.png"/></li>
                    </ul>
                  </a></div>
                <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                    href="https://www.facebook.com/pg/pangeaesp/reviews/?ref=page_internal" rel="nofollow">
                    <ul>
                      <li>
                        <p class="score-review">4,5</p>
                      </li>
                      <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                          class="fa fa-star"></span><span class="fa fa-star-half-o"></span></li>
                      <li> <span class="num-opinions">267 Opiniones</span></li>
                      <li> <img class="logo-review-img"
                          data-src="https://www.pangea.es/web/img/logo-facebook.png.pagespeed.ce.TUWumamxfY.png"
                          alt="Logo facebok" title="Logo facebok" src="pangeas_files/logo-facebook.png"/></li>
                    </ul>
                  </a></div>
                <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                    href="https://www.bodas.net/viaje-de-novios/pangea--e74616" rel="nofollow">
                    <ul>
                      <li>
                        <p class="score-review">4.3</p>
                      </li>
                      <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                          class="fa fa-star"></span><span class="fa fa-star-o"></span></li>
                      <li> <span class="num-opinions">51 Opiniones</span></li>
                      <li> <img class="logo-review-img"
                          data-src="https://www.pangea.es/web/img/logo-bodasnet.png.pagespeed.ce.Pvytn-Mocg.png"
                          alt="Logo bodas.net" title="Logo bodas.net" src="pangeas_files/logo-bodasnet.png"/></li>
                    </ul>
                  </a></div>
              </div>
              <div class="grid-container-mobile hidden-sm-up">
                <div class="maingrid-home-slider swiper-container swiper-container-horizontal">
                  <div class="direction-controller">
                    <div class="next-btn"><span class="fa fa-angle-right"></span></div>
                    <div class="prev-btn"><span class="fa fa-angle-left"></span></div>
                  </div>
                  <div class="swiper-wrapper" style={{transitionDuration: "0ms"}}>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="3">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                            href="https://www.bodas.net/viaje-de-novios/pangea--e74616" rel="nofollow">
                            <ul>
                              <li>
                                <p class="score-review">4.3</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span>
                              </li>
                              <li> <span class="num-opinions">51 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-bodasnet.png.pagespeed.ce.Pvytn-Mocg.png"
                                  alt="Logo bodas.net" title="Logo bodas.net"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a href="https://www.pangea.es/ES/pangea-opiniones">
                            <ul>
                              <li>
                                <p class="score-review">4.6</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star-half-o"></span></li>
                              <li> <span class="num-opinions">339 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-pangea.png.pagespeed.ce.rgOCY7WPpr.png"
                                  alt="Logo pangea" title="Logo pangea"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                            href="https://www.google.es/search?q=pangea&amp;oq=pangea&amp;lrd=0xd4228bcfcdc5e39:0x226ebab21e400e0,1"
                            rel="nofollow">
                            <ul>
                              <li>
                                <p class="score-review">4,4</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span>
                              </li>
                              <li> <span class="num-opinions">1003 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-google.png.pagespeed.ce.y9owg2bxFI.png"
                                  alt="Logo google" title="Logo google"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="2">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                            href="https://www.facebook.com/pg/pangeaesp/reviews/?ref=page_internal" rel="nofollow">
                            <ul>
                              <li>
                                <p class="score-review">4,5</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star-half-o"></span></li>
                              <li> <span class="num-opinions">267 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-facebook.png.pagespeed.ce.TUWumamxfY.png"
                                  alt="Logo facebok" title="Logo facebok"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                    <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="3">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a target="_new"
                            href="https://www.bodas.net/viaje-de-novios/pangea--e74616" rel="nofollow">
                            <ul>
                              <li>
                                <p class="score-review">4.3</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span>
                              </li>
                              <li> <span class="num-opinions">51 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-bodasnet.png.pagespeed.ce.Pvytn-Mocg.png"
                                  alt="Logo bodas.net" title="Logo bodas.net"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0">
                      <div class="grid-item">
                        <div class="item col-xs-12 col-sm-3 centered"><a href="https://www.pangea.es/ES/pangea-opiniones">
                            <ul>
                              <li>
                                <p class="score-review">4.6</p>
                              </li>
                              <li><span class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star"></span><span class="fa fa-star"></span><span
                                  class="fa fa-star-half-o"></span></li>
                              <li> <span class="num-opinions">339 Opiniones</span></li>
                              <li> <img class="logo-review-img"
                                  data-src="https://www.pangea.es/web/img/logo-pangea.png.pagespeed.ce.rgOCY7WPpr.png"
                                  alt="Logo pangea" title="Logo pangea"/></li>
                            </ul>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
}