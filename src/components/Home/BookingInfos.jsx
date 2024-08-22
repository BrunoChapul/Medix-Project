import styled, { useTheme } from "styled-components";
import Card from "../Global/Card";

// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PaidIcon from "@mui/icons-material/Paid";

// Components
import Text from "../Global/Text";

function BookingInfo() {
  const theme = useTheme();

  const bookings = [
    {
      id: 1,
      icon: <CalendarMonthIcon sx={{ color: theme.colors.primary }} />,
      total: 33,
      name: "Total Booking",
    },
    {
      id: 2,
      icon: <EventAvailableIcon sx={{ color: theme.colors.tertiary }} />,
      total: 22,
      name: "Booking Success",
    },
    {
      id: 3,
      icon: <EventBusyIcon sx={{ color: theme.colors.primary }} />,
      total: 12,
      name: "Booking Cancel",
    },
    {
      id: 4,
      icon: <PaidIcon sx={{ color: theme.colors.tertiary }} />,
      total: "$" + 50,
      name: "Paid Amount",
    },
  ];

  return (
    <Container>
      {bookings.map((booking) => (
        <Card key={booking.id}>
          <Wrapper>
            <Icon>{booking.icon}</Icon>
            <Info>
              <Text size="2.3rem" weight="bold" width="100%">
                {booking.total}
              </Text>
              <Text>{booking.name}</Text>
            </Info>
          </Wrapper>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.div`
  background: ${(props) => props.theme.colors.primary + 11};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 5rem;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export default BookingInfo;
