import './style.scss';

type CardProjectsProps = {
    img: string;
    title: string;
    description: string;
    linkRepo: string;
    link?: string;

}

export default function CardProjects(props: CardProjectsProps) {


    return (
        <>

            <div className='container-card-projects'>
                <div className='img-project'>
                    <img src={props.img} alt="" />
                </div>
                
                <div className='description-project'>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <span className='infos-card-project'>
                    <h4>O que vc deseja visualizar?</h4>
                    <div className='div-buttons-card'>
                        <a href={props.linkRepo} target='_blank'>
                            <button>
                                Repositório
                            </button>
                        </a>

                        {props.link && 
                            <a href={props.link} target='_blank'>
                                <button>
                                    Site
                                </button>
                            </a>
                        }

                    </div>
                </span>
            </div>

            
        </>
    )
}