//main.js
function requirment_search(germany_country_code, spain_country_code) {
    fetch(`https://sandbox.travelperk.com/travelsafe/restrictions?origin=${germany_country_code}&destination=${spain_country_code}&origin_type=country_code&destination_type=country_code&date=2021-3-24`, {
        method: 'GET',
        headers: {
            'Api-Version': '1',
            "Authorization": "ApiKey Xbp0hY.uJouyej9TKS6BX0bMLupvSnSSIB8E416"
        },
    })
        .then(response => response.json())
        .then(data => {
            // div created
            const div = document.getElementById("req_container")
            //first p created and assigned to names
            const country_name = document.createElement("p");
            country_name.innerHTML = `OriginCountry: ${data.origin.name} => DestinationCountry: ${data.destination.name}`;
            //thrid p create and assigned to authorization
            const authorazion_status = document.createElement("p");
            authorazion_status.innerHTML = `Authoriazation Status: ${data.authorization_status}`
            //Category_1
            const cat_1 = document.createElement("h4");
            cat_1.innerHTML = "Category-1:";
            const liul_cat = document.createElement("ul");
            const li_cat = document.createElement("li");
            li_cat.innerHTML = `${data.requirements[0].details}`
            liul_cat.appendChild(li_cat);
            const liul_cat1 = document.createElement("ul");
            const li_cat1 = document.createElement("li");
            li_cat1.innerHTML = `StartDate: ${data.requirements[0].start_date}`
            liul_cat1.appendChild(li_cat1);
            const liul_cat2 = document.createElement("ul");
            const li_cat2 = document.createElement("li");
            li_cat2.innerHTML = `EndDate: ${data.requirements[0].end_date}`
            liul_cat2.appendChild(li_cat2);
            const liul_cat3 = document.createElement("ul");
            const li_cat3 = document.createElement("li");
            li_cat3.innerHTML = `${data.requirements[0].summary}`
            liul_cat3.appendChild(li_cat3);
            //Category_2
            const cat_2 = document.createElement("h4");
            cat_2.innerHTML = "Category-2:";
            const a_tag = document.createElement("a");
            const tex_node = document.createTextNode("Find the form");
            a_tag.setAttribute("href", `${data.requirements[1].documents[0].document_url}`);
            a_tag.appendChild(tex_node);
            a_tag.style.textDecoration = "none"
            a_tag.style.paddingLeft = "45px"
            const liul2_cat = document.createElement("ul");
            const li2_cat = document.createElement("li");
            li2_cat.innerHTML = `${data.requirements[1].details}`
            liul2_cat.appendChild(li2_cat);
            const liul2_cat3 = document.createElement("ul");
            const li2_cat3 = document.createElement("li");
            li2_cat3.innerHTML = `${data.requirements[1].summary}`
            liul2_cat3.appendChild(li2_cat3);
            const sum_ry = document.createElement("p");
            sum_ry.innerHTML = `${data.summary}`
            // //appending the childs with div
            div.appendChild(country_name);
            div.appendChild(authorazion_status);
            div.appendChild(cat_1)
            div.appendChild(liul_cat)
            div.appendChild(liul_cat1)
            div.appendChild(liul_cat2)
            div.appendChild(liul_cat3)
            div.appendChild(cat_2)
            div.appendChild(liul2_cat)
            div.appendChild(a_tag);
            div.appendChild(liul2_cat3)
            div.appendChild(sum_ry)
        })
}
window.onload = function () {
    requirment_search("DE", "ES");
}

