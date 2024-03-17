"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
// console.log(`${absent_Guest} is not coming to the party.`);
// console.log('Good news! we find big table so we are inviting 3 more guests.');
// array me 3 guest add kia hn
Guest_list.unshift('Sir Zia khan');
Guest_list.splice(2, 0, 'QASIM');
Guest_list.push('zaviyar');
// yhn pr mene 6 guest ke array ko print krya ha.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite in our party.\n\nThank you!\n\n')
// }
// Sorry message to guest for not inviting
// console.log('\nSorry we cannot arrange a big table, only two people will be invited.');
// I have remove guest
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are invited for dinner.`);
}
// Remaining 2 invited guest
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
// }
// sare guest array se remove kr dia 
Guest_list.splice(0, 2);
console.log(Guest_list);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_list.length}`);
