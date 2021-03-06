/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

console.log('Liftoff!');

/*
** Emails
*/

var eMailbox = 'hello',
  eDomain = 'andreaburan.com',
  eAddress = (eMailbox + '@' + eDomain);

//console.log(eAddress);

var eLink;

//console.log(eLink);

var eEnvelope = document.getElementsByClassName('envelope');

for (i = 0; i < eEnvelope.length; i++) {
  eLink = document.createElement('a');
  eLink.setAttribute('href', 'mailto:' + eAddress);
  eLink.textContent = eAddress;
  eEnvelope[i].prepend(eLink);
}

/*
** Footnotes
*/

var footnote = document.getElementsByClassName('reversefootnote');

console.log(footnote);

for (i = 0; i < footnote.length; i++) {
  footnote[i].textContent = 'Back to Number';
}
