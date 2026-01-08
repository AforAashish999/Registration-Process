import api from "@/lib/axios"

const RegisterService = {

    getAll:  async() => {
        const {data} = await api.get("/students");
        return data;
    },

    create: async(payload) => {
        const { data } = await api.post("/students", payload);
        return data;
    }
}

export default RegisterService;