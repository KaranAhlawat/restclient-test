import { ref } from "vue"

const res = ref<string>("")

export default () => {
    function setRes(newData: string) {
        res.value = newData
    }

    return {
        res,
        setRes,
    }
}
