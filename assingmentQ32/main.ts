let currentUsers :string[] = ["admin", "ahmad","ali","hammad","nasir"];
let newUsers :string[] = ["naveed", "furqan","ali","hammad","nasir"];

for (let new_users of newUsers){
    const lowercase_new_users = new_users. toLocaleLowerCase();

    if (currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
    
          console.log(`the username $ {new_users} is not available`);


}else{
    console.log(`the username $ {new_users}is available`);
}

