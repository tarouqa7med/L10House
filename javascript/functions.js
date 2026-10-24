
function serviceDescription(desc) {

        let regex = /L10N House/gmi;
        return desc.replaceAll(regex, `<span class="fw-medium"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>`);
}

function openModal(that, service) {
        console.log(that)
        console.log(service)
}