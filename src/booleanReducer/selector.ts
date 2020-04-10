export const errorMessage = (state: any) => {
    //   debugger
    //  console.log(state)
    let message = state.map((ee: { message: any; name: any; }) => ee.name === 'ERROR' ? ee.message : '')
    //   console.log( message[0])
    return message[0]
}
export const errorMessageStatus = (state: any) => {
    let value = state.map((ee: { value: any; name: any; }) => ee.name === 'ERROR' ? ee.value : false)
    // console.log( value[0].value)
    return value[0]
}

export const statusSuccess = (state: any) => {
//debugger
    // console.log(state)
    let value = state.find((ee: { value: any; name: any; }) => ee.name === 'SUCCESS' )
  //  console.log( value[0])
    return value || {name:'SUCCESS', value:false}


}


export const loadingStatus = (state: any) => {


    let value = state.map((ee: { value: any; name: any; }) => ee.name === 'LOADING' ? ee.value : false)
    // console.log( value[0].value)
    return value[0]

}

// export const  disableStatus=(state:any)=>{
//
//     let value= state.filter((ee: {value: any;name: any;}) => ee.name === 'DISABLE'?ee.value:false)
//
//     return value[0]
// }