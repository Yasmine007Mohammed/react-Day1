import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faFacebook , faTwitter} from "@fortawesome/free-brands-svg-icons";

function ContactUs(){
    return(
        <>
            <Container className=" mt-5 p-5" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                <h1 className="text-center text-white">Contact Us</h1>
                <div >
                    <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={ faTwitter} />
                    </a>
                </div>
            </Container>
        </>
    )
}
export default ContactUs