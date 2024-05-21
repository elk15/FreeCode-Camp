import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Card, CardButton, Attribution, Quote } from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardComponent = () => {
    return (
        <Card>
            <Quote>
                <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: '10px' }} />
                I used to be an adventurer like you, then I took an arrow in the knee.
            </Quote>
            <Attribution>- Guard, The Elder Scrolls V: Skyrim</Attribution>
            <CardButton>New quote</CardButton>
        </Card>
    )
}

export default CardComponent;