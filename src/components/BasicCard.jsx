import "./basicCard.sass";
import Card from "react-bootstrap/Card";

function BasicCard(props) {
  return (
    <Card className={`card ${props.color}`} key={props.id}>
      <Card.Body className="card__body">
        <Card.Title className="card__title">{props.title}</Card.Title>
        <Card.Text className="card__text">{props.text}</Card.Text>
      </Card.Body>
      <Card.Img
        className="card__image"
        // variant="end"
        alt={props.icon}
        src={`/images/icon-${props.icon}.svg`}
      />
    </Card>
  );
}

export default BasicCard;
