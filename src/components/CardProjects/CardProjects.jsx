import './style.scss';
import '../../scss/style.scss';

export default function CardProjects(props) {
    return (
        <>
            <a className='link-card-projects' href={props.link} target="_blank">
                <div className='container-card-projects'>
                    <div className='img-project'>
                        <img src={props.img} alt="" />
                    </div>
                    
                    <div className='description-project'>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </a>

            {/* <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </>
    )
}