'use strict';


let forminfo = document.getElementById('forminfo');
let article = document.getElementById('article');

function Articles(AuthorName,ArticalTitle,Content,Date,Subject){
  this.AuthorName = AuthorName;
  this.ArticalTitle = ArticalTitle;
  this.Content = Content ;
  this.Date = Date;
  this.Subject = Subject;

  Articles.all.push(this);
  localStorage.setItem('articles',JSON.stringify(Articles.all));


}

Articles.all = [];

function getInfo(event){
  event.preventDefault();

  let AuthorName = event.target.authorname.value;
  let ArticalTitle = event.target.articletitle.value;
  let Content = event.target.content.value;
  let Date = event.target.date.value;
  let Subject = event.target.subject.value;

  new Articles(AuthorName,ArticalTitle,Content,Date,Subject);

  article.innerHTML ='';
  render();

}

function getData(){
  if (localStorage.articles){
    let data = localStorage.getItem('articles');
    let convdata = JSON.parse(data);
    for(let i =0 ;i<convdata.length ;i++){
      Articles.all.push(convdata[i]);
    }
  }
}


function render(){
  let renderCnt = 1;


  for(let i = 0 ;i<Articles.all.length;i++){

    let arttitle = document.createElement('p');
    arttitle.textContent =(`${Articles.all[i].ArticalTitle}`);
    article.appendChild(arttitle);
    let imag= document.createElement('img');
    imag.setAttribute('src', 'img/asac_ltuc.jpg');
    article.appendChild(imag);

    let arthname = document.createElement('p');
    arthname.textContent = (`Author: ${Articles.all[i].AuthorName}`);
    article.appendChild(arthname);
    let date = document.createElement('p');
    date.textContent = (`Date: ${Articles.all[i].Date}`);
    article.appendChild(date);

    let likes = document.createElement('p');
    likes.textContent =(`${Math.floor(Math.random() * (500 - 1) ) + 1} Likes`);
    article.appendChild(likes);

    let subject = document.createElement('p');
    subject.textContent=(`${Articles.all[i].Subject}`);
    article.appendChild(subject);


    let content = document.createElement('p');
    content.textContent =(`${Articles.all[i].Content}`);
    article.appendChild(content);

    let artid= document.createElement('p');
    artid.textContent =(`Aricle ID :${renderCnt}`);
    article.appendChild(artid);

    let horiz =document.createElement('hr');
    horiz.textContent =('');
    article.appendChild(horiz);




    renderCnt++;




  }
  let totalart = document.createElement('h1');
  let renderCntMin =renderCnt-1;
  totalart.textContent=(`Total Articles :${renderCntMin}`);
  article.appendChild(totalart);


}


forminfo.addEventListener('submit',getInfo);
getData();
render();
