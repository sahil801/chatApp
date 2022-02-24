import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { InputBase, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container:{
        background:'#f6f6f6',
        display:'flex',
        alignItems:'center',
        height:47
    },
    search:{
        position:'relative',
        borderRadius:18,
        background:'#ffffff',
        margin:'0px 13px',
        width:'100%',
        display:'flex',
        alignItems:'center',
        height:35
    },
    searchIcon:{
        color:'#919191',
        position:'absolute',
        // marginLeft:'15px'
        padding:10,
        marginTop:'4px'
        
        // justifyContent:'center'
    },
    inputRoot:{
        width:'100%'
    },
    Input :{
        paddingLeft:65,
        fontSize:14,
        height:15,
        width:'270px',
        fontWeight:200
    },
    
   
})

function Search({serchref,setSerchref}) {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <BiSearch/>
            </div>
            <div>
                <InputBase
                    value={serchref}
                    onChange={(e)=>{setSerchref(e.target.value); console.log(serchref)}}
                    placeholder='Search or start a new chat'
                    classes={{
                        root : classes.inputRoot,
                        input : classes.Input
                    }}
                    inputProps={{'aria-level':'search'}}
                />
            </div>
        </div>
        </div>
    )
}

export default Search
