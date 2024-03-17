"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let Guest_list = ['Imran Khan', 'Sheryar Afridi', 'Haroon Afridi',];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Hammad';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//         console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite in our party.\n\nThank you!\n\n')
// }
console.log(`${absent_Guest} is not coming to the party.`);
console.log('Good news! we find big table so we are inviting 3 more guests.');
Guest_list.unshift('Sir Zia khan');
Guest_list.splice(2, 0, 'QASIM');
Guest_list.push('zaviyar');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite in our party.\n\nThank you!\n\n');
}
