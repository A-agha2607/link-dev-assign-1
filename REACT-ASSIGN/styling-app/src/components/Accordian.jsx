import Accordion from 'react-bootstrap/Accordion';
import './Acc.css'
import { Container } from 'react-bootstrap';

function Accordian() {
  return (

    <>
        <Container className='py-4 '>
    <div className='questions d-flex flex-row'dir='rtl'>
        <div className="line"></div>
        <div className='d-flex flex-column '>
        <h1> الاسءله الشاءعه</h1>
        <p>بوابة خدمات الشركات</p>
        </div>
        
    </div>
    </Container>
    
            <Accordion dir='rtl'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>ما هو النظام</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    
    </>

  );
}

export default Accordian;