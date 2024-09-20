import styled from "styled-components";

import Text from "./Text";

function InfoTable({ pic, columns, data }) {
  return (
    <Table>
      <Thead>
        <tr>
          {columns.map((c, i) => (
            <Th key={i}>
              <Text>{c}</Text>
            </Th>
          ))}
        </tr>
      </Thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            {columns.map((c, colI) => (
              <Td valign="center" key={colI}>
                {c === "Profile" ? (
                  <Wrapper>
                    <Picture src={pic[i]} />
                    <Text>{r[c]}</Text>
                  </Wrapper>
                ) : (
                  <Text>{r[c]}</Text>
                )}
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
`;

const Thead = styled.thead`
  border-bottom: 0.1rem solid #000;
  text-align: left;
  padding-bottom: 1rem;
`;

const Th = styled.th`
  text-align: left;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Td = styled.td`
  text-align: left;
  padding: 1rem 0;
  vertical-align: middle;
`;

const Picture = styled.img`
  width: 2rem;
  border-radius: 50%;
`;

export default InfoTable;
