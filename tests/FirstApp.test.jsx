import FirstApp from "../src/FirstApp";
import { render } from "@testing-library/react";

describe('Prueba de <FirstApp/>',() => {
    test('Debe de hacer match con el snapshot', () => {
        const title = 'hola, Soy Goku';
        const { container } = render(<FirstApp title={title}/>)

        expect( container ).toMatchSnapshot();
    })
})