import { Container, Table } from "react-bootstrap";

function Products() {
    return(
        <Container className="w-50 mx-auto">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Apple</td>
                        <td>Fruit</td>
                        <td>2.58</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pineapple</td>
                        <td>Fruit</td>
                        <td>3.25</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cucumber</td>
                        <td>Vegetable</td>
                        <td>.50</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Products;