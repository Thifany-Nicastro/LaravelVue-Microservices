import axios from 'axios'
import { ref } from 'vue'

const getCollection = (collection, query) => {
    
    const documents = ref(null)
    const error = ref(null)

    axios.get(`/${collection}`)
    .then(res => {
        documents.value = res.data.data
    })
    .catch(err => {
        error.value = err
        console.log(err)
    })

    return { error, documents }
}

export default getCollection