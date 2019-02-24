import axios from 'axios'
const baseUrl = '/api/Feedback/'

const GetAll = async () => {
    const url = baseUrl + "/GetAllFeedback"
    const request = await axios.get(url)
    return request.data
}

const Create = async (newFeedback) => {
    const url = baseUrl + "/PostFeedback"
    const response = await axios.post(url, newFeedback)
    return response.data
}
export default { GetAll, Create }