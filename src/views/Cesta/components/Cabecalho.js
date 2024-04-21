import { Dimensions, Image, SafeAreaView, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cabecalho({titulo}) {
  return (
    <>
      <SafeAreaView>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo}</Texto>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
