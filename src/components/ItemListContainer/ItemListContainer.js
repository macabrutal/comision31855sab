import React from 'react'

const names = ['Seba', 'Tomas', 'Veronica', 'Luiggi', 'Gustavo']
const otherNames = [{ id: 1, name: 'Seba', color: 'red'}, { id: 2, name: 'Tomas', color: 'blue' }, { id: 3, name: 'Veronica', color: 'green'}]

const ItemListContainer = (props) => {


    return(
        <>
            <h1>{props.greeting}</h1>
            <ul>
               { names.map(name => React.createElement('li', { key: name, style: { color: 'red' } }, name))} 
               { names.map(name => <li key={name} style={{ color: 'red'}}>{name}</li>)}
               { otherNames.map(objName => <li key={objName.id} style={{ color: objName.color}}>{objName.name}</li>)}
            </ul>
        </>
    )
}

export default ItemListContainer