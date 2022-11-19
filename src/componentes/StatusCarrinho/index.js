import React from "react";

import { View, Text } from "react-native";
import Botao from '../Botao';
import estilos from './estilos';

export default function StatusCarrinho({ total }) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>
                <Text style={estilos.valor}>
                    {Intl.NumberFormat('pt-br', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)}
                </Text>
            </Text>
        </View>
    </View>
}