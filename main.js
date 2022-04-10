name_of_the_student_array=[];
function submit(){
    var display_student_array=[];

    for(var j=1; j<=4; j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var lenght_of_the_student_array= name_of_the_student_array.length;

    for(var p=0; p<lenght_of_the_student_array; p++){
        display_student_array.push("<h4>NAME-" +name_of_the_student_array[p]+"</h4>");


    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_the_commas= display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_the_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    name_of_the_student_array.sort();
    var display_student_array_sorting=[];
 var lenght_of_the_student_array= name_of_the_student_array.length;

    for(var p=0; p<lenght_of_the_student_array; p++){
        display_student_array_sorting.push("<h4>NAME-" +name_of_the_student_array[p]+"</h4>");


    } 
    var remove_the_commas= display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_the_commas;
      
}