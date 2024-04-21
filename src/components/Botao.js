import { TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Botao({ title }) {
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity style={style.botao}>
          <Texto style={style.textoBotao}>{title}</Texto>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

style = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
