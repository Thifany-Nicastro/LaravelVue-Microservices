import axios from 'axios'
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true

    await axios.post(`/login`, {
        email: email,
        password: password
    })
    .then(res => {
        error.value = null
        isPending.value = false
        localStorage.setItem('user-token', res.data.access_token)
        localStorage.setItem('user-email', res.data.email)
    })
    .catch(err => {
        console.log(err.message)
        error.value = 'Incorrect login credentials'
        isPending.value = false
    })
}

const useLogin = () => {
    return { error, login, isPending }
}

export default useLogin