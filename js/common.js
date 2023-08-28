const users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];
const capitalizeFirstLetter = word => {
    if (typeof word !== "string" || word.length === 0) {
        return word;
    }
    return word[0].toUpperCase() + word.slice(1);
  };


const usernamesWithExclamation = [];
users.forEach(user => {
  usernamesWithExclamation.push(user[0] + "!");
});
console.log(usernamesWithExclamation);

const usernamesWithQuestion = users.map(user => user[0] + "?");
console.log(usernamesWithQuestion);

const redTeamUsers = users.filter(user => user[1] === "red");

const totalScore = redTeamUsers.reduce((sum, item) => sum += item[2], 0);
const tableRows = redTeamUsers.map(user => {
    return `<tr>
        ${user
            .map(item => {
                item = Array.isArray(item) ?
                item.join(`; `) : capitalizeFirstLetter(item);
                return `<td>${item}</td>`
            })
            .join(``)
    }
    </tr>`;
});
const table = `
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Comand</th>
           <th>Score</th>
           <th>Data</th>
         </tr>
       </thead>
       <tbody>
         ${tableRows.join("\n")}
       </tbody>
       <tfoot>
         <tr>
           <td colspan="4">Total score: ${totalScore}</td>
         </tr>
       </tfoot>
     </table>`;

document.write(table);