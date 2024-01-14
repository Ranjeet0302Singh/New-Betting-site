var apiKey = "bd494afa153c0ddbfb33e7ba8cf51004";


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    
    fetch(`http://apicricketchampion.in/apiv3/news/${apiKey}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        var news = document.getElementById('news');
        news.innerHTML = "";
        result = JSON.parse(result);

        for (const item of result.data) {
            var news_id = item.news_id
            news.innerHTML += `
            <a href="single-news.html?news_id=${news_id}">
            <li>
                <div class="item">
                <div class="container">
                    <div class="card">
                    <div class="card-header">
                        <img
                        src="${item.image}"
                        alt="rover"
                        />
                    </div>
                    <div class="card-body" >
                        <h4>${item.title}</h4>
                        <p>${item.content}</p>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            </a>`;
            
        }
        
        
        }
    )
    .catch(error => console.log('error', error));


