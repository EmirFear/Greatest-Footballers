import { useState } from "react";
import {Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import PlayerCard from "./PlayerCard";

const PlayerContainer = () => {
    const [search,setSearch] = useState('');

  const handleChange = (e) => {
    console.log("first",e.target.value)
    setSearch(e.target.value); //!setter metodu her zaman asenkron çalışır.

  }
  console.log("second",search)

  const filteredData = data.filter(item=> item.name.toLowerCase().includes(search.trim().toLowerCase()));
  console.log(filteredData)
  return (
    <div>
      <Form.Control type="search" placeholder="Search players..." onChange={handleChange} className="w-50 mx-auto my-2" />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
          {filteredData.map((player) => (
            <PlayerCard key={player.id} player={player}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayerContainer;
