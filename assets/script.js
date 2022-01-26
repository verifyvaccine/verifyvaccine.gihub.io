var url_string = window.location.href,
    url = new URL(url_string),
    param = url.searchParams.get("verified"),
    container = document.getElementById('container'),
    img1 = 'https://content.screencast.com/users/ronronnmi/folders/Capture/media/42dbe34a-c796-471f-a9bd-6233955c17ac/LWR_Recording.png',
    img2 = 'https://content.screencast.com/users/ronronnmi/folders/Capture/media/0dd813b7-fa7d-49a6-801a-fc0f0803b381/LWR_Recording.png';
    
if( param !== '988b97323a61c9f53f155116e54beb58' && param !== '6590d90f142288c4ca327888bbe92b46' ){
    container.innerHTML = '';
} else {
    var img = ( param === '988b97323a61c9f53f155116e54beb58' ) ? img1 : img2;
    var patient = ( param === '988b97323a61c9f53f155116e54beb58' ) ? 'N. SEMINIANO' : 'R. SEMINIANO';
    document.getElementById("profile_image").src = img;
    document.getElementById("name").innerHTML = patient;
}