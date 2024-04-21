import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

export default function Detalhes({
  nome,
  nomeFazenda,
  logoFazenda,
  descricao,
  preco,
  botao
}) {
  return (
    <>
      <SafeAreaView>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
          <Image source={logoFazenda} style={styles.imagemFazenda} />
          <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao title={botao}/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
