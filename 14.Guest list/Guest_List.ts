// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let Guest_list :string[] = ['Imran Khan', 'Sheryar Afridi', 'Haroon Afridi',];

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite in our party.\n\nThank you!')

}