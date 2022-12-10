import React, { useEffect,useContext} from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../App';

export default function Logout() {

    const {dispatch} = useContext(UserContext)

    const navigate = useNavigate()
    //Promises
    useEffect(() => {

        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Contetnt-Type': 'application/jon'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({ type: 'USER', payload: false })
            // window.alert("Logout Successfully")
            navigate('/')
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((err) => {
            console.log(err)
        })
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        </>
    )
}
