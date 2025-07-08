
type TaskProps = {
    title : string , 
    desc : string
}
const tasks : TaskProps[]= [
    {
        title: 'Task1',
        desc : 'lets do'
    },
    {

        title : 'Task2',
        desc : 'yayy'
    }
];

const TaskList = ({title, desc}: TaskProps) =>{
    return (
        <div>
            <li>
                <div>{title}</div>
                <div>{desc}</div>
            </li>
        </div>
    )
}

export const DisplayFunction = () =>{
    return (
       <div>

        {tasks.map((item , index) => (
            <TaskList key={index} title= {item.title} desc={item.desc}></TaskList>
        ))}
       </div>
    )
}