import  { configureStore} from '@reduxjs/toolkit'
import InfoSlice  from '../features/counter/counterSlice'

/* configureStore combines slices =>
 {
    Info:{
    name: "Nguyen TS",
    age: 18,
    add: 'Ha Noi'
    },
    Countter:{
    name: "Nguyen TS",
    age: 18,
    add: 'Ha Noi'
}
} : state 


*/
export const store =  configureStore({
    reducer: {
        Info : InfoSlice
    }
})