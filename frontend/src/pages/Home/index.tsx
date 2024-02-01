import './style.scss';

import imgInitMain from '/assets/compilter-img.svg';
import rectangle from '/assets/rectangle.svg';
import imgProfile from '/assets/117828396.jpeg';

// =================== Img dos projetos =============================== //
import imgPortifolio from '/assets/projects/portifólio/Captura de tela de 2023-03-25 15-15-05.png'
import imgBotDiscord from '/assets/projects/botDiscord/meta-image.png';
import imgCasaDeCambio from '/assets/projects/cadaDeCambio/Captura de tela de 2023-04-22 19-36-11.png'
import imgUploadFiles from '/assets/projects/uploadFiles/Captura de tela de 2023-04-22 20-04-40.png'
// -------------------------------------------------------------------- //

// ====================== Componentes ================================ //
import Header from '../../components/Header/Header';
import CardProjects from '../../components/CardProjects/CardProjects';
import Footer from '../../components/Footer';
// -------------------------------------------------------------------- //

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className='aplic-animated'>

                    <section className='top-main'>
                            <div className="text-main-top">
                                <p>Bem vindo ao meu portifólio</p>
                                <h3>OLÁ! EU SOU UM DESENVOLVEDOR WEB FULL-STACK</h3>
                                <a href="#footer">
                                    <button className='text-main-button'>CONTACTE-ME</button>
                                </a>
                            </div>
                            <div className="img-main-top">
                                <img src={imgInitMain} alt="" />
                            </div>
                    </section>

                    <section className='about-me'>
                            <div className='div-init-about-me'>
                                <img src={rectangle} alt="" />
                                <h3>Sobre mim</h3>
                            </div>

                            <aside className='my-info'>
                                <div className='my-info-img'>
                                    <img src={imgProfile} alt="Foto do dono do perfil" />
                                </div>

                                <div id='my-info' className="my-info-text">
                                    <p>Olá!! Meu nome é João Marcelo Lima Oliveira, tenho 18 anos e 
                                        atuamente estou cursando desenvolvimento web Full-Stack na TRYBE.
                                    </p>
                                </div>
                            </aside>

                            <aside className='stacks'>
                                <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaomarcelo-dev&layout=compact&langs_count=10&theme=dark"/>
                            </aside>
                    </section>

                    <section className='section-my-projects'>
                        <h3>Meus projetos</h3>
                        <div className='projcts'>
                            <CardProjects
                                linkRepo="https://github.com/joaomarcelo-dev/joaomarcelo-dev"
                                link='https://joaomarcelo-dev.github.io/joaomarcelo-dev/'
                                img={imgPortifolio}
                                title="Portifólio antigo"
                                description="Meu primeiro portifólio, inteiramente feito em Vanilla JS"
                            />

                            <CardProjects
                                linkRepo='https://github.com/joaomarcelo-dev/discorBot'
                                img={imgBotDiscord}
                                title="Bot Discord"
                                description="Meu primeiro bot de discord utilizando a lib do Discord.js"
                            />

                            <CardProjects
                                linkRepo="https://github.com/joaomarcelo-dev/casa-de-cambio"
                                link='https://joaomarcelo-dev.github.io/casa-de-cambio/'
                                img={imgCasaDeCambio}
                                title="Casa de Cambio"
                                description='Exercicio "Casa de Cambio" proposto pela Trybe.'
                            />

                            <CardProjects
                                linkRepo="https://github.com/joaomarcelo-dev/upload-files"
                                link='https://joaomarcelo-dev.github.io/upload-files/'
                                img={imgUploadFiles}
                                title="Upload de arquivos"
                                description='Projeto base para upload de arquivos'
                            />
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}   