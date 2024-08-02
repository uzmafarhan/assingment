//Q14  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["ali", "farhan", "aysha"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected Sis/Medam" + guest_list[i] + ",\new invited you on dinner tomorrow.\n\nthankyoy");
}
//Q15Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var not_persont = "farhan";
var new_guest = "babar azam";
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected Sis/Medam" + guest_list[i] + ",\new invited you on dinner tomorrow.\n\nthankyoy");
}
console.log("Mr .".concat(not_persont, " will not coming tomorrow dinner ."));
