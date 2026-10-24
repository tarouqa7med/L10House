
(async function() {
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/services"),
                services = await response.json();
        
        console.log(services);
        
        let id = 0;
        for (let service of services) {

                $("#Services .row").append(`
                                <div class="col col-lg-6 col-md-10 m-md-auto">
                                        <div class="item px-4 py-4 d-flex flex-column justify-content-center align-items-center">
                                                <img class="img-fluid mb-4" src="./attachments/${service.icon}" alt="">
                                                <p class="title text-black fs-1">${service.title}</p>
                                                <p class="description text-center fs-4">${serviceDescription(service.description.slice(0, 150))}... <button class="border-0 bg-transparent p-0 firstColor fw-medium" onclick="openModal(this, ${id++})">Read More</button></p>
                                        </div>
                                </div>
                        `)
        }
})();
