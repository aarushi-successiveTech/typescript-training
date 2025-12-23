type UserCardProps = {
    name : string , 
    email : string , 
    avatar : string

}
const UserCard = ({name, email, avatar} : UserCardProps) =>{
    return (
        <div>
            <br />
            <div><img src = {avatar} alt = "user avatar" style={{width:"50px",height:"50px"}}/></div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            
        </div>
        
    );
}

export default UserCard ; 