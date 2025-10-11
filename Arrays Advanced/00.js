

/* 
to do: functions extra excercise, watch further video about coding concepts, arrays advanced excercise + extra's



sort() - video name: Obrabotka na masivi, 20:00 if you want to repeat

* сортира difault: като стрингове във азбучен и възходящ ред (не работи добре с различни видеве числа. Например 1, 101, 203, 300, 4, 8 -вшима само първото число под внимание) работи добре ако искаш да ти сортира имена например
NEEDS A FOLLOWING FUNCTION TO DO WHAT YOU EXACTLY WANT IT TO DO FOR YOU

*/

/* let randomNames = ['Borislav', 'Ana', 'Ivan', 'Maria'];

randomNames.sort(function (first, second) {
    return first.length - second.length;
    //OR
    if(first.length < second.length){
        return -1;
    } else if (first.length > second.length){
        return 1
    } else {
        return 0;
    }
})
// randomNames.sort((first,second) => first.length - second.length); is the short, arrow function version
// ok.. this is very confusing but what you need to remember is: If you have numbers and you want to sort them in ascending/decending order just do this:
// numbers.sort((a,b) => a - b); - 1,2,3,4...
// numbers. sort(a,b) => b -a); - ...4,3,2,1
// you basically give the rulles for comparison/sort. It works element by element


--------------------------------------------------------------
/*
.localeCompare - can be used in cases where the elements are differently built. For example: an array with strings where some elements start with capital letter, others not. You want to sort the array in a alphabetical orded but the default function will sort first all HHH and then hhh. This will help you sort them regardless of their syntax
someText.sort((a,b) => a.localeCompare(b));
*/
