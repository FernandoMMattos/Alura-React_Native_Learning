import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";

export default function Itens({ item: { nome, imagem } }) {
  return (
    <View style={style.item}>
      <Image source={imagem} style={style.imagem} />
      <Texto style={style.nome}>{nome}</Texto>
    </View>
  );
}

style = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});
