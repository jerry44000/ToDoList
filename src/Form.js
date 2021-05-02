import {useState} from 'react';
import Item from './Item';
import {v4 as uuidv4} from 'uuid';


export default function Form () {

    //State data

    const [dataArr, SetDataArr] = useState([

        {txt: "Apprendre React", id: uuidv4()},
        {txt: "Apprendre Bootstrap", id: uuidv4()},
        {txt: "Apprendre React Router", id: uuidv4()},
        {txt: "Apprendre Redux", id: uuidv4()},

    ])

    //State input

    const [stateInput, setStateInput] = useState();



    //Supprimer éléments et retourner un nouveau tableau

    const deleteElement = id =>{

        const filterState = dataArr.filter(item => {
            return item.id !== id;
        })

        SetDataArr(filterState)
    }

    //Fonction pour ajouter élément

    const add = e => {

        e.preventDefault();
        
        const newArr = [...dataArr];

        const newEl = {};

        newEl.txt = stateInput;
        newEl.id = uuidv4();

        newArr.push(newEl);
        SetDataArr(newArr);

        setStateInput('');

    }

    //Lier avec l'input

    const linkedInput = e => {

       setStateInput(e);
    }

    return (

         <div onSubmit={e => add(e)}
          className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3">
                
                <label htmlFor="todo" 
                className="form-label mt-3">Chose à faire</label>
                
                <input 
                value={stateInput}
                onInput={e => linkedInput(e.target.value)}
                type="text" className="form-control" 
                id="todo"/>

                <button className="mt-2 btn btn-primary
                 d-block">Envoyez</button>
            
            </form>

                <h2>Liste des choses à faire</h2>

                <ul className="list-group">

                    {dataArr.map((item)=>{
                        return (

                            <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                            />
                        )


                    })}

                </ul>

         </div>
    )
}