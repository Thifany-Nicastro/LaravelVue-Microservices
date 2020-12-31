import axios from 'axios'
import { ref } from 'vue'

const useCollection = (collection, id) => {

    const deleteItem = async () => {
        await axios.delete(`http://localhost:8000/api/${collection}/${id}`, {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2RmODIzZDg2OWMyNDNkZmJiMzA2ODI3ZjQzMWI1ODJhYWZhYzQ2OTdiNDA4M2E1Y2Q2ODFlMzhjYzdiOGVmMjM1ZTcyOGEzMzZkNDBmMDAiLCJpYXQiOjE2MDk0MzA0NjAsIm5iZiI6MTYwOTQzMDQ2MCwiZXhwIjoxNjQwOTY2NDYwLCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.Fss1SDkoiigRzzsVz51cpULNkHNCuBj2boz_ws9Wey3RYL9KPvGdZguwzuRBp2E_nGY7oE9yIUBIqtMW_RzJtp9uwZwvV3807TuaBYM3gT9pohAAxmoiiS-DGzYVGSlpru4HtaLr0MBnIzYpLXNtOTtXoKg57QfZNt_7G5Z0ytZLmsv6Dcc3JI61pRKNF68zBX2VzgC827v0V6ME8IpkdI2EousVIsNmDj8p-q6YwARaTjt8spOw1CZpq33qhL-gcBqkFmm1b7zja4l7fEYmGnVYlZ1zZ-0giYbg6kRl3CzZhVMRorbkDo_ydLFEqQpTPJnzRhLoY7DQkdFVxmxI2btVRlYBR85f6tx_xMnYSL0GYxYcW4tfo-xnVRiTPgHtlkHeylDih7p7MscrRuDFJDVJV67GLU9R6w8OusKx4LXQNWdSPznHgn5xv7AuTyPAIF3pTUM5nK3nJo3YGRf-MvK5o-jYuyaS1kKuCSCmg3FjXh1NU3EyntSKEmyecABxoi0i9OglnKdwMtz2Bi2wf-xqHLTSNHT_CEajZo-tjGXlbENfiSc6GtAUVR31WoXkSNfYeOsePqaTE40ZpnTSSavIMAh4Vr31iCBopLarZV222CItLZpq_6adGd4NG2j3U_gV6C1jgOf8taQkI4fL8VflUQpCAI56MD8z0Hzyp2I"
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateItem = async () => {

    }

    return { deleteItem, updateItem }
}

export default useCollection