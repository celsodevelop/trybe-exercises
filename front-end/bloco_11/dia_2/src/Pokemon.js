import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

class Pokemon extends React.Component {

  render () {
    const { pokemon } = this.props;
    const { name, type, averageWeight: { value: weight, measurementUnit }, image, moreInfo } = pokemon;
    return (
      <Col xs={8} sm={6} md={4} className="d-flex mt-4">
        <Card className="flex-shrink-1" border="secondary" style={{ width : '100%'}}>
          <Card.Header as="h2"  className="pokemon__title text-center no-wrap">{name}</Card.Header>
          <Card.Body className="pokemon__element">
          <Row>
            <Col className="align-self-center">
            <Card.Subtitle as="h4" className="text-center pokemon__type">{type}</Card.Subtitle>
            <Card.Text as="p" className="mt-4 text-center text-success pokemon__weight">{weight} {measurementUnit}</Card.Text>
            </Col>
            <Col>
            <Card.Img className="pokemon__image justify-content-md-center" style={{ width : '100%' }} src={image} alt={name}/>
            </Col>
          </Row>
          </Card.Body>
          <Button variant="primary" className="pokemon__moreinfo" href={moreInfo}>Mais Infos</Button>
        </Card>
      </Col>
    )
  }
};

export default Pokemon;
