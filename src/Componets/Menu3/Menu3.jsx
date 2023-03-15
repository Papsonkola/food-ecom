import React, {useState} from 'react';
import Data from '../../MenuData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Menu3() {
  // const [menu, setMenu] = useState(Data);
  const [searchTerm, setsearchTerm] = useState('');
  return (
    <div>
        <h2 className='menuTitle'>Place your order</h2>
       <div className="row">
        <div className="col-12">
            <div className="mx-auto col-4">
              <input type='text' placeholder='Search Menu' className='form-control' onChange={(event) => {setsearchTerm(event.target.value)}}/>
            </div>
        </div>
       </div>

       {/* Menu Section */}
       <div className='row justify-content-center'>
        
        {/* data.meniItems */}
        {Data
        // eslint-disable-next-line array-callback-return
        .filter ((x) =>{
          if (searchTerm === ''){
            return x;
          }

          else if (x.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return x;
          }
        })

        .map((x) => {
          return(
        <div className='col-md-3 my-3' key={x.id}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={x.image} alt="image" />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
          {x.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
        </div>
        )
        })}

        
       </div>
    </div>
  )
}
