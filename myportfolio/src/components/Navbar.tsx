// components/Navbar.tsx
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #0070f3;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <ul style={{ display: "flex", gap: "16px" }}>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
