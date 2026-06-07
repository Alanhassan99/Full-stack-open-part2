const Persons = ({ namesToShow, handleDelete }) => {
    return (
        <div>
            {
                namesToShow.map(person =>
                    <div key={person.id}>
                        <p>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button></p>
                    </div>
                )
            }
        </div>
    )

}

export default Persons
