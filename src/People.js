
const people = [
    { name: "Ringo", hobbies: [ "Drumming", "Peace and Love" ]},
    { name: "John", hobbies: [ "Singing", "" ]},
    { name: "Paul", hobbies: [ "Guitars", "" ]}
];

const People = () => {
    const items = people.flatMap(p => 
        <li
            style={{ textAlign: 'left' }}
            key={p.name}
        >
        {p.name} {" -> "} {p.hobbies}
        </li>
    );
                
    return (
        <ul>{items}</ul>
    );
};

export default People;