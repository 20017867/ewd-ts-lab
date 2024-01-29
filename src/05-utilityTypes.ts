import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)

  // Define a type for the intersection of Friend and Colleague
type FriendColleagueIntersection = {
  name: string;
  age?: number; // Age is optional as it's specific to Friend
  contact: {
    email: string;
    extension?: number; // Extension is optional as it's specific to Colleague
  };
};

// Complete the intersection function
function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): FriendColleagueIntersection[] {
  let result: FriendColleagueIntersection[] = [];
  friends.forEach((friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      // Colleague is also a Friend
      const intersectionObj: FriendColleagueIntersection = {
        name: friend.name,
        age: friend.age,
        contact: {
          email: colleague.contact.email,
          extension: colleague.contact.extension,
        },
      };
      result.push(intersectionObj);
    }
  });
  return result;
}

// Testing intersection function
console.log(intersection(friends, colleagues.current));