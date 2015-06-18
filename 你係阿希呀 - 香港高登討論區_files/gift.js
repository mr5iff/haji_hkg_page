//Gift Functions
function ToggleGiftBeer() {
  $get('DivGiftBeer').style.display = '';
  PutBoxToMiddle($get('DivGiftBeer'), 650, 80);
  $get('ctl00_ContentPlaceHolder1_GiftBeerTextBox').focus();
}

function ToggleGiftKau() {
  $get('DivGiftKau').style.display = '';
  PutBoxToMiddle($get('DivGiftKau'), 650, 80);
  $get('ctl00_ContentPlaceHolder1_GiftKauTextBox').focus();
}

function SendBeer() {
  $get('DivGiftBeer').style.display = 'none';
  if($get('ctl00_ContentPlaceHolder1_siteUpdateProgress') != null)
  {
    $get('ctl00_ContentPlaceHolder1_siteUpdateProgress').style.display = '';
    PutBoxToMiddle($get('ctl00_ContentPlaceHolder1_siteUpdateProgress'), 150, 30);
  }
  
  PageMethods.SendGifts($get('hidden_userid').value, 'Beer',$get('ctl00_ContentPlaceHolder1_GiftBeerTextBox').value, onSendGiftSucceed);
}

function SendKau() {
  $get('DivGiftKau').style.display = 'none';
  if($get('ctl00_ContentPlaceHolder1_siteUpdateProgress') != null)
  {
    $get('ctl00_ContentPlaceHolder1_siteUpdateProgress').style.display = '';
    PutBoxToMiddle($get('ctl00_ContentPlaceHolder1_siteUpdateProgress'), 150, 30);
  }
  
  PageMethods.SendGifts($get('hidden_userid').value, 'Kau',$get('ctl00_ContentPlaceHolder1_GiftKauTextBox').value, onSendGiftSucceed, onSendGiftFailed);
}

function onSendGiftSucceed(result, userContext, methodName) {
  if($get('ctl00_ContentPlaceHolder1_siteUpdateProgress') != null)
  {
    $get('ctl00_ContentPlaceHolder1_siteUpdateProgress').style.display = 'none';
  }
  
  if(result != '')
    alert(result);
}

function onSendGiftFailed(error, userContext, methodName)
{
  if($get('ctl00_ContentPlaceHolder1_siteUpdateProgress') != null)
  {
    $get('ctl00_ContentPlaceHolder1_siteUpdateProgress').style.display = 'none';
  }
  
  alert("An error occurred")
}