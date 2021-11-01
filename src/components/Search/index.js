import React, {useState, useEffect} from 'react'
import  Alert from 'react-bootstrap/Alert';
import  Form from 'react-bootstrap/Form';
import  Card from 'react-bootstrap/Card';
import  ListGroup from 'react-bootstrap/ListGroup';
import  ListGroupItem from 'react-bootstrap/ListGroupItem';
import  InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../assets/stylesheet/searchbar.css'

const SearchBar = () => {
  const [carData, setCarData] = useState("");
  const [userInput, setInput] = useState("");

  const listOfMake =["Audi", "Chevrolet", "Ford", "Honda", "Lamborghini", "Mercedes", "Nissan", "Tesla", "Volvo"]
  const listOfYear = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000]
  const listOfTypes = ["Car", "Truck"];
  
  const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    const limit = 50;
    const items = data.Results.slice(0, limit);
    setCarData(items);
  }
  const getCarsByMake = e =>{
    e.preventDefault();
    if (e.target.value === "") return
    setInput(e.target.value);
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${e.target.value}?format=json`;
    fetchData(url);
  }
  const getCarsByType = e =>{
    e.preventDefault();
    if (e.target.value === "") return
    setInput(e.target.value);
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${e.target.value}?format=json`;
    fetchData(url);
  }
  const getCarsByMakeAndYear = e =>{
    e.preventDefault();
    if (e.target.value === "") return
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${userInput}/modelyear/${e.target.value}?format=json`;
    fetchData(url);
  }
  
  useEffect(() => {
    fetchData("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Car?format=json");
  }, [])

  return ( 
    <>
      <div className="lg:py-4 py-1 flex flex-center justify-center items-center flex-col">
        <InputGroup hasValidation className="lg:w-2/4 w-3/4 h-1/4 m-4" onChange={e => getCarsByMake(e)}>
          <InputGroup.Text className="searchIcon">
          <FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
          <Form.Control type="text" placeholder="Enter brand name" className="p-2" required />
        </InputGroup>
        <div className="lg:w-2/4 w-full flex flex-center justify-center items-center lg:flex-row flex-col">
          <Form.Select aria-label="filter car by make" className="lg:w-2/6 w-3/4 h-1/4 p-2 lg:m-4 m-2" onChange={e => getCarsByMake(e)}>
            <option>Select car by brand</option>
            {listOfMake.map( make => <option value={make} >{make}</option> )}
          </Form.Select>
          <Form.Select aria-label="filter car by make" className="lg:w-2/6 w-3/4 h-1/4 p-2 lg:m-4 m-2" onChange={e => getCarsByMakeAndYear(e)}>
            <option>Select car by year</option>
            {listOfYear.map( year => <option value={year} >{year}</option> )}
          </Form.Select>
          <Form.Select aria-label="filter car by make" className="lg:w-2/6 w-3/4 h-1/4 p-2 lg:m-4 m-2" onChange={e => getCarsByType(e)}>
            <option>Select car by type</option>
            {listOfTypes.map( type => <option value={type} >{type}</option> )}
          </Form.Select>
        </div>
      </div>

      <div className="flex flex-center justify-center flex-wrap">
          {carData? 
            carData.length ? carData.map( car =>
              <div className="lg:w-1/6 lg:m-7 m-3 flex justify-center">
                <Card className="w-72 shadow-xl">
                  <Card.Img variant="top" src="https://picsum.photos/200" />
                  <Card.Body>
                    <Card.Title>{car.Model_Name? car.Model_Name : car.MakeName }</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{car.Make_Name ? car.Make_Name : car.VehicleTypeName}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              ) : 
            <Alert variant="danger">
              No Cars found by the searched name.
            </Alert>
            : null 
          } 
      </div>
    </>
  )
        
}

export default SearchBar
