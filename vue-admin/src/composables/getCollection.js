import axios from 'axios'

const getCollection = (collection, query) => {
    axios.get('http://localhost:8000/api/orders').then((response) => {
      console.log(response.data)
    })

    return { error, documents }
}

export default getCollection