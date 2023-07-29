/* 
        const productTab = [
            {
                'title': 'item1',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'canelle',
                'background': 'white'
            },

            {
                'title': 'item2',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'arielle',
                'backgroundColor': 'yellow'
            },

            {
                'title': 'item3',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'jessica',
                'backgroundColor': 'green'
            },
            {
                'title': 'item4',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'next',
                'backgroundColor': 'gray'
            },
            {
                'title': 'item5',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'happiness',
                'backgroundColor': `bisque`
            },
            {
                'title': 'item6',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'deborah',
                'backgroundColor': ` black`
            },
            {
                'title': 'item7',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'loan',
                'backgroundColor': `red`
            },
            {
                'title': 'item8',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'canelleAdotevi',
                'backgroundColor': `violet`
            },
            {
                'title': 'item9',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'canelleAdotevi',
                'backgroundColor': `skyblue`
            },
            {
                'title': 'item10',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'canelleAdotevi',
                'backgroundColor': `brown`
            },
            {
                title: 'item11',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'ted',
                'backgroundColor': `blueviolet`
            },
            {
                'title': 'item12',
                'description': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolorem dolores',
                'author': 'geovanio',
                'backgroundColor': `yellow`
            }
        ] 
       
        let product_content_list = document.querySelector('.product_content_list')
        
        productTab.forEach(item => {

       
        let product_content_item = document.createElement('div')
        product_content_item.setAttribute = ('class','product_content_item')
            

          
            product_content_list.innerHTML += `
                    <div class="product_content_item"> 
                        <div class="product_content_item_top">
                            <div class="product_circle" style='background-color:${item.backgroundColor}'>

                            </div>
                        </div>
                        <div class="product_content_item_bottom">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                            <span>${item.author}</span>

                        </div>
                    </div> 
              `
        }); */
/*  let gender1 = document.querySelector('gender1.input')
        let gender2 = document.querySelector('gender2.input')
        gender1.addEventListener('click',function(e){
        gender2 = document.querySelector('.gender2_inactive.input')

        }) */

/* 
const form = document.querySelector('form')
/* let formTab = [] 
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let Lastname = document.querySelector('input[Lastname="nom"]').value
        console.log(Lastname);
        let Firstname = document.querySelector('input[Firstname="prenom"]').value
        console.log(Firstname); 
       let motivation = document.querySelector('textarea[motivation="motivation"]').value
       console.log(motivation);
       

         const customer = {
            'Lastname' : Lastname,
            'Firstname' : Firstname,
            'message' : message

        }
        formTab.push(customer)
        console.log(formTab) 

       
       
    })
} */

let button = document.querySelector('button[type = "submit"]');
 let tab = []; 
 if (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let lastname = document.querySelector("input[lastname='nom']").value;
    /* console.log(lastname) */
    let firstname = document.querySelector("input[firstname='prenom']").value;
     /* console.log(firstname); */
    /*  let country = document.querySelector("select.option").value;
        console.log(option); */
    let phone_number = document.querySelector("input[number='tel']").value;
    /* console.log(phone_number); */
    let motivation = document.querySelector(
      "textarea[motivation='motivation']" ).value;
    /* console.log(motivation); */

    let candidate = {
      'lastname': lastname,
      'firstname': firstname,
      'phone_number': phone_number,
      'motivation': motivation
    };
    tab.push(candidate);
    /* for(let numero = 0 ;) */
    let form_information_content = document.querySelector('.form_information_content')
    if(form_information_content){
        let table_item = document.createElement('table_item')
        table_item.setAttribute = ('class','table_item')
        form_information_content.innerHTML += `<div class ="table_item">
        <p>lastname: ${lastname}</p>
        <p>firstname: ${firstname}</p>
        <p>phone number: ${phone_number}</p>
        <p>motivation: ${motivation}</p>
        </div>`
        
    }
     

      });
  }

