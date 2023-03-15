import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Data from '../../MenuData'
import './Menu.css'

export default function Menu() {
    const [menu, setMenu] = useState(Data);
    const filterResult = (categoryItem) =>{
      const result =  Data.filter((currentData) =>{
        return currentData.category === categoryItem;
      });
      setMenu(result);
    }
  return (
    <div>
        <h2> OUR MENU</h2>
        <div class="container mx-2">
            
            <div class="row mt-5 mx-2">
             
                <div class="col-md-3 left">
                    <h3>Select Category</h3>
                    <ul>
                    <li><button onClick={() => filterResult('local dish')}>Local Dish</button></li>
                    <li><button onClick={() => filterResult('foreign dish')}>Foreign Dish</button></li>
                    <li><button onClick={() => filterResult('drinks')}>Drinks</button></li>
                    <li><button onClick={() => setMenu(Data)}>All</button></li>
                    </ul>
                </div>

                <div class="col-md-9">
                    <div class="row right">
                    {menu.map((x) => { 
                        return (

                            <div class="col-md-4 " key={x.id}>
                               {/* <div className='cardw'> */}
                             <Card style={{ width: '100%'}} className='card p-0'>
                             <Card.Img variant="top" src={x.image} className="img"/>
                             <Card.Body>
                              <Card.Title className="titlee">{x.name}</Card.Title>
                              <Card.Text className='price'>
                               ${x.price}
                              </Card.Text>
                              <Button  className='button'>Add to cart</Button>
                            </Card.Body>
                            </Card>
          {/* </div> */}
                           </div>
        
                        )
                
            })}
                       

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
