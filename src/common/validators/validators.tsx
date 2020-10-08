export const required = (value: string) => {
    debugger
    if(value){
        return undefined
    }else {
        return 'Required'
    }
}

export const maxLengthCreator = (maxLength:number) => (value:string) =>{
    if(value.length>maxLength){
        return `Max length is more ${maxLength}`
    }else {
        return undefined
    }
}
