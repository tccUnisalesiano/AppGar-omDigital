import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { cores } from '../../estilos';

export default StyleSheet.create({
    ajusteTela: {
        flex: 1,
        backgroundColor: cores.roxo,
    },
    ajusteTelaBaixo: {
        flex: 0,
        backgroundColor: Colors.laranja,
    }
})