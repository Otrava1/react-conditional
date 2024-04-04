import UserItem from "./UserItem";

export function UserList (props) {
    // Fiindca primesc pe prop un array de users, am sa ii fac un object destructuring
    const { users } = props;
    return (
        // Pentru a ne afisa userii, mai intai vom parcurge array-ul de users folosind metoda map
        <div>
            {/* Mapul poate avea ca parametri user(fiind elementul parcurs) si indexul elementului */}
            {users.map((user, index) => {
                // Nu omitem return-ul!!!
                return (
                    <UserItem key= {index} name={user.name} email={user.email} marketValueTrend={user.marketValueTrend} isNew={user.isNew} />
                )
            })}

        </div>
    )
}