import React from 'react';
import { Card } from 'react-bootstrap';
function SearchResultItem(props) {
  const { data } = props;

  console.log('data', data);
  return (


    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <Card className=" card">
            
            <Card.Img className="image" src={data.image.url}  alt="super pic" />
            
            <Card.Body>
              <Card.Title className="name">{data.biography['full-name']}</Card.Title>
              <Card.Text className="bodycard" >
                <h1>{data.name}</h1>
                <div>strength: {data.powerstats.strength}</div>
                <div>speed: {data.powerstats.speed}</div>
                <div>power: {data.powerstats.power}</div>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>

      </div>

    </div>
  );
}


export default SearchResultItem;