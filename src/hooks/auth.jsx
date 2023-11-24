import { createContext, useContext, useState } from "react"
import { api } from "../services/index"
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState("")

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

      if (user && token) {
        setAlertMessage("Login efetuado com sucesso")
        setColor(true)
      }
    } catch (error) {
      if (error.response) {
        setAlertMessage(error.response.data.message)
        setColor(false)
      } else {
        setAlertMessage("Não foi possível efetuar o login")
        setColor(false)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, alertMessage, setAlertMessage, color }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }