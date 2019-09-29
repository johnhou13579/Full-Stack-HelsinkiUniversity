import React from 'react'

const Course=(props)=>
        <>
        {props.map(p => <div key={p.id}>{OneCourse(p)}
        </div>)}</>

const OneCourse=(props)=>{
    return<>
        <div>{Headers(props)}</div>
        </>
}

const Headers = (props)=><div>{props.name}</div>

export default Course