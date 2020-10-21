export const required = (value: string) => {
    if(value){
        return undefined
    }else {
        return 'Required'
    }
}

export const maxLengthCreator = (maxLength:number) => (value:string) =>{
    if(value){
        if(value.length>maxLength){
            return `Max length is more ${maxLength}`
        }else {
            return undefined
        }
    }

}
