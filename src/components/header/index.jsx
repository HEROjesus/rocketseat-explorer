import { Container, Brand, Content, Logout, SideBar } from "./style"

import Search from "../../components/search"
import OrderButton from "../../components/orderButton"

import polygon from "../../assets/icons/polygon.svg"
import logOff from "../../assets/icons/signOut.svg"
import menu from "../../assets/icons/menu.svg"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"


export default function Header({ admin }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleClickLogOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <Content>
        <SideBar>
          <img src={menu} alt="Menu de opções" />
        </SideBar>

        <Brand to="/">
          <div>
            <img src={polygon} alt="logo food explorer" />
            <h1>food explorer</h1>
          </div>

          <div>{admin ? <p>Admin</p> : ""}</div>
        </Brand>

        <Search
          type="search"
          autoComplete="on"
          placeholder="Busque por pratos ou ingredientes"
        />

        {admin ? (
          <OrderButton
            iconAndAmount={false}
            type="button"
            title="Novo Prato"
            link="/new_dish"
          />
        ) : (
          <OrderButton
            iconAndAmount={true}
            type="button"
            title="Pedidos"
            value="10"
          />
        )}

        <Logout>
          <img src={logOff} alt="Logout" onClick={handleClickLogOut} />
        </Logout>
      </Content>
    </Container>
  )
}
