import {Friend, Colleague } from './myTypes'
import {friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
    });
}

console.log(older(friends[0]));
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));


  // Add a colleague to the array and set their extension number to the highest extension plus 1.
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const highest = highestExtension(cs);
    const newExtension = highest ? highest.contact.extension + 1 : 1;
  
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: newExtension,
      },
    };
  
    cs.push(newColleague);
  }
  
  // Add a new colleague
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  
  // Log the added colleague
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));