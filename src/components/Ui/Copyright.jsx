import Text from "./Text";

function Copyright() {
  const date = new Date().getFullYear();

  return <Text>&copy; {date}. Todos os direitos reservados.</Text>;
}

export default Copyright;
