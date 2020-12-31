import axios from 'axios'
import { ref } from 'vue'

const getModel = (resource, id) => {
    const model = ref(null)
    const error = ref(null)

    axios.get(`${process.env.VUE_APP_ROOT_API}/${resource}/${id}`, {
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjAwM2UzOGI2NmNmMWU1ZjFiNGJkMWRkOGQyODBlMGJmYzMxZDczOTYzMmU4Yjg4ZDQ4ZDU2MWMzOTA3NWVlMDg3NmU5MzZjNmUyNzNhN2QiLCJpYXQiOjE2MDkzMzc3NDEsIm5iZiI6MTYwOTMzNzc0MSwiZXhwIjoxNjQwODczNzQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PrvWzjoJYHDXQWAdCJHHv4jx3XlyLTm9BLt9t_ZPWZNW-HrYj2ns-ET1UnPsaYW3jKa50P8jhTXOsNEVBGrWbM4hPU_6phYS8rZmaHmz3zjgbYf1cpxNJOdnTYWIVtxm3Zxu3Vc6oCsdakButqctMp95tTWRwqknzdIL8wz4rwiNWTSradVJw2SWjeWJuCTtbD69iskIYxsbjxMNyrG-DJLZfVvrSLig4wx3e6M6DnA910VOZARGFtouXfAN4Tp_TyWZoZC9_Yp7RpXxU7vwaLBF0ZJ1dF9RWi1MwvulebctqsVuYg7ziN28RnY6TsVw77etxD40dZnb_qUCTJlSHYfv0P35T-rKOBuDnRXU4wvYwXnOdxqtRr4kDDeLJ3FILe8HxDY5Jf9SNuwdb6J58oWpCfEDtk5LNvpwbNhWnVrbEBNATrq90T2zrajfqkTp3Q86i23e4WLkhYmjEc2KkTK4NQuqViFgmt7J9Q-J16EDGwxjOvyJtF2uGOn_llNLOaeSOkkPyDQZv5GO74DKnvXYh1pW3z_GhNTmnYWhG3E_yBGYJpnrD4WG4TKesL9jVUCDzPkKuormlCCFeN63-oP16B5QAecTajwgyYvZ1Rz6xPaU7IDkhX5ybppk5dvjMPOQkXorHK5-_wzUaNVcogzj8hSVPGp14XfO7XX0xuI"
        }
    })
    .then(res => {
        model.value = res.data.data
    })
    .catch(err => {
        error.value = err
        console.log(err)
    })

    return { error, model }
}

export default getModel