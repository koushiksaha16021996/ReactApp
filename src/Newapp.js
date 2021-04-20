import { Cakecontainer } from './reduxtutorials/Cakecontainer';

import {Provider} from 'react-redux'
import {store} from './redux/Store'

function Newapp(){
    return(
        <div className="App">
            <Provider store={store}>
                <Cakecontainer />
            </Provider>
        </div>
    )
} 
export default Newapp;