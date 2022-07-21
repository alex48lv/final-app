import { createContext } from "react";

interface DataContextInterface {
    imgs: string[] | [];
    setImgs: (image: any) => void
}

const ImgContext = createContext<DataContextInterface>({
    imgs: [],
    setImgs: () => []
})

export default ImgContext;