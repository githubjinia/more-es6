const fish = { id: 56, name: 'Hilsha hilsha', price: 2000, color: 'silver', phone: 017235555 };

const { id, price, color } = fish;
console.log(id, price, color);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
const { name, food } = company.ceo;
const { framework, employee } = company.web;
const { first, second } = company.web.tech;
console.log(first, second);
console.log(framework, employee);
console.log(name, food);