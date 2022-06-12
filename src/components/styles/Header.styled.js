import styled from 'styled-components';

export const StyledHeader = styled.header`

    color: white;
    background-color: #001C54;

    .container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }


    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
    }

    a {
      color: var(--white);
      font-size: 1.25rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    a:hover {
      opacity: 0.7;
    }

    .brand a {
      font-weight: 700;
      font-size: 1.5rem;
    }

    .nav-links {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      align-items: center;
    }

    .nav-links li {
      display: inline-block;
      margin-right: 30px;
    }

    .nav-links li:last-child {
      margin-right: 0;
    }
`;