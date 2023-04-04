 export const Footer = () => {
    const footer = document.getElementById('footer');

    const div1 = document.createElement('div');
    const iconWebPage = document.createElement('img');
    const webPage = document.createElement('h4');

    iconWebPage.setAttribute('src', 'https://i.postimg.cc/7P7WWZ0v/sitio-web.png');
   webPage.textContent = '<span style="color: black">cafe</span><span style="color: white ">Etrusca</span><span style="color: black">.com</span>';

    div1.append(iconWebPage, webPage);

    const div2 = document.createElement('div');
    const iconInstagram = document.createElement('img');
    const iconFacebook = document.createElement('img');
    const nameRed = document.createElement('h4');

    iconFacebook.setAttribute('src', 'https://i.postimg.cc/NFwpcRT3/facebook.png'                                            );
    iconInstagram.setAttribute('src', 'https://i.postimg.cc/rsJC23q4/instagram.png');
    nameRed.textContent = '<span style="color: black">@cafe.</span><span style="color: white ">etrusca</span>';

    div2.append(iconFacebook, iconInstagram, nameRed)

    return footer.append(div1, div2)

 }