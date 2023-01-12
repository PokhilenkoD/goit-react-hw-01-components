import styled from '@emotion/styled';

export const Table = styled.table`
  background: #f5ffff;
  border-collapse: collapse;
  text-align: left;

  th {
    border-top: 1px solid #777777;
    border-bottom: 1px solid #777777;
    box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
    background: linear-gradient(#9595b6, #5a567f);
    color: white;
    padding: 10px 15px;
    position: relative;}

    th:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 25%;
      height: 25%;
      width: 100%;
      background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.08)
      );
    }

    tr:nth-of-type(odd) {
      background: #ebf3f9;
    }

    th:nth-of-type(1) {
      border-left: 1px solid #777777;
      border-bottom: 1px solid #777777;
      box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
    }

    th:last-child {
      border-right: 1px solid #777777;
      border-bottom: 1px solid #777777;
      box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
    }

    td {
      border: 1px solid #e3eef7;
      padding: 10px 15px;
      position: relative;
      transition: all 0.5s ease;
    }
  }
`;

export const Body = styled.tbody`
  &:hover td {
    color: transparent;
    text-shadow: 0 0 3px #a09f9d;
  }

  &:hover tr:hover td {
    color: #444444;
    text-shadow: none;
  }
`;
