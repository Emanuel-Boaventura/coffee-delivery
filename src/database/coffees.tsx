import expresso from '../assets/Type=Expresso.png';
import americano from '../assets/Type=Americano.png';
import cremoso from '../assets/Type=Expresso Cremoso.png';
import gelado from '../assets/Type=Café Gelado.png';
import cafeComLeite from '../assets/Type=Café com Leite.png';
import latte from '../assets/Type=Latte.png';
import capuccino from '../assets/Type=Capuccino.png';
import macchiato from '../assets/Type=Macchiato.png';
import mochaccino from '../assets/Type=Mochaccino.png';
import chocolateQuente from '../assets/Type=Chocolate Quente.png';
import cubano from '../assets/Type=Cubano.png';
import havaiano from '../assets/Type=Havaiano.png';
import arabe from '../assets/Type=Árabe.png';
import irlandes from '../assets/Type=Irlandês.png';

export const coffees = [
  {
    name: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '4,50',
    tags: ['TRADICIONAL'],
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '5,00',
    tags: ['TRADICIONAL'],
    image: americano,
  },
  {
    name: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '8,00',
    tags: ['TRADICIONAL'],
    image: cremoso,
  },
  {
    name: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tags: ['TRADICIONAL', 'GELADO'],
    image: gelado,
  },
  {
    name: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '6,50',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: cafeComLeite,
  },
  {
    name: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: latte,
  },
  {
    name: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '12,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: capuccino,
  },
  {
    name: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: macchiato,
  },
  {
    name: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '14,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: mochaccino,
  },
  {
    name: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '16,90',
    tags: ['ESPECIAL', 'COM LEITE'],
    image: chocolateQuente,
  },
  {
    name: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '8,90',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    image: cubano,
  },
  {
    name: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '17,90',
    tags: ['ESPECIAL'],
    image: havaiano,
  },
  {
    name: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '19,90',
    tags: ['ESPECIAL'],
    image: arabe,
  },
  {
    name: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '24,90',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    image: irlandes,
  },
];
