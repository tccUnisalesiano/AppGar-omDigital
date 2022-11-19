import React from 'react';

import { FlatList } from 'react-native';

import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
  {
    id: 1,
    nome: "Double Burguer",
    preco: 19.9,
    descricao: "Pao da casa, 2 hambúrgueres artesanais de costela (200g) e muito queijo .",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Double Burguer Bacon",
    preco: 29.9,
    descricao: "Pao da casa, 2 hambúrgueres artesanais de costela (200g), muito queijo e muito bacon.",
    quantidade: 1
  },
  {
    id: 3,
    nome: "BBQ Burguer",
    preco: 25.9,
    descricao: "Pao da casa, 2 hambúrgueres artesanais de costela suína (200g), acompanhado de molho barbecue e muito queijo .",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Pizza - Brócolis com Bacon",
    preco: 79.9,
    descricao: "Bordas com catupiry, bacon, alho frito, brócolis e cream cheese.",
    quantidade: 1
  },
  {
    id: 5,
    nome: "Pizza - Frango c/ Catupiry",
    preco: 69.9,
    descricao: "Bordas com cheddar, frango com catupiry e cream cheese.",
    quantidade: 1
  },
  {
    id: 6,
    nome: "Pizza - Costelinha",
    preco: 75.9,
    descricao: "Bordas com catupiry, costelinha suína, alho frito e cream cheese.",
    quantidade: 1
  },
  {
    id: 7,
    nome: "Sorvete Cascão",
    preco: 10.9,
    descricao: "Sabores: chocolate, creme e morango.",
    quantidade: 3
  },
  {
    id: 8,
    nome: "Sorvete com Churros",
    preco: 16.9,
    descricao: "Sabores: chocolate, creme e morango. Churros: Doce de Leite e Brigadeiro.",
    quantidade: 1
  },
  {
    id: 9,
    nome: "Churros Gourmet",
    preco: 29.9,
    descricao: "Sabores: ninho c/ nutella, brigadeiro 50% cacau.",
    quantidade: 1
  }
];

export default function Carrinho() {
const total = servicos.reduce(( soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
  <StatusCarrinho total={total}/>
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}
