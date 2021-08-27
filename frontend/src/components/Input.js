import React from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/app.action';

export default function Input() {
    const [input, setInput] = React.useState(null);
    const name = useSelector(state => state.user);
    const dispatch = useDispatch();

    const start = async() => {
        try {
            const res = await axios({
                method: 'post',
                url: '/score',
                headers: {}, 
                data: { name: input }
              });
            if( res.status === 201 ) {
                dispatch(setUser(input));
            }
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(event) {
        setInput(event.target.value);
    }

    return (
        <div className="name">
            {(!name)?
                <div>
                    <p>Enter your nickname:</p>
                        <input type="text" name="input" onChange={handleChange} />
                        <button className="start" onClick={start}>
                                start
                        </button>
                </div>
                :<div>Welcome {name}, Let's play</div>}
        </div>
    )
}
