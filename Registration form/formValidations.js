function validate() {

    var upassword = document.getElementById("inputPwd").value;
    var confpassword = document.getElementById("inputCpwd").value;

    if (upassword != confpassword) {
        alert("Passwords do not match.");
        return false;
    }

    if( document.myForm.fName.value == "" ) {
        alert( "Please enter your first name!" );
        document.myForm.fName.focus() ;
        return false;
    }
    if( document.myForm.lName.value == "" ) {
        alert( "Please enter your last name!" );
        document.myForm.lName.focus() ;
        return false;
    }
    if( document.myForm.eMail.value == "" ) {

        alert( "Please enter your email id!" );
        document.myForm.eMail.focus() ;
        return false;
    }
    if( document.myForm.gender.value == null ) {

        alert( "Please select your gender!" );
        document.myForm.gender.focus() ;
        return false;
    }
    if( document.myForm.cNum.value == "" ) {

        alert( "Please enter your contact number!" );
        document.myForm.cNum.focus() ;
        return false;
    }
    if( document.myForm.dOb.value == "" ) {

        alert( "Please enter your date of birth!" );
        document.myForm.dOb.focus() ;
        return false;
    }
    if( document.myForm.uName.value == "" ) {

        alert( "Please enter your user name!" );
        document.myForm.uName.focus() ;
        return false;
    }
    if( document.myForm.pWd.value == "" ) {

        alert( "Please enter your password!" );
        document.myForm.pWd.focus() ;
        return false;
    }
    if( document.myForm.cPwd.value == " " ) {
        alert( "Please enter your confirm password!" );
        return false;
    }
    return( true );

}

function clearText()
{
    document.getElementById('inputFname').value = "";
    document.getElementById('inputLname').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputCont').value = "";
    document.getElementById('inputDob').value = "";
    document.getElementById('inputUname').value = "";
    document.getElementById('inputPwd').value = "";
    document.getElementById('inputCpwd').value = "";
}

$(document).ready(function () {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
});

