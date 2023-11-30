import { Image } from 'react-bootstrap';
import pageNotFoundImage from '../Assets/Images/Logo/pagenotfound.jpeg';
import { Link } from 'react-router-dom';

function PageNotFound() {

    return (
        <>

            <section className='page-not-found-section'>
                <div className="pnfcontainer">
                    <div className="container">
                        <div className='page-not-found'>
                            <div className="pnf-content">
                                <div className="main-pnf-heading">
                                    <h1>Oops !</h1>
                                    <div className="404-image">
                                        <Image src={pageNotFoundImage} alt='page-not-found'></Image>
                                    </div>
                                    <h3>404 - PAGE NOT FOUND</h3>
                                </div>
                                <div className="pnf-foot-content mt-4">
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailabel</p>
                                    {/* <Button href='/' className='mt-4'>GO TO HOMEPAGE</Button> */}
                                    <Link to="/" className='mt-5'>GO TO HOMEPAGE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PageNotFound