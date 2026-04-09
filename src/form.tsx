import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'


function TheForm(){
    return(
        <Form className="w-50 mx-auto">
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Type</Form.Label>
                <Form.Select aria-label="Default">
                    <option>Default</option>
                    <option value="1">Fruit</option>
                    <option value="2">Vegetable</option>
                </Form.Select>
            </Form.Group>

            <Form.Label>Product Cost</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder="Enter Cost"/>
            </InputGroup>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );

}

export default TheForm;