import { Drawer } from '@material-ui/core'
import React from 'react'

function ProfileDrower({show,setShow}) {
    const handleClose =()=>{
        setShow(false)
    }
    return (
        <>
            <Drawer
                open={show}
                onClose={handleClose}
            >
                hello
            </Drawer>
        </>
    )
}

export default ProfileDrower
