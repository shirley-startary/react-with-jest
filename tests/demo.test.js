describe('Prueba en <DemoComponent/>', () =>{
    test('esto es una prueba', () => {
        // 1. Inicialización
        const message1 = 'Hola mundo';
        // 2. Estimulo
        const message2 = message1.trim();
        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    });
} )