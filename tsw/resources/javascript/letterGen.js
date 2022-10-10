//this is the actual function to generate the custom letter
//setting the boilerplates and reuseable strings
  let sexualitySect = "sexualitySect"
  let closingSect = "closingSect"
  let unsupportedOptionsMsg = "unsupportedOptionsMsg"
  //begining boilerplates
  let bpToParentIntro = "bpToParentIntro";
  let bpToFriendsIntro = "bpToFriendsIntro";
  //gender identity specific bp
  let bpTransF = "bpTransF";
  let bpTransM = "bpTransM";
  let bpAgender = "bpAgender";
  let bpGenderFluid =  "bpGenderFluid";
//pulling user input
  let introLine = document.getElementById('introLine').value;
  let toLine = document.getElementById('toLine').value;
  let fromLine = document.getElementById('fromLine').value;
  let genderIdentity = document.getElementById('genderIdentity').value;
  let sexuality = document.getElementById('sexuality').value;
  let iLike = document.getElementById('iLike').value
  let extraContent = document.getElementById('extraContent').value;
  let relationshipToRecipient = document.getElementById('relationshipToRecipient').value;

function generate_letter(){
//branching if statements evaluating user input then changing the inner html of the letter paras
  if ( //if to parents
    relationshipToRecipient = "parent"
  ){
    if (genderIdentity = "trans woman"){
      let letterFinal = concat(" ", introLine, toLine, bpToParentIntro, bpTransF, sexuality, sexualitySect, iLike, closingSect, extraContent);
      document.getElementById('letterPara1').innerHTML = concat(" ", introLine, toLine, bpToParentIntro, bpTransF, sexuality, sexualitySect, iLike, closingSect, extraContent);
    } else if (genderIdentity = "trans man"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToParentIntro + bpTransM +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    } else if (genderIdentity = "agender"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToParentIntro + bpAgender +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    } else if (genderIdentity = "gender fluid"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToParentIntro + bpGenderFluid +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    }else{
      document.getElementById('letterPara1').innerHTML = unsupportedOptionsMsg;
    }
  } elseif( //if to friends
    relationshipToRecipient = "friend"
  ){
    if (genderIdentity = "trans woman"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToFriendsIntro + bpTransF +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    } else if (genderIdentity = "trans man"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToFriendsIntro + bpTransM +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    } else if (genderIdentity = "agender"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToFriendsIntro + bpAgender +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    } else if (genderIdentity = "gender fluid"){
      document.getElementById('letterPara1').innerHTML = introLine + toLine + bpToFriendsIntro + bpGenderFluid +
      sexuality + sexualitySect + iLike + closingSect + extraContent;
    }else{
      document.getElementById('letterPara1').innerHTML = unsupportedOptionsMsg;
    }
  }
}
