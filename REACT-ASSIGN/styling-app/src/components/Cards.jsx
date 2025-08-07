import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Cards({num}) {
  return (
   
            <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{num} المسءول </Card.Title>
        
        <Card.Text>
          تبابعيهيينييمينينينييهممىتىؤلاريلاريلارالاترلايلارتيلاريلارعيرلاعرلات
          ىيتىعيىي
          ريهرىعىرعىرعىرعثرعثرعلالاريعلالار
          ىهثىثرتترتىرى
        </Card.Text>
        
      </Card.Body>
      <Card.Body className='text-center'> <Button className='btn-primary '> تسجيل</Button></Card.Body>
      
    </Card>
    

  );
}

export default Cards;