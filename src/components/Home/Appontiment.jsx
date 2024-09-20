import styled from "styled-components";

import Card from "../Ui/Card";
import Text from "../Ui/Text";
import Filter from "../Ui/Filter";
import Table from "../Ui/Table";

function Appontiment() {
  const picture = [
    "https://i.pravatar.cc/100?u=zc",
    "https://i.pravatar.cc/100?u=za",
  ];
  const columns = ["Profile", "Service", "Date", "Time", "Action"];
  const data = [
    {
      Profile: "Dr. Rita",
      Service: "Dermatologist",
      Date: "xx/xx/xxxx",
      Time: "10:30 AM",
      Action: "X",
    },
    {
      Profile: "Dr. Adriana",
      Service: "Neurology",
      Date: "xx/xx/xxxx",
      Time: "15:30 PM",
      Action: "X",
    },
  ];

  return (
    <Card>
      <Header>
        <Text size="1.5rem" weight="600">
          Upcoming Appointment
        </Text>
        <Filter />
      </Header>
      <Content>
        <Table pic={picture} columns={columns} data={data} />
      </Content>
    </Card>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Appontiment;
