import { Math } from './Math';

describe('Testando a biblioteca Math', () => {

    //beforeEach(() => {  }); executa antes de cada teste
    //afterEach(()=> { });  //executa depois de cada teste  
    // beforeAll(() => {}); // executa antes de todos os teste
    // afterAll() => {}); // executa depois de todos os tentes

    it('should sum two number correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });

    it('should reduce two numbers correcly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    });

    it('should multiply two numbers correctly', () => {
        const response = Math.mut(3, 5);
        expect(response).toBe(15);

        const response2 = Math.mut(0, 3);
        expect(response2).toBe(0);
    });

    it('should divide two numbers correctly', () => {
        const response = Math.div(15, 5);
        expect(response).toBe(3);

        const response2 = Math.div(3, 0);
        expect(response2).toBe(false);

    });

    it('contar quantos caracteres tem na string', () => {
        const response = 'saulo'.length;
        expect(response).toHaveLength(5);
    })

    it('se tem a propriedade EMAIL', () => {
        const response = {
            name: 'saulo',
            email: 'saulohjr@gmail.com'
        };
        expect(response).toHaveProperty('email');
    })

    it('se tem a propriedade igual', () => {
        const response = 20;
        expect(response).toEqual(20);
    })

    it('se tem a propriedade maior que', () => {
        const response = 20;
        expect(response).toBeGreaterThan(20);
    });

    it('se tem a propriedade email no padrão', () => {
        const response = 'saulohjr@hotmail.com';
        expect(response).toMatch(/[a-z]@[a-z].[a-z]/);
    });


});
