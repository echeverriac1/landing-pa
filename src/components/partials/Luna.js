import React from 'react'

export default class Luna extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div class="module main-slide home-slide sphere-2 single" style={{marginTop: "7%"}}>
              <div class="inner">
                <div class="swiper-container">
                  <div id="HomeSwiper" class="swiper-wrapper"><a class="swiper-slide"
                      href="https://www.pangea.es/l/pangea-te-lleva-a-la-luna/?utm_source=web&amp;utm_medium=SEO&amp;utm_campaign=slider_home">
                      <picture>
                        <source media="(max-width: 575px)"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/HomeSlide/66/pangea-luna-m_575x629.jpg 575w"
                          sizes="100vw"/>
                        <source media="(min-width: 576px) and (max-width: 768px)"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/HomeSlide/66/pangea-luna-m_768x840.jpg 768w"
                          sizes="100vw"/>
                        <source media="(min-width: 769px) and (max-width: 991px)"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/HomeSlide/66/pangea-luna-d_991x354.jpg 991w"
                          sizes="100vw"/>
                        <source media="(min-width: 992px) and (max-width: 1199px)"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/HomeSlide/66/pangea-luna-d_1199x428.jpg 991w"
                          sizes="100vw"/>
                        <source media="(min-width: 1200px)"
                          srcset="https://d12xfnpxdgf5zf.cloudfront.net/files/HomeSlide/66/pangea-luna-d_1400x500.jpg 1400w"
                          sizes="100vw"/>
                        <img src={require("../../assets/images/pangea-luna-m_575x629.jpg")} title="" alt=""/></picture>
                    </a></div>
                  <div class="swiper-pagination"></div>
                  <nav class="swipe"> <a class="prev"><span>Anterior</span></a> <a class="next"><span>Siguiente</span></a></nav>
                </div>
              </div>
            </div>
            
        );
    }
}