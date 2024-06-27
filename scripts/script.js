let job_modal=document.querySelector(".job-modal")
let exit_btns=document.querySelectorAll(".exit-modal-btn")
let show_modal_btns=document.querySelectorAll(".show-modal-btn")
let save_modal_btns=document.querySelectorAll(".save-modal-btn")
let delete_modal_btn=document.querySelectorAll(".delete-btn")

let modals={
    "job-modal":".jobs",
    "education-modal":".education",
    "skills-modal":".skills",
    "languages-modal":".languages",
    "contact-modal":".contact-info",
    "info-modal":".personal-info",
    "job-info-modal":".job-info"
}
function add_job(event,modal,items)
{
    let title=modal.querySelector(".title").value
    let date=modal.querySelector(".date").value
    let footer=modal.querySelector(".footer").value
    let location=modal.querySelector(".location").value
    let description=modal.querySelector(".description").value

    let modal_job_template=`
    <div class="item">
        <div class="img-box">
            <img class="img" src="./resources/digikala.png">
        </div>
        <div class="content">
            <div class="row">
                <h2 class="title">${title||"_"}</h2>
                <div class="date">${date||"_"}</div>
            </div>
            <div class="footer">${footer||"_"}</div> 
            <div class="row">
                <div class="footer">${location||"_"}</div> 
                <div >
                    <button class="delete-btn" onclick="delete_modal(event)">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
                
            </div>
            <div class="description">${description}</div>                                   
        </div>
    </div>
    `
    
    modal.querySelector(".title").value=""
    modal.querySelector(".date").value=""
    modal.querySelector(".footer").value=""
    modal.querySelector(".location").value=""
    modal.querySelector(".description").value=""
    items.innerHTML+=modal_job_template
    modal.style.display="none"
}
function add_education(event,modal,items)
{
    let title=modal.querySelector(".title").value
    let date=modal.querySelector(".date").value
    let Name=modal.querySelector(".name").value
    let link=modal.querySelector(".link").value
    let description=modal.querySelector(".description").value

    let modal_job_template=`
    <div class="item">
        <div class="img-box">
            <img class="img" src="./resources/sharif.png">
        </div>
        <div class="content">
            <div class="row">
                <h2 class="title">${title||"_"}</h2>
                <div class="date">${date||"_"}</div>
            </div>
            <div class="row">
                <div class="footer">
                    <a class="link" ><span class="name">${Name||"_"}</span></a>
                </div>
                <div >
                    <button class="delete-btn" onclick="delete_modal(event)">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
            <div class="description">${description}</div>
        </div>
    </div>
    `
    // href=${link||null}
    modal.querySelector(".title").value=""
    modal.querySelector(".date").value=""
    modal.querySelector(".name").value=""
    modal.querySelector(".link").value=""
    modal.querySelector(".description").value=""
    items.innerHTML+=modal_job_template
    if(link)
    {
        items.lastElementChild.querySelector(".link").href=link
    }
    modal.style.display="none"
}
function add_skills(event,modal,items)
{
    let title=modal.querySelector(".title").value
    let option=Number(modal.querySelector("#skills-select").value)
    let years=modal.querySelector(".years").value

    let modal_skills_template=`
    <div class="item">
        <div class="content">
            <div class="row">
                <div class="title">
                    ${title}
                </div>
                <div>
                    <div class="row">
                        <div class="years">${years||"_"}</div>
                        <div >
                            <button class="delete-btn" onclick="delete_modal(event)">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                    <div class="levels">
                    
                        <div class="circle" style="background-color:${option>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-1>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-2>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-3>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-4>0 && 'rgb(18, 206, 174)'}"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    `
    // href=${link||null}
    modal.querySelector(".title").value=""
    modal.querySelector(".years").value=""
    items.innerHTML+=modal_skills_template
    modal.style.display="none"
}
function add_languages(event,modal,items)
{
    let title=modal.querySelector(".title").value
    let option=Number(modal.querySelector("#skills-select").value)

    let modal_languages_template=`
    <div class="item">
        <div class="content">
            <div class="row">
                <div class="title">
                    ${title}
                </div>
                <div>
                    <div class="row">
                        <div>
                        </div>
                        <div >
                            <button class="delete-btn" onclick="delete_modal(event)">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                    <div class="levels">
                        <div class="circle" style="background-color:${option>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-1>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-2>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-3>0 && 'rgb(18, 206, 174)'}"></div>
                        <div class="circle" style="background-color:${option-4>0 && 'rgb(18, 206, 174)'}"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    `
    // href=${link||null}
    modal.querySelector(".title").value=""
    items.innerHTML+=modal_languages_template
    modal.style.display="none"
}

function add_contact(event,modal,items)
{
    let address=modal.querySelector(".address").value
    let phone=modal.querySelector(".phone").value
    let mail=modal.querySelector(".mail").value
    
    let modal_languages_template=`
    <div class="row">
        <i class="fa fa-map-marker"></i><span>${address}</span>
    </div>
    <div class="row">
        <i class="fa fa-phone"></i><span>${phone}</span>
    </div>
    <div class="row">
        <i class="fa fa-envelope"></i><span>${mail}</span>
    </div>
    `
    // href=${link||null}

    items.innerHTML=modal_languages_template
    modal.style.display="none"
}
function add_info(event,modal,items)
{
    let m_sel=modal.querySelector("#marrage")
    let g_sel=modal.querySelector("#gender")
    let s_sel=modal.querySelector("#service")
    
    let age=modal.querySelector(".age").value
    let marrage=m_sel.options[m_sel.selectedIndex].text
    let gender_v=g_sel.value
    let gender=g_sel.options[g_sel.selectedIndex].text
    let service=s_sel.options[s_sel.selectedIndex].text

    let modal_languages_template=`
    <div class="row">
        <div class="key age">سن</div>
        <div class="value age-value">${age}</div>
    </div>
    <div class="row">
        <div class="key marrage">وضعیت تاهل</div>
        <div class="value marrage-value">${marrage}</div>
    </div>
    <div class="row">
        <div class="key gender">جنسیت</div>
        <div class="value gender-value">${gender}</div>
    </div>
    <div class="row">
        <div class="key mil">وضعیت خدمت سربازی</div>
        <div class="value mil-value">${service}</div>
    </div>
    `
    // href=${link||null}

    items.innerHTML=modal_languages_template
    if(gender_v=="2")
    {
        items.querySelector(".mil").style.display="none"
        items.querySelector(".mil-value").style.display="none"
    }
    modal.style.display="none"
}
function add_job_info(event,modal,items)
{
    let j_sel=modal.querySelector("#job-type")
    
    let job_type=j_sel.options[j_sel.selectedIndex].text
    let salary = modal.querySelector(".salary").value

    let modal_languages_template=`
    <div class="row">
    <div class="key marrage">نوع شغل مورد نظر</div>
    <div class="value marrage-value">${job_type}</div>
    </div>
    <div class="row">
        <div class="key gender">حقوق موردنظر</div>
        <div class="value gender-value">${salary}</div>
    </div>
    `
    // href=${link||null}

    items.innerHTML=modal_languages_template

    modal.style.display="none"
}
function find_modal(event)
{
    let modal=event.target.closest(".modals")
    console.log(modal.id)
    let segment=modals[modal.id]
    console.log(segment)
    console.log(document.querySelector(segment))
    let items=document.querySelector(segment).querySelector(".items")
    if(modal.id=="job-modal")
    {
        add_job(event,modal,items)
        return
    }
    if(modal.id=="education-modal")
    {
        add_education(event,modal,items)
        return
    }
    if(modal.id=="skills-modal")
    {
        console.log(items)
        add_skills(event,modal,items)
        return
    }
    if(modal.id=="languages-modal")
    {
        // console.log(items)
        add_languages(event,modal,items)
        return
    }
    if(modal.id=="contact-modal")
    {
        add_contact(event,modal,items)
        return
    }
    if(modal.id=="info-modal")
    {
        add_info(event,modal,items)
        return
    }
    if(modal.id=="job-info-modal")
    {
        add_job_info(event,modal,items)
        return
    }
}
function exit_modal(event)
{
    let modal=event.target.closest(".modals")
    modal.style.display="none"
}
function show_modal(event)
{
    let modal_class=String(this.id).substring(2)
    let target_modal=document.getElementById(modal_class)
    console.log(target_modal)
    target_modal.style.display="flex"
}
function delete_modal(event)
{
    let modal=event.target.closest(".item")
    modal.remove()
}
exit_btns.forEach((btn)=>btn.addEventListener("click",exit_modal))
show_modal_btns.forEach((btn) => btn.addEventListener("click",show_modal))
save_modal_btns.forEach((btn) => btn.addEventListener("click",find_modal))
delete_modal_btn.forEach((btn)=>btn.addEventListener("click",delete_modal))